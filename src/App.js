import Header from "./Components/Header/Header"
import MyProfile from "./Components/MyProfile/MyProfile"
import './scss/index.scss'
import Navigation from "./Components/Navigation/Navigation";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom"


function App(props) {

    console.log(props.state.dialogsPage.newMessageText)
    return (

        <div className="App">
            <Header/>
            <div className='container'>
                <div className='appWrapperContent'>
                    <Navigation/>
                    <Route path='/myProfile' render={() => <MyProfile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                                  dispatch={props.dispatch}/>}
                    />
                </div>
            </div>
        </div>

    )

}

export default App;
