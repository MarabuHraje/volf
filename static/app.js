// Minimal interactivity for static version
(function(){
  // Smooth scroll for internal anchors (fallback for browsers without native smooth behavior spec)
  document.addEventListener('click', function(e){
    const a = e.target.closest('a[href^="#"]')
    if(!a) return
    const id = a.getAttribute('href').slice(1)
    const el = document.getElementById(id)
    if(el){
      e.preventDefault()
      el.scrollIntoView({ behavior:'smooth', block:'start' })
      history.replaceState(null,'', '#'+id)
    }
  })

  // FAQ toggle
  document.querySelectorAll('.faq-item button').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.faq-item')
      const open = parent.classList.toggle('open')
      btn.setAttribute('aria-expanded', open ? 'true' : 'false')
    })
  })

  // Reviews handling (localStorage only in static version)
  const reviewForm = document.getElementById('review-form')
  const reviewsWrap = document.getElementById('reviews-list')
  const ratingAvgEl = document.getElementById('rating-average')
  const ratingCountEl = document.getElementById('rating-count')

  function loadReviews(){
    try {
      const data = JSON.parse(localStorage.getItem('reviews')||'[]')
      return Array.isArray(data) ? data : []
    } catch { return [] }
  }
  function saveReviews(list){ localStorage.setItem('reviews', JSON.stringify(list)) }
  function escapeHTML(str){
    return str.replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[ch]||ch))
  }
  function renderReviews(){
    const list = loadReviews()
    reviewsWrap.innerHTML = ''
    if(list.length === 0){
      reviewsWrap.innerHTML = '<p class="muted">Zatím žádné recenze.</p>'
    } else {
      list.slice().sort((a,b)=> new Date(b.date) - new Date(a.date)).forEach(r => {
        const div = document.createElement('div')
        div.className='review'
        const safeName = escapeHTML(r.name)
        const safeComment = escapeHTML(r.comment)
        div.innerHTML = `<div class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div><strong>${safeName}</strong><p>${safeComment}</p><div class="rating-summary small">${new Date(r.date).toLocaleDateString('cs-CZ')}</div>`
        reviewsWrap.appendChild(div)
      })
    }
    const avg = list.reduce((s,r)=>s+r.rating,0)/ (list.length||1)
    ratingAvgEl.textContent = list.length ? avg.toFixed(1) : '—'
    ratingCountEl.textContent = list.length
  }
  if(reviewForm){
    reviewForm.addEventListener('submit', e => {
      e.preventDefault()
      const fd = new FormData(reviewForm)
      const name = (fd.get('name')||'').toString().trim() || 'Anonym'
      const rating = parseInt(fd.get('rating'),10) || 5
      const comment = (fd.get('comment')||'').toString().trim()
      if(!comment) return
      const list = loadReviews()
      list.push({ id: Date.now().toString(36), name, rating, comment, date: new Date().toISOString() })
      saveReviews(list)
      reviewForm.reset()
      renderReviews()
    })
    renderReviews()
  }

  // Lazy reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add('visible'); io.unobserve(en.target) }
    })
  }, { threshold:.2 })
  document.querySelectorAll('.lazy').forEach(el=> io.observe(el))
})();
