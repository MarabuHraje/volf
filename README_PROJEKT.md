# Rybářské a chovatelské služby Volf

Informační website pro rybářské služby s prémiovou výbavou a expertním poradenstvím.

## 🎯 Cíl projektu
Prémiový, expertní a přátelský web s přírodní atmosférou. **NENÍ e-shop** - žádné ceny, žádná tlačítka "Koupit".

## 🚀 Technologie
- **Next.js 14** (App Router)
- **TypeScript** (plně typovaný)
- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (animace)
- **Zod** (validace formulářů)
- Optimalizováno pro **Vercel**

## 📁 Struktura projektu
```
├── app/                    # Next.js App Router
│   ├── globals.css        # Globální CSS + Tailwind
│   ├── layout.tsx         # Root layout s metadaty
│   └── page.tsx           # Hlavní stránka
├── components/            # React komponenty
│   ├── IntroSection.tsx   # Hero sekce
│   ├── AboutSection.tsx   # O značce  
│   ├── ServicesSection.tsx # Služby
│   ├── BenefitsSection.tsx # Proč Volf
│   ├── EcologySection.tsx  # Ekologie & Etika
│   ├── GearTeaserSection.tsx # Výbava (lze vypnout)
│   ├── BlogTeaserSection.tsx # Blog/Rady
│   ├── ContactSection.tsx    # Kontakt + formulář
│   ├── Footer.tsx           # Footer
│   └── StructuredData.tsx   # JSON-LD strukturovaná data
├── data/                  # Mock data
│   ├── services.ts       # Služby
│   ├── benefits.ts       # Benefity
│   ├── gearCategories.ts # Kategorie výbavy
│   ├── blogTeasers.ts    # Blog teasery
│   └── faq.ts           # FAQ
├── lib/                  # Utility funkce
│   ├── structuredData.ts # JSON-LD generátory
│   └── utils.ts         # Pomocné funkce
└── public/              # Statické soubory
    └── images/          # Obrázky (placeholder)
```

## 🎨 Design System
### Barvy
- **Dark Forest**: #0F2A22 (hlavní tmavá)
- **Deep Moss**: #12352A (tmavě zelená)
- **Olive**: #3E593F (olivová)
- **Sand**: #C9BFAF (písková)
- **Off White**: #F2F3EE (krémová)
- **Copper**: #B07A36 (měděná - akcenty)

### Typografie
- **Nadpisy**: Cormorant Garamond (serif)
- **Text**: Inter (sans-serif)

## 🔧 Instalace a spuštění

### Lokální vývoj
```bash
# Instalace závislostí
npm install

# Spuštění vývojového serveru
npm run dev

# TypeScript check
npm run typecheck

# Linting
npm run lint

# Build
npm run build
```

### Deploy na Vercel

#### Jednoduché nasazení
```bash
# Instalace Vercel CLI (pokud nemáte)
npm i -g vercel

# Login do Vercel
vercel login

# Deploy
vercel

# Production deploy
vercel --prod
```

#### Automatické nasazení z GitHub
1. Pushněte kód na GitHub
2. Připojte repository ve Vercel Dashboard
3. Vercel automaticky detekuje Next.js a nasadí

### Environment Variables (pro produkci)
Vytvořte `.env.local` soubor s:
```env
NEXT_PUBLIC_SITE_URL=https://vašedoména.cz
NEXT_PUBLIC_CONTACT_EMAIL=info@vašedoména.cz
```

## 📝 Konfigurace obsahu

### Placeholdery
Tyto placeholdery je třeba nahradit skutečnými daty:
- `{{ADDRESS}}` - Adresa
- `{{CITY}}` - Město
- `{{ZIP}}` - PSČ
- `{{PHONE}}` - Telefon
- `{{EMAIL}}` - E-mail
- `{{OPENING_HOURS}}` - Otevírací doba
- `{{FACEBOOK_URL}}` - Facebook
- `{{INSTAGRAM_URL}}` - Instagram
- `{{YOUTUBE_URL}}` - YouTube

### Zapnutí/vypnutí sekce výbavy
V `app/page.tsx` řádek 14:
```typescript
const enableGearTeaser = true // změňte na false pro vypnutí
```

## 🖼️ Obrázky
Přidejte tyto obrázky do `public/images/`:
- `hero-bg.jpg` - Hero pozadí
- `water-texture.jpg` - Textura vody
- `contact-bg.jpg` - Kontakt pozadí
- `og-image.jpg` - Open Graph (1200x630px)
- `logo.png` - Logo
- `gear/*.jpg` - Obrázky výbavy
- `blog/*.jpg` - Blog obrázky

## 📊 SEO a Analytics
- ✅ Strukturovaná data (JSON-LD)
- ✅ Meta tagy optimalizované
- ✅ Open Graph tagy
- ✅ Sitemap automaticky generovaná
- ✅ Robots.txt
- ✅ Sémantické HTML

## 🎯 Performance
- ✅ Statické generování (SSG)
- ✅ Optimalizované obrázky
- ✅ Lazy loading
- ✅ CSS optimalizace
- ✅ Bundle size optimalizace

## 🛠️ Další kroky
1. **Nahradit placeholdery** skutečnými daty
2. **Přidat obrázky** do public/images/
3. **Nakonfigurovat kontaktní formulář** (email service)
4. **Přidat Google Analytics** (pokud potřeba)
5. **Testovat na různých zařízeních**

## 📞 Podpora
Pro technické dotazy nebo úpravy kontaktujte vývojáře.
