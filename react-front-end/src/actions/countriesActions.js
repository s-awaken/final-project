import axios from "axios";

const fetchCountries = () => {
  return (dispatch) => {
    dispatch(fetchCountriesRequest())
    axios
      .get('http://localhost:3004/countries')
      .then((response) =>{
        const countries = response.data
        
        dispatch(fetchCountriesSuccess(countries))
        
      })
      .catch(error =>{
        dispatch(fetchCountriesFailure(error))
      })
  };
};

const fetchCountriesRequest = () => {
  return {
    type: "FETCH_COUNTRIES_REQUEST",
  };
};
const fetchCountriesSuccess = (countries) => {
  return {
    type: "FETCH_COUNTRIES_SUCCESS",
    payload: countries,
  };
};
const fetchCountriesFailure = (error) => {
  return {
    type:'FETCH_COUNTRIES_FAILURE',
    payload:error
  }
};

export default{
  fetchCountries,
  fetchCountriesRequest,
  fetchCountriesSuccess,
  fetchCountriesFailure
}