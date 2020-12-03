import { 
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
} from "../constants/logoConstants";


function logoListReducer(state={logos:[]}, action){
    switch (action.type) {
        case LOGO_LIST_REQUEST:
            return {loading: true, logos: []};
        case LOGO_LIST_SUCCESS:
            return {loading: false, logos: action.payload};
        case  LOGO_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    };
};

function logoDetailsReducer(state={logo:{}}, action){
    switch (action.type) {
        case LOGO_DETAILS_REQUEST:
            return {loading: true};
        case LOGO_DETAILS_SUCCESS:
            return {loading: false, logo: action.payload};
        case  LOGO_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    };
};

function logoSaveReducer(state={logo:{}}, action){
    switch (action.type) {
        case LOGO_SAVE_REQUEST:
            return {loading: true};
        case LOGO_SAVE_SUCCESS:
            return {loading: false, success: true, logo: action.payload};
        case  LOGO_SAVE_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    };
};

function logoDeleteReducer(state={logo:{}}, action){
    switch (action.type) {
        case LOGO_DELETE_REQUEST:
            return {loading: true};
        case LOGO_DELETE_SUCCESS:
            return {loading: false, success: true, logo: action.payload};
        case  LOGO_DELETE_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    };
}

export {
    logoListReducer, logoDetailsReducer, logoSaveReducer, logoDeleteReducer
};
