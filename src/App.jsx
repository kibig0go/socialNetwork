import React from "react";
import './App.css';
import { Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App(props) {

    return (
        <div className="App">
            <div className='wrapper'>
                <HeaderContainer/>
                <Sidebar/>
                <div className='content-wrapper'>
                    <Routes>
                        <Route path='/profile/:userId?' element={<ProfileContainer  />}/>
                        <Route path='/messages/*' element={<DialogsContainer />}/>
                        <Route path='/feed' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
