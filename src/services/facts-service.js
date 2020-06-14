// import TokenService from '../services/token-service';
import config from '../config';

const FactsApiService = {
    
    // Get all facts
    getFacts: () => {
        return fetch(`${config.API_ENDPOINT}/facts`, {
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => 
            (!res.ok 
                ? res.json().then(e => Promise.reject(e)) 
                : res.json())
        )
    },

    addFact: (newFact) => {
        return fetch(`${config.API_ENDPOINT}/facts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFact)
        })
        .then(res => 
            (!res.ok 
                ? res.json().then(e => Promise.reject(e)) 
                : res.json())
        )
    }

}

export default FactsApiService;