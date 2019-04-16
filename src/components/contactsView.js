import React, { Component } from 'react';
import {isEmpty as _isEmpty, isEqual as _isEqual} from 'lodash';
import AddEditContactModal from '../components/ContactModals/AddEditContact';
import { HEADER_TEXT} from '../consts';

export default class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentContact : {},
            id: 0,
            showModal: false,
            show: ''
        };
        this.props.getContactDetails(this);
        this.deleteContactHandler = this.deleteContactHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.addContactHandler = this.addContactHandler.bind(this);
        this.editContactHandler = this.editContactHandler.bind(this);
        this.openAddEditContactModal = this.openAddEditContactModal.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.navigateToHome = this.navigateToHome.bind(this);
    }

    navigateToHome() {
        this.props.history.push('/home');
    }

    componentWillReceiveProps(newProps) {
        if (!_isEqual(this.props.contact, newProps.contact)) {
            this.props.getContactDetails();
        }
    }

    deleteContactHandler(payload) {
        this.props.deleteContact(payload);
        this.closeModalHandler();
    }

    addContactHandler(payload) {
        this.props.addContact(payload);
        this.closeModalHandler();
    }

    editContactHandler(payload) {
        this.props.editContact(payload);
        this.closeModalHandler();
    }

    closeModalHandler() {
        this.setState({showModal: false, show: '', currentContact: {}});
        this.props.getContactDetails(this);
    }

    onChangeHandler(e) {
        const state = {};
        state[e.target.id] = e.target.value;
        this.setState(state);
        let prevState = this.state.currentContact;
        prevState[e.target.id] = e.target.value;
        this.setState({
            currentContact : prevState
        });
    }

    openAddEditContactModal(editMode, obj) {
        this.setState({showModal: true, isEdit: editMode, show: 'show',  currentContact: obj});
    }

    onSearchChange(e) {
        const value = e.target.value;
        if (_isEmpty(value)) {
            this.props.getContactDetails(this);
        } else {
            let {allContacts} = this.props;
            const filterContacts = [];
            allContacts.forEach((contact)=>{
                contact.name.toLowerCase().includes(value.toLowerCase()) && filterContacts.push(contact);
            });
            this.props.searchContact(filterContacts);
        }
    }
    
    render() {
        const { currentContact, isEdit, messages, showModal, show } = this.state;
        const {contacts} = this.props;
        return (
            <div className="ds-contact-details">

                <div className="back-btn" onClick={this.navigateToHome}> Back </div>
                <header className="ds-contact-details__head">
                    {HEADER_TEXT.HEADING}
                </header>
                <div className="search-panel">
                    <div className="col-8 ds-contact-details__heading">
                        <label htmlFor="searchName">{HEADER_TEXT.SEARCH}</label>
                        <span className="col-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="searchName"
                                    placeholder="Search by Name"
                                    onChange={this.onSearchChange} />
                            </span>
                    </div>
                    <div className="col-4 ds-contact-details__add ">
                        <button
                            className="btn btn-primary"
                            onClick={() => this.openAddEditContactModal(false)}>
                            {HEADER_TEXT.ADD_CONTACT}
                        </button>
                    </div>
                </div>
                <div className="container">
                    <div className="card-container">
                    {contacts && contacts.map((obj) => {
                        return (
                            <div className="card" key={obj.id} onDoubleClick={() => this.openAddEditContactModal(true, obj)}>
                                <section className="card-body">
                                    <section className="card-title">
                                        {obj.name}
                                    </section>
                                    <section className="card-text">
                                        <div>{obj.email}</div>
                                        <div>{obj.address.city}</div>
                                        <div>{obj.phone}</div>
                                        <div>{obj.website}</div>
                                        <div>{obj.company.name}</div>
                                    </section>
                                </section>
                            </div>
                        );})
                    }
                    </div>

                    {/*<div className="modal fade" id="deleteContactModal">*/}
                        {/*<div className="ds-modal">*/}
                            {/*<div className="ds-modal__overlay"/>*/}
                            {/*<DeleteContactModal deleteContact={this.deleteContactHandler} />*/}
                        {/*</div>*/}
                    {/*</div>*/}

                    <div className={`modal fade ${show}`} id="addEditContactModal">
                        <div className="ds-modal">
                            <div className="ds-modal__overlay"/>
                            {showModal &&
                            <AddEditContactModal
                                initialValues={currentContact}
                                addContact={this.addContactHandler}
                                editContact={this.editContactHandler}
                                deleteContact={this.deleteContactHandler}
                                contacts={contacts}
                                isEdit={isEdit}
                                closeModal={this.closeModalHandler}
                                messages={messages}
                            />
                            }
                        </div>
                </div>
                </div>
            </div>
        )
    }
}