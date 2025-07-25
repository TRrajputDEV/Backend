export class ApiService {
    constructor() {
        this.baseURL = 'http://localhost:4000';
    }

    // Make the Request - from API
async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;

    const config = {
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {})
        },
        credentials: 'include', // for cookies/session support
        body: options.body ? JSON.stringify(options.body) : undefined
    };

    try {
        const response = await fetch(url, config);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }

        return data;
    } catch (error) {
        throw error;
    }
}


    // User - Registeration serice.
    async register(userData) {
    return this.request('/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
}

    // User - login service.
    async login(credentials){
        return this.request('/users/login',{
            method: 'POST',
            body: JSON.stringify(credentials),
        });
}

    // User - logout Service
    async logout(){
        this.request('users/logout', {
            method: 'POST',
        })
    }

    // User - getCurrentUser
    async getCurrentUser(){
        return this.request('users/getCurrentUser');
    }

    // User - changePassword
    async changePassword(passwordData){
        return this.request('users/change-password',{
            method: 'POST',
            body: JSON.stringify(passwordData)
        })
    }

    // home - page ---- there is no  route to home on the backend API..
    // async getHome(){
    //     return this.request('/users/home')
    // }

}

export const apiService = new ApiService();