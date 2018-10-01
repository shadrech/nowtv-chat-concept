import { SET_LOADING, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, MAKE_ACTIVE_MEMBER, CLEAR_ACTIVE_MEMBER } from "./types";
import getChatLog from "../service";

export const makeActiveMember = member => ({
    type: MAKE_ACTIVE_MEMBER,
    payload: { member }
});

export const clearActiveMember = () => ({
    type: CLEAR_ACTIVE_MEMBER
});

export const fetchData = () => async (dispatch, getState) => {
    dispatch({type: SET_LOADING});

    try {
        const { chatLog, members } = await getChatLog(true);
        dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: {
                messages: chatLog,
                members
            }
        });
    } catch (error) {
        console.error(error);
        dispatch({
            type: FETCH_DATA_FAILURE,
            payload: {
                error: error.message
            }
        });
    }

}