'use client'

import { useEffect, useRef } from 'react'

type Props = {
  isOpen: boolean
  onClose(): void
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog) {
      return
    }

    if (isOpen) {
      dialog.showModal()
    } else if (!isOpen) {
      dialog.close()
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    dialog.addEventListener('keydown', handleEscape)

    return () => {
      dialog.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <dialog
      ref={dialogRef}
      className="mb-0 w-screen rounded-tl-3xl rounded-tr-3xl border-l-2 border-r-2 border-t-2 border-foreground bg-background p-4 text-foreground backdrop:bg-black backdrop:opacity-50"
    >
      {children}
    </dialog>
  )
}
