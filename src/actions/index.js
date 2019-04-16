// import {getFlights as getFlightsService} from '../services/contactServices';
import {ACTION_TYPES} from '../consts';
import ContactServices from '../services/contactServices';
import 'babel-polyfill';

const getContactDetails = () => {
    return (dispatch) => {
        ContactServices.getContactDetails().then((res) => {
            dispatch({
                type: ACTION_TYPES.GET_CONTACT_DETAILS,
                payload: {
                    contacts: res,
                    allContacts: res
                }
            });
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
    }
};

const searchContact = (data) => {
    return (dispatch) => {
        dispatch({
            type: ACTION_TYPES.SEARCH_CONTACT,
            payload: {
                contacts: data
            }
        });
    }
};
const addContact = (data) => {
    return (dispatch) => {
        ContactServices.addContact({data}).then((res) => {
            dispatch({
                type: ACTION_TYPES.ADD_NEW_CONTACT,
                payload: {
                    contact: res
                }
            });
        }).catch(function (error) {
            console.log(error);
        })
    }
};

const editContact = (data) => {
    return (dispatch) => {
        ContactServices.editContact({data}).then((res) => {
            dispatch({
                type: ACTION_TYPES.EDIT_CONTACT,
                payload: {
                    contact: res
                }
            });
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
    }
};

const deleteContact = (data) => {
    return (dispatch) => {
        ContactServices.deleteContact({data}).then((res) => {
            dispatch({
                type: ACTION_TYPES.DELETE_CONTACT,
                payload: {
                    contact: res
                }
            });
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
    }
};

export {
    getContactDetails,
    addContact,
    editContact,
    deleteContact,
    searchContact
}
