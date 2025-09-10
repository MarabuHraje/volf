"use client"

import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' }
  })
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
}

export const staggerChildren = (stagger: number = 0.08) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger }
  }
})

export const floatVariant: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -12, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
  }
}

export const fishSwim = (duration: number) => ({
  initial: { x: '-10%', y: 0, opacity: 0 },
  animate: {
    x: '110%',
    opacity: [0, 1, 1, 0],
    y: [0, -10, 8, -6, 0],
    transition: { duration, repeat: Infinity, repeatDelay: 4, ease: 'linear' }
  }
})
