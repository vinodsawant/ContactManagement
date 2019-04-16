import React, {Component} from 'react';
import {isEmpty as _isEmpty} from 'lodash';
import _maxBy from 'lodash/maxBy';
import {Field, reduxForm} from 'redux-form';
import FieldView from "../fieldView";
import {required, validateContactName, isEmail} from "../../utils";
import {FORM_NAME, MODAL_FORM_LABEL} from "../../consts";

class addEditContactModal extends Component {

    constructor(props) {
     super(props);
     this.resetHandler = this.resetHandler.bind(this);
     this.submitHandler = this.submitHandler.bind(this);
     this.deleteHandler = this.deleteHandler.bind(this);
    }

    deleteHandler() {
        const {deleteContact, initialValues} = this.props;
        deleteContact(initialValues);
    }

    submitHandler(values) {
        const {addContact, editContact, isEdit, contacts} = this.props;
        const maxId = _maxBy(contacts, function(contact) {
            return contact.id;
        });
        const payload = {
            id: maxId.id + 1,
            name: values.name,
            username: values.name,
            email: values.email,
            address: {
                city: values.address.city
            },
            phone: values.phone,
            website: values.website,
            company: {
                name: values.company.name
            }
        };
        !isEdit ? addContact(payload) : editContact(values);
    };

    resetHandler() {
        const {reset, closeModal} = this.props;
        reset();
        closeModal();
    };

    render() {
        const {isEdit, messages} = this.props;
        const {handleSubmit} = this.props;
        return (
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addEditContactModalLabel">
                            {isEdit ? MODAL_FORM_LABEL.UPDATE_CONTACT : MODAL_FORM_LABEL.ADD_CONTACT}
                        </h5>
                        <button type="button" className="close" aria-label="Close"
                                onClick={this.resetHandler}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit(this.submitHandler)}>
                            <div className="form-row">
                                <Field
                                    name="name"
                                    type="text"
                                    placeholder="Enter Name"
                                    component={FieldView}
                                    label={MODAL_FORM_LABEL.CONTACT_NAME}
                                    validate={[required, validateContactName]}
                                />
                                <Field
                                    name="email"
                                    id="email"
                                    type="text"
                                    placeholder="Enter Email"
                                    component={FieldView}
                                    label={MODAL_FORM_LABEL.CONTACT_EMAIL}
                                    validate={[required, isEmail]}
                                />
                            </div>
                            <div className="form-row">
                                <Field
                                    name="phone"
                                    id="phone"
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    component={FieldView}
                                    label={MODAL_FORM_LABEL.CONTACT_PHONE}
                                    validate={[required]}

                                />
                                <Field
                                    name="address.city"
                                    id="inputCity"
                                    type="text"
                                    placeholder="Enter City"
                                    component={FieldView}
                                    label={MODAL_FORM_LABEL.CONTACT_CITY}
                                    validate={[required]}
                                />
                            </div>
                            <div className="form-row">
                                <Field
                                    name="company.name"
                                    id="inputCompany"
                                    type="text"
                                    placeholder="Enter Company Name"
                                    component={FieldView}
                                    label={MODAL_FORM_LABEL.CONTACT_COMPANY_NAME}
                                    validate={[required]}
                                />
                                <Field
                                    name="website"
                                    id="inputWebsite"
                                    type="text"
                                    placeholder="Enter Website"
                                    component={FieldView}
                                    label={MODAL_FORM_LABEL.CONTACT_WEBSITE}
                                    validate={[required]}
                                />
                            </div>
                            <div className="form-row">
                                <div className="col-12">
                                    {!_isEmpty(messages) &&
                                    <div className="alert alert-danger">
                                        {
                                            messages.map((msg) => {
                                                return <div className="error">{msg}</div>;
                                            })
                                        }
                                    </div>
                                    }
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={this.resetHandler}>
                                    {MODAL_FORM_LABEL.CLOSE}
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    {isEdit ? MODAL_FORM_LABEL.UPDATE : MODAL_FORM_LABEL.ADD}
                                </button>
                                {isEdit &&
                                    <button
                                        type="button"
                                        className="btn btn-secondary delete"
                                        onClick={this.deleteHandler}>
                                        {MODAL_FORM_LABEL.DELETE}
                                    </button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default reduxForm({
    form: FORM_NAME.ADD_EDIT_CONTACT_FORM
})(addEditContactModal);
