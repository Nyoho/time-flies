import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useRef } from 'react'

interface TimeSlipModalProps {
  isModalOpen: boolean
  inputDateTime: string
  setInputDateTime: Dispatch<SetStateAction<string>>
  handleCloseModal: () => void
  handleTimeSlip: () => void
  resetToCurrentTime: () => void
}

const TimeSlipModal = ({
  isModalOpen,
  inputDateTime,
  setInputDateTime,
  handleCloseModal,
  handleTimeSlip,
  resetToCurrentTime,
}: TimeSlipModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const previousFocusRef = useRef<Element | null>(null)

  useEffect(() => {
    if (!isModalOpen) {
      return
    }

    previousFocusRef.current = document.activeElement
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!modalRef.current) {
        return
      }

      if (event.key === 'Escape') {
        event.preventDefault()
        handleCloseModal()
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      )

      if (focusableElements.length === 0) {
        event.preventDefault()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      const activeElement = document.activeElement

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      if (previousFocusRef.current instanceof HTMLElement) {
        previousFocusRef.current.focus()
      }
    }
  }, [isModalOpen, handleCloseModal])

  if (!isModalOpen) {
    return null
  }

  return (
    <>
      <div
        ref={modalRef}
        className={`modal fade ${isModalOpen ? 'show' : ''}`}
        style={{ display: isModalOpen ? 'block' : 'none' }}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="time-slip-modal-title"
        aria-describedby="time-slip-modal-description"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 id="time-slip-modal-title" className="modal-title">
                時刻ワープ
              </h5>
              <button
                ref={closeButtonRef}
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
                aria-label="閉じる"
              ></button>
            </div>
            <div id="time-slip-modal-description" className="modal-body">
              <div className="form-group">
                <label htmlFor="modalDateTime">時刻:</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="modalDateTime"
                  value={inputDateTime}
                  onChange={(e) => setInputDateTime(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary time-slip-cancel-button" onClick={handleCloseModal}>
                キャンセル
              </button>
              <button type="button" className="btn btn-primary time-slip-confirm-button" onClick={handleTimeSlip}>
                この時刻にタイムスリップ
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary time-slip-reset-button"
                onClick={resetToCurrentTime}
              >
                現在時刻に戻る
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <div className="modal-backdrop fade show" aria-hidden="true" onClick={handleCloseModal}></div>}
    </>
  )
}

export default TimeSlipModal
