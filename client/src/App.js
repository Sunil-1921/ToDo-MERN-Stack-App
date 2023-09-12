import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';
import "./App.css";
import Settings from './components/Settings/Settings';
import Projects from './components/Projects/Projects';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';

function App() {
  const loginStatus = useSelector((state) => state.setLogin)
  console.log("app login status=", loginStatus)
  return (
    <>
      <Router>
        <div className="lg:flex bg-blue-50 lg:h-screen lg:px-32 lg:py-10 ">
          <div className="flex bg-white shadow-xl w-full lg:rounded-3xl">
            {loginStatus &&
              (<div className="hidden lg:block w-1/5 z-10">
                <SideBar />
              </div>)
            }
            <div className={"w-screen flex flex-col overflow-y-auto " + (loginStatus ? "lg:w-4/5" : "")}>
              {loginStatus && <Header />}
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/projects' element={<Projects />} />
                <Route exact path='/profile' element={<Profile />} />
                <Route exact path='/settings' element={<Settings />} />
                <Route exact path='/signup' element={<Signup />} />
                <Route exact path='/login' element={<Login />} />
                {/* <Route exact path='/login' element={<Navigate to="/projects" />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>

    </>
  )
}

export default App;
