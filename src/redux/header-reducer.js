const UPDATE_NEW_SEARCH_TEXT = 'UPDATE-NEW-SEARCH-TEXT'
const CLEAR_SEARCH_TEXT = 'CLEAR-SEARCH-TEXT'
let initialState = {
    newSearchBody: ''
}
const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_SEARCH_TEXT:
            return {
                ...state,
                newSearchBody: ''
            };
        case UPDATE_NEW_SEARCH_TEXT:
            return {...state,
                newSearchBody: action.newSearch
            };
        default:
            return state;
    }

}


export const updateNewSearchTextActionCreator = (text) => ({type: UPDATE_NEW_SEARCH_TEXT, newSearch: text})
export const clearNewSearchTextActionCreator = (text) => ({type: CLEAR_SEARCH_TEXT, newSearch: text})
export default headerReducer