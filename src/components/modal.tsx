import React from 'react'

interface IModalProps {
  title: string
  details: string
  modalId: string
  closeText: string
}

export default function Modal(props: IModalProps): JSX.Element {
  return (
    <>
      <input type="checkbox" id={props.modalId} className="modal-toggle" />
      <div className="modal">
        <div className="w-11/12 max-w-5xl modal-box">
          <h3 className="text-lg font-bold">{props.title}</h3>
          <p className="py-4" dangerouslySetInnerHTML={{ __html: props.details }} />
          <div className="modal-action">
            <label htmlFor={props.modalId} className="btn">{props.closeText}</label>
          </div>
        </div>
      </div>
    </>
  )
}
