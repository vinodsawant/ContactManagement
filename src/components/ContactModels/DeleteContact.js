import React from 'react';
import { MODAL_FORM_LABEL} from '../../consts';
const deleteContactModal = (obj) => {
    const {deleteContact} = obj;
    return (
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addEditContactModalLabel">{MODAL_FORM_LABEL.DELETE_CONTACT}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>{MODAL_FORM_LABEL.DELETE_CONTACT_CONFIRMATION}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">{MODAL_FORM_LABEL.CLOSE}</button>
                    <button onClick={deleteContact} className="btn btn-primary" data-dismiss="modal">{MODAL_FORM_LABEL.DELETE}</button>
                </div>
            </div>
        </div>
    )
}

export default deleteContactModal;