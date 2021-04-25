import React from 'react'
import {clearNewSearchTextActionCreator, updateNewSearchTextActionCreator} from "../../redux/header-reducer"
import StoreContext from "../../storeContext";
import Header from "./Header";


const HeaderContainer = (props) => {

    // let newSearchElement = React.createRef()
    // let onSearchChange = () => {
    //     let text = newSearchElement.current.value
    //     let action = updateNewSearchTextActionCreator(text)
    //     props.dispatch(action)
    // }
    // let onClearClick = () => {
    //     let text = ''
    //     let action = updateNewSearchTextActionCreator(text)
    //     props.dispatch(action)
    // }
    return (
        <StoreContext.Consumer>{
            (store) => {

                let state = store.getState().headerElement
                let onSearchChange = (text) => {
                    let action = updateNewSearchTextActionCreator(text)
                    store.dispatch(action)
                }
                let onClearClick = (text) => {

                    let action = clearNewSearchTextActionCreator('')
                    store.dispatch(action)
                }
                return (
                    <Header headerElement={state} onClearClick={onClearClick} onSearchChange={onSearchChange}/>
                )
            }
        }
        </StoreContext.Consumer>
    );

}
export default HeaderContainer
