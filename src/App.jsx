import './App.css';
import { Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import React from "react";


function App(props) {

    return (
        <div className="App">
            <div className='wrapper'>
                <Header/>
                <Sidebar/>
                <div className='content-wrapper'>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile  />}/>
                        <Route path='/messages/*' element={<DialogsContainer />}/>
                        <Route path='/feed' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
