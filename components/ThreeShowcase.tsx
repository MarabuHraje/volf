"use client"

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function ThreeShowcase() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!mountRef.current) return
    
    const mount = mountRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    mount.appendChild(renderer.domElement)
    
    // Osvětlení
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 10, 5)
    directionalLight.castShadow = true
    scene.add(directionalLight)
    
    // Skupina pro prut
    const rodGroup = new THREE.Group()

    // Materiály
    const rodMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x2d4a3d,
      shininess: 100 
    })
    const reelMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xb07a36,
      shininess: 150 
    })
    
    // Prut
    const rodGeometry = new THREE.CylinderGeometry(0.05, 0.08, 8, 16)
    const rod = new THREE.Mesh(rodGeometry, rodMaterial)
    rod.rotation.z = Math.PI / 2
    rod.castShadow = true
    rod.receiveShadow = true
    rodGroup.add(rod)
    
    // Navijak
    const reelGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.4, 16)
    const reel = new THREE.Mesh(reelGeometry, reelMaterial)
    reel.position.set(-2, 0, 0)
    reel.rotation.x = Math.PI / 2
    reel.castShadow = true
    rodGroup.add(reel)
    
    // Očka na prutu
    for (let j = 0; j < 6; j++) {
      const eyeGeometry = new THREE.TorusGeometry(0.12, 0.02, 8, 16)
      const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 })
      const eye = new THREE.Mesh(eyeGeometry, eyeMaterial)
      eye.position.set(1 + j * 1.2, 0, 0)
      eye.rotation.y = Math.PI / 2
      rodGroup.add(eye)
    }

    // Pozice a rotace prutu
    rodGroup.position.set(0, 0.2, 0.5)
    rodGroup.rotation.y = 0.08

    scene.add(rodGroup)
    
    // Podlaha s reflexí
    const floorGeometry = new THREE.PlaneGeometry(20, 20)
    const floorMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x3e593f,
      opacity: 0.3,
      transparent: true
    })
    const floor = new THREE.Mesh(floorGeometry, floorMaterial)
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -2
    floor.receiveShadow = true
    scene.add(floor)
    
    camera.position.set(8, 4, 8)
    camera.lookAt(0, 0, 0)
    
    // Animace
    let frame = 0
    const animate = () => {
      frame++
      
      // Jemná animace jednoho prutu
      rodGroup.rotation.y = Math.sin(frame * 0.01) * 0.15 + 0.1
      rodGroup.rotation.x = Math.sin(frame * 0.008) * 0.07
      rodGroup.position.y = Math.sin(frame * 0.02) * 0.25
      rodGroup.rotation.z = Math.sin(frame * 0.015) * 0.06
      
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    
    // Resize handler
    const handleResize = () => {
      const width = mount.clientWidth
      const height = mount.clientHeight
      
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    
    window.addEventListener('resize', handleResize)
    setIsLoaded(true)
    animate()
    
    return () => {
      window.removeEventListener('resize', handleResize)
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-sand/10 to-off-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-emerald-50/50 to-teal-50/30 rounded-3xl border border-sand/30 shadow-2xl overflow-hidden">
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                <div className="text-deep-moss">Načítá se 3D ukázka...</div>
              </div>
            )}
            <div 
              ref={mountRef} 
              className="w-full h-96 md:h-[500px] cursor-grab active:cursor-grabbing"
              style={{ 
                background: 'linear-gradient(135deg, rgba(240,253,250,0.8) 0%, rgba(209,250,229,0.6) 100%)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
