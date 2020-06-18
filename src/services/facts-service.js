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
    },

    // update fact
    updateFact: (fact_id, updatedFact) => {
        return fetch(`${config.API_ENDPOINT}/facts/id/${fact_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFact)
        })
        .then(res => 
            (!res.ok 
                ? res.json().then(e => Promise.reject(e)) 
                : res.json())
        )
    },

    deleteFact: (fact_id) => {
        return fetch(`${config.API_ENDPOINT}/facts/id/${fact_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : ""
          )
    },

}

export default FactsApiService;