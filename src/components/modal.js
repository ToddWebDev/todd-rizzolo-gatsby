import React, { useEffect } from "react"
import Portal from "./portal"
import { modal, modalContent } from "../styles/components.modal.css"

function Modal({ children, isOpen, handleClose }) {
  useEffect(() => {
    const closeOnEscapeKey = e => (e.key === "Escape" ? handleClose() : null)
    document.body.addEventListener("keydown", closeOnEscapeKey)
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey)
    }
  }, [handleClose])

  if (!isOpen) return null

  return (
    <Portal>
      <div className="modal">
        <div className="modalContent">
          {children}
          <button onClick={handleClose} className="close-btn">
            Close
          </button>
        </div>
      </div>
    </Portal>
  )
}

export default Modal
