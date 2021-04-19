const UPDATE_NEW_SEARCH_TEXT = 'UPDATE-NEW-SEARCH-TEXT'
let initialState = {
    newSearchText: ' '
}
const headerReducer = (state = initialState, action) => {

    state.newSearchText = action.newSearch
    return state
}


export const updateNewSearchTextActionCreator = (text) => ({type: UPDATE_NEW_SEARCH_TEXT, newSearch: text})
export default headerReducer