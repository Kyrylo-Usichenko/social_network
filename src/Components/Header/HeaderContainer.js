import {clearNewSearchTextActionCreator, updateNewSearchTextActionCreator} from "../../redux/header-reducer"
import Header from "./Header";
import {connect} from "react-redux";

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
