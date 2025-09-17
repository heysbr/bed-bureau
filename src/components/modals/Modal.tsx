import { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
};
export default function Modal({children}: ModalProps) {
  return (
    <div className="modal" >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close"></button>
      </div>
      <div className="modal-body">
        {children}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" >Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  )
}