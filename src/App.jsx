import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='wrapper'>
                    <Header/>
                    <Sidebar/>
                    <div className='content-wrapper'>
                        <Routes>
                          <Route path='/profile' element={<Profile/>}/>
                          <Route path='/messages' element={<Dialogs/>}/>
                          <Route path='/feed' element={<News/>}/>
                          <Route path='/music' element={<Music/>}/>
                          <Route path='/settings' element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
