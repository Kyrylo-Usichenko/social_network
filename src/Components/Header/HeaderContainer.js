import React from 'react'
import {clearNewSearchTextActionCreator, updateNewSearchTextActionCreator} from "../../redux/header-reducer"
import Header from "./Header";
import {connect} from "react-redux";



// const HeaderContainer = (props) => {
//
//     // let newSearchElement = React.createRef()
//     // let onSearchChange = () => {
//     //     let text = newSearchElement.current.value
//     //     let action = updateNewSearchTextActionCreator(text)
//     //     props.dispatch(action)
//     // }
//     // let onClearClick = () => {
//     //     let text = ''
//     //     let action = updateNewSearchTextActionCreator(text)
//     //     props.dispatch(action)
//     // }
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//
//                 let state = store.getState().headerElement
//                 let onSearchChange = (text) => {
//                     let action = updateNewSearchTextActionCreator(text)
//                     store.dispatch(action)
//                 }
//                 let onClearClick = () => {
//
//                     let action = clearNewSearchTextActionCreator('')
//                     store.dispatch(action)
//                 }
//                 return (
//                     <Header headerElement={state} onClearClick={onClearClick} onSearchChange={onSearchChange}/>
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//     );
//
// }

let mapStateToProps = (state) => {
    return {
        headerElement: state.headerElement,

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onClearClick: () => {
            let action = clearNewSearchTextActionCreator('')
            dispatch(action)
        },
        onSearchChange:  (text) => {
            let action = updateNewSearchTextActionCreator(text)
            dispatch(action)
        }
    }
}
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer
