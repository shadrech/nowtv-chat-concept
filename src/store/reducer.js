import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, CLEAR_ACTIVE_MEMBER, MAKE_ACTIVE_MEMBER, SET_LOADING } from "./types";

const INITIAL_STATE = {
    messages: [],
    members: [],
    activeMember: null,
    loading: true,
    error: null
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case FETCH_DATA_SUCCESS:
            const {messages, members} = action.payload;
            return {
                ...state,
                messages,
                members,
                error: null,
                loading: false
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case MAKE_ACTIVE_MEMBER:
            return {
                ...state,
                activeMember: action.payload.member                
            };
        case CLEAR_ACTIVE_MEMBER:
            return {
                ...state,
                activeMember: null
            };
        default:
            return state;
    }
}

export default reducer;