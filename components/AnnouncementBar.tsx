"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('announcementDismissed')
    if (dismissed === 'true') setVisible(false)
  }, [])

  const dismiss = () => {
    sessionStorage.setItem('announcementDismissed', 'true')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          role="status"
          aria-live="polite"
          className="w-full bg-dark-forest text-off-white"
        >
          <div className="container mx-auto px-4 py-2 text-sm flex items-center justify-between gap-4">
            <p className="leading-relaxed">
              <strong>E‑shop</strong> je v procesu příprav a brzy bude spuštěn. Děkujeme za trpělivost.
            </p>
            <button
              type="button"
              onClick={dismiss}
              className="px-2 py-1 rounded border border-off-white/30 hover:bg-off-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
              aria-label="Skrýt oznámení o e‑shopu"
            >
              Zavřít
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
