
import Header from "./Components/Header/Header"
import MyProfile from "./Components/MyProfile/MyProfile"
import './scss/index.scss'
import Navigation from "./Components/Navigation/Navigation";
import Dialogs from "./Components/Dialogs/Dialogs";

import {BrowserRouter, Route} from "react-router-dom"


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className='container'>
                    <div className='appWrapperContent'>
                        <Navigation/>
                        <Route path='/myProfile' component={MyProfile}/>
                        <Route path='/dialogs' component={Dialogs}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
