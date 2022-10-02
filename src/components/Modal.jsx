const Modal = ({children}) => {
  return (
    <article>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          {children}
        </div>
      </div>
    </article>
  )
}
export default Modal;