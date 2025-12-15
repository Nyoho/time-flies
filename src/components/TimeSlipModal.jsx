const TimeSlipModal = ({
  isModalOpen,
  inputDateTime,
  setInputDateTime,
  handleCloseModal,
  handleTimeSlip,
  resetToCurrentTime,
}) => {
  if (!isModalOpen) {
    return null
  }

  return (
    <>
      <div
        className={`modal fade ${isModalOpen ? 'show' : ''}`}
        style={{ display: isModalOpen ? 'block' : 'none' }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">時刻ワープ</h5>
              <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
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
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                キャンセル
              </button>
              <button type="button" className="btn btn-primary" onClick={handleTimeSlip}>
                この時刻にタイムスリップ
              </button>
              <button type="button" className="btn btn-outline-secondary" onClick={resetToCurrentTime}>
                現在時刻に戻る
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        // biome-ignore lint/a11y/useSemanticElements: Bootstrap modal-backdrop requires a div
        <div
          className="modal-backdrop fade show"
          role="button"
          tabIndex={-1}
          onClick={handleCloseModal}
          onKeyDown={(e) => {
            if (e.key === 'Escape') handleCloseModal()
          }}
        ></div>
      )}
    </>
  )
}

export default TimeSlipModal
