import axios from 'axios';

const {
    LOGO_LIST_REQUEST,
    LOGO_LIST_SUCCESS,
    LOGO_LIST_FAIL,
    LOGO_DETAILS_REQUEST,
    LOGO_DETAILS_SUCCESS,
    LOGO_DETAILS_FAIL,
    LOGO_SAVE_REQUEST,
    LOGO_SAVE_SUCCESS,
    LOGO_SAVE_FAIL,
    LOGO_DELETE_REQUEST,
    LOGO_DELETE_SUCCESS,
    LOGO_DELETE_FAIL,
} = require("../constants/logoConstants");


const baseURL = 'http://localhost:8000/api/v1/logos/';

const listLogos = () => async (dispatch) => {
    try {
        dispatch({type: LOGO_LIST_REQUEST});
        const {data} = await axios.get(baseURL);
        dispatch({type: LOGO_LIST_SUCCESS, payload: data});
    }
    catch (error) {
        dispatch({type: LOGO_LIST_FAIL, payload: error.message});
    }
};

const getLogoDetails = (logoID) => async (dispatch) => {
    try {
        dispatch({type: LOGO_DETAILS_REQUEST, payload: logoID});
        const {data} = await axios.get(baseURL + logoID);
        dispatch({type: LOGO_DETAILS_SUCCESS, payload:data});
    }
    catch (error) {
        dispatch({type: LOGO_DETAILS_FAIL, payload: error.message});
    }
};

const saveLogo = (logo) => async (dispatch) => {
    try {
        dispatch({type: LOGO_SAVE_REQUEST, payload: logo});
        if(!logo.id){
            const {data} = await axios.post(baseURL, logo);
            dispatch({type: LOGO_SAVE_SUCCESS, payload: data});
        } else {
            const {data} = await axios.put(baseURL + logo.id, logo);
            dispatch({type: LOGO_SAVE_SUCCESS, payload: data});
        }
    }
    catch (error) {
        dispatch({type: LOGO_SAVE_FAIL, payload: error.message});
    }
}

const deleteLogo = (logoID) => async (dispatch) => {
    try {
        dispatch({type: LOGO_DELETE_REQUEST, payload: logoID});
        const {data} = await axios.delete(baseURL + logoID);
        dispatch({type: LOGO_DELETE_SUCCESS, payload:data, success: true});
    }
    catch (error) {
        dispatch({type: LOGO_DELETE_FAIL, payload: error.message});
    }
};

export { listLogos, getLogoDetails, saveLogo, deleteLogo };
