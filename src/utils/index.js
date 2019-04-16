
import {isEmpty as _isEmpty} from 'lodash';
import { FORM_VALIDATION } from '../consts';

const isEmail = (obj) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(obj) ? '': FORM_VALIDATION.INVALID_EMAIL;
};

const isPhoneNO = (obj) => {
    const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return re.test(obj) ? '' : FORM_VALIDATION.INVALID_PHONE;
};

const minLengthCheck = (obj) => {
    return obj.length >= FORM_VALIDATION.MIN_LENGTH;
};

const maxLengthCheck = (obj) => {
    return obj.length <= FORM_VALIDATION.MAX_LENGTH;
};

const required = (obj) => {
    return _isEmpty(obj) ? 'Field Required ' : undefined;
};

const validateContactName = (name) => {
    if (required(name) || !maxLengthCheck(name) || !minLengthCheck(name)) {
        return FORM_VALIDATION.INVALID_NAME;
    }
    return '';
};

// const required = (value) => (value || typeof value === 'number' ? undefined : 'Required');

export {
    validateContactName,
    required,
    isEmail,
    isPhoneNO,
    minLengthCheck,
    maxLengthCheck
};
