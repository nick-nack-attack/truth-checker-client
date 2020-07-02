export default {
    TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY || "authToken", 
    API_ENDPOINT: process.env.API_ENDPOINT || "https://serene-chamber-88335.herokuapp.com/api",
    SUBMIT_FACT_PAGE: '/submit-fact',
    LOGIN_PAGE: '/admin-login',
    FACTS_FEED: '/facts',
    ROOT: '/',
    EDIT_FACT_PAGE: '/facts/id/:fact_id/edit',
    REPORTS_PAGE: '/reports',
    ABOUT_PAGE: '/about-truth-checker'
  };