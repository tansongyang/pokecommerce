'use client'

import { useEffect, useRef } from 'react'

type Props = {
  isOpen: boolean
  onClose(): void
  title: string
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, title, children }: Props) {
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
      <div className="flex justify-between">
        <h1 className="heading-1">{title}</h1>
        <button onClick={onClose} className="text-3xl">
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close</span>
        </button>
      </div>
      {children}
    </dialog>
  )
}
