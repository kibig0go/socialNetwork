import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


function App(props) {

    return (
        <div className="App">
            <div className='wrapper'>
                <Header/>
                <Sidebar/>
                <div className='content-wrapper'>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile profilePageData={props.state.profilePage} dispatch={props.dispatch}/>}/>
                        <Route path='/messages/*' element={<Dialogs state={props.state.dialogsPage}/>}/>
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
