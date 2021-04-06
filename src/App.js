import Header from "./Components/Header/Header"
import MyProfile from "./Components/MyProfile/MyProfile"
import './scss/index.scss'
import Navigation from "./Components/Navigation/Navigation";
import Dialogs from "./Components/Dialogs/Dialogs";
import { Route} from "react-router-dom"


function App(props) {

    return (

        <div className="App">
            <Header/>
            <div className='container'>
                <div className='appWrapperContent'>
                    <Navigation/>
                    <Route path='/myProfile' render={() => <MyProfile
                        profilePage={props.state.profilePage}
                        updateNewPostText={props.updateNewPostText}
                        addPost={props.addPost}
                    />}/>
                    <Route path='/dialogs' component={() => <Dialogs
                        state={props.state.dialogsPage}/>}/>
                </div>
            </div>
        </div>

    )
}

export default App;
