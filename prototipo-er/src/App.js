import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Calender from './pages/Calender';
import Contacts from './pages/Contacts';
import Customizations from './pages/Customizations';
import Notifications from './pages/Notifications';
import RouteGPS from './pages/Route';
import React ,{ useState } from 'react';

function App() {
  const [sideBar, setSideBar] = useState(false)

  const showSideBar = () => {
    setSideBar(!sideBar)
  }

  return (
    <>
      <Router>
        <>
          <Header sideBar={sideBar} setSideBar={setSideBar} showSideBar={showSideBar}/>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/calender" exact element={<Calender/>}/>
            <Route path="/contacts" exact element={<Contacts/>}/>
            <Route path="/customizations" exact element={<Customizations active={sideBar}/>}/>
            <Route path="/notifications" exact element={<Notifications active={sideBar}/>}/>
            <Route path="/route" exact element={<RouteGPS/>}/>
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
