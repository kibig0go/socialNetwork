import React, {useEffect} from "react";
import './App.css';
import { Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer, {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {me} from "./redux/reducer/header_reducer";
import {initializeApp} from "./redux/reducer/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";


function App(props) {

    useEffect(() => {
        props.initializeApp()
    })

    if (!props.isInitialized) {
        return <Preloader/>
    }

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
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
