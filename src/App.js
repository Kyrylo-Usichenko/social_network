
import Header from "./Components/Header/Header"
import MyProfile from "./Components/MyProfile/MyProfile"
import './scss/index.scss'
import Navigation from "./Components/Navigation/Navigation";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"


function App(props) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className='container'>
                    <div className='appWrapperContent'>
                        <Navigation/>
                        <Route path='/myProfile' render={() => <MyProfile posts={props.posts} />}/>
                        <Route path='/dialogs' component={() => <Dialogs dialogsData={props.dialogsData} messages={props.messages}/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
