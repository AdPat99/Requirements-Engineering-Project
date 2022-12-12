import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Calender from './pages/Calender';
import Contacts from './pages/Contacts';
import Customizations from './pages/Customizations';
import Notifications from './pages/Notifications';
import RouteGPS from './pages/Route';

function App() {
  return (
    <>
      <Router>
        <>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/calender" exact element={<Calender/>}/>
            <Route path="/contacts" exact element={<Contacts/>}/>
            <Route path="/customizations" exact element={<Customizations/>}/>
            <Route path="/notifications" exact element={<Notifications/>}/>
            <Route path="/route" exact element={<RouteGPS/>}/>
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
