import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

interface ApiParams {
    resource_url: string;
    headers?: Record<string, string>;
    resource_id?: number | string;
    resource_slug?: number | string;
    resource_data?: object;
}

const getToken = (): string | undefined => {
    return Cookies.get('_token_');
};

const isTokenValid = (): boolean => {
    const token = getToken();
    return !!token && token.length > 10;
};

const getDefaultHeaders = (headers: object = {}): object => {
    const token = getToken();
    return {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...headers,
    };
};

const getResource = ({ resource_url, headers }: ApiParams) => {
    return axios.get(resource_url, { headers: getDefaultHeaders(headers) });
};

const getResourceById = ({ resource_url, resource_id, headers }: ApiParams) => {
    return axios.get(`${resource_url}/${resource_id}`, { headers: getDefaultHeaders(headers) });
};

const getResourceBySlug = ({ resource_url, resource_slug, headers }: ApiParams) => {
    return axios.get(`${resource_url}/${resource_slug}`, { headers: getDefaultHeaders(headers) });
};

const postResource = ({ resource_url, resource_data, headers }: ApiParams) => {
    return axios.post(resource_url, resource_data, { headers: getDefaultHeaders(headers) });
};

const updateResource = ({ resource_url, resource_data, headers }: ApiParams) => {
    return axios.put(resource_url, resource_data, { headers: getDefaultHeaders(headers) });
};

const updateResourceById = ({ resource_url, resource_data, resource_id, headers }: ApiParams) => {
    return axios.put(`${resource_url}/${resource_id}`, resource_data, { headers: getDefaultHeaders(headers) });
};

const deleteResource = ({ resource_url, headers }: ApiParams) => {
    return axios.delete(resource_url, { headers: getDefaultHeaders(headers) });
};

export {
    getResource,
    postResource,
    updateResource,
    getResourceById,
    getResourceBySlug,
    updateResourceById,
    deleteResource,
    getToken,
    isTokenValid,
};
