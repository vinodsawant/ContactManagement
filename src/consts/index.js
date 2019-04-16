
const ACTION_TYPES = {
    GET_CONTACT_DETAILS: 'GET_CONTACT_DETAILS',
    ADD_NEW_CONTACT: 'ADD_NEW_CONTACT',
    EDIT_CONTACT: 'EDIT_CONTACT',
    DELETE_CONTACT: 'DELETE_CONTACT',
    SEARCH_CONTACT: 'SEARCH_CONTACT'
};

const FORM_NAME = {
    ADD_EDIT_CONTACT_FORM: 'addEditContactForm'
};

const HEADER_TEXT = {
    HEADING: 'Contact Details Management System',
    ADD_CONTACT: 'Add Contact',
    SEARCH: 'Search Contact'

};

const MODAL_FORM_LABEL = {
    ADD_CONTACT: 'Add Contact',
    UPDATE_CONTACT: 'Update Contact',
    DELETE_CONTACT: 'Delte Contact',
    ADD: 'Add',
    UPDATE: 'Update',
    CLOSE: 'Close',
    DELETE: 'Delete',
    CONTACT_NAME: 'Name',
    CONTACT_EMAIL: 'Email',
    CONTACT_PHONE: 'Phone',
    CONTACT_CITY: 'City',
    CONTACT_WEBSITE: 'Website',
    CONTACT_COMPANY_NAME: 'Company',
    DELETE_CONTACT_CONFIRMATION: 'Are you sure want to delete this contact?'

};

const FORM_VALIDATION = {
    MIN_LENGTH: 2,
    MAX_LENGTH: 20,
    INVALID_EMAIL: 'Please enter valid email id',
    INVALID_PHONE: 'Please enter valid Phone number',
    INVALID_NAME: 'Please enter min 2 and max 20 character name'
};

export {
    ACTION_TYPES,
    FORM_NAME,
    HEADER_TEXT,
    MODAL_FORM_LABEL,
    FORM_VALIDATION
};
