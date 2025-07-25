class ApiService {
    constructor() {
        this.baseURL = 'http://localhost:4000/api/v1';
    }

    // Make the Request - from API
    async request(endpoint, options = {}) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
                ...options,
                credentials: 'include',
            });

            const contentType = response.headers.get('content-type');

            if (!response.ok) {
                // Try to parse JSON error message if possible
                let errorMessage = `Request failed with status ${response.status}`;
                if (contentType && contentType.includes('application/json')) {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorData.error || errorMessage;
                } else {
                    // fallback for non-JSON error
                    const text = await response.text();
                    console.warn("Non-JSON error response:", text);
                }
                return { error: errorMessage };
            }

            if (contentType && contentType.includes('application/json')) {
                return await response.json();
            } else {
                return { error: 'Invalid response format: expected JSON.' };
            }
        } catch (error) {
            return { error: error.message || 'Network error' };
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
    async login(credentials) {
        return this.request('/users/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
        });
    }

    // User - logout Service
    async logout() {
        return this.request('/users/logout', {
            method: 'POST',
        })
    }

    // User - getCurrentUser
    async getCurrentUser() {
        return this.request('/users/getCurrentUser');
    }

    // User - changePassword
    async changePassword(passwordData) {
        return this.request('/users/change-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(passwordData)
        });
    }


    // home - page ---- there is no  route to home on the backend API..
    // async getHome(){
    //     return this.request('/users/home')
    // }

}
const apiService = new ApiService();
export default apiService