import axios from 'axios';
import baseUrl from '../config';

class ServiceClass {
    constructor() {
        this.getMethod = this.getMethod.bind(this);
        this.postMethod = this.postMethod.bind(this);
        this.deleteMethod = this.deleteMethod.bind(this);
        this.putMethod = this.putMethod.bind(this);
        this.patchMethod = this.patchMethod.bind(this);
        this.loadConfiguration();
    }

    loadConfiguration() {
        const locale = 'en-US';
        const servicesConfig = {
            baseUrl,
            params: {},
            headers: {
                'Accept-Language': locale,
                'Content-Type': 'application/json',
            },
        };

        this.request = axios.create({
            ...servicesConfig,
        });
    }

    static get normalize() {
        return (response) => {
            return response;
        };
    }

    get ajax() {
        return {
            get: this.getMethod,
            post: this.postMethod,
            delete: this.deleteMethod,
            put: this.putMethod,
            patch: this.patchMethod,
        };
    }

    deleteMethod(url, config) {
        let conf = config;
        if (!conf) {
            conf = {};
        }
        if (!conf.data) {
            conf.data = null;
        }
        return this.request.delete(`${baseUrl}${url}`, conf).then((response) => {
            return response.data;
        }).catch((error) => {
            return (error);
        });
    }

    getMethod(url, config) {
        return this.request.get(`${baseUrl}${url}`, config).then((response) => {
            return response.data;
        }).catch((error) => {
            return error;
        });
    }

    postMethod(url, data, config) {
        return this.request.post(`${baseUrl}${url}`, data, config).then((response) => {
            return response.data;
        }).catch((error) => {
            return error;
        });
    }

    putMethod(url, data) {
        return this.request.put(`${baseUrl}${url}`, data).then((response) => {
            return response.data;
        }).catch((error) => {
            return error;
        });
    }

    patchMethod(url, data, config) {
        return this.request.patch(`${baseUrl}${url}`, data, config).then((response) => {
            return response.data;
        }).catch((error) => {
            return error;
        });
    }
}

const ServiceBase = new ServiceClass();
export default ServiceBase;
export {
    ServiceClass,
};
