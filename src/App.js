import Header from "./Components/Header/Header"
import MyProfile from "./Components/MyProfile/MyProfile"
import './scss/index.scss'
import Navigation from "./Components/Navigation/Navigation";
import {Route} from "react-router-dom"
import DialogsContainer from "./Components/Dialogs/DialogsContainer";




function App(props) {

    return (

        <div className="App">
            <Header headerElement={props.state.headerElement} dispatch={props.dispatch}/>
            <div className='container'>
                <div className='appWrapperContent'>
                    <Navigation/>
                    <Route path='/myProfile' render={() => <MyProfile store={props.store}/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer store={props.store}/>}
                    />
                </div>
            </div>
        </div>

    )

}

export default App;
