import MyProfile from "./Components/MyProfile/MyProfile"
import './scss/index.scss'
import Navigation from "./Components/Navigation/Navigation";
import {Route} from "react-router-dom"
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import UsersContainer from "./Components/Users/UsersContainer";




function App(props) {

    return (

        <div className="App">
            <HeaderContainer />
            <div className='container'>
                <div className='appWrapperContent'>
                    <Navigation/>
                    <Route path='/myProfile'
                           render={() => <MyProfile/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}
                    />
                    <Route path='/users'
                           render={() => <UsersContainer />}
                    />
                </div>
            </div>
        </div>

    )

}

export default App;
