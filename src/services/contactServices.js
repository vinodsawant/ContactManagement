import ServiceBase from './ServiceClass';

class ContactServices {
    getContactDetails = ({config} = {}) => {
        const getContactUrl = '/contacts';
        return ServiceBase.ajax.get(getContactUrl, config);
    };

    addContact = ({data, config = {}}) => {
        const addContactUrl = '/contacts';
        return ServiceBase.ajax.post(addContactUrl, data, config);
    };

    editContact = ({data, config = {}}) => {
        const editContactUrl = `/contacts/${data.id}`;
        return ServiceBase.ajax.put(editContactUrl, data, config);
    };


    deleteContact = ({data, config = {}}) => {
        const deleteContactUrl = `/contacts/${data.id}`;
        return ServiceBase.ajax.delete(deleteContactUrl, data, config);
    };
}

export default new ContactServices();
