// service to handle login and users
import config from '../config';

const UsersService = {

    // login the user in
    postLogin: (credentials) => {
        return (
            fetch(`${config.API_ENDPOINT}/auth/login`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            .then(res => 
                (!res.ok 
                    ? res.json().then(e => Promise.reject(e)) 
                    : res.json())
            )
        )
    }
}

export default UsersService;