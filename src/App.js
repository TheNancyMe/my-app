import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs/Dialogs';

import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return(
        <div className='app-wrapper'>
          <Header />
          <Nav />
          <div class="app-wrapper-content">
              <BrowserRouter>
                  <Routes>
                    <Route path="/dialogs" element={<Dialogs />}/>
                    <Route path="/profile" element={<Profile />}/>
                  </Routes>
              </BrowserRouter>
          </div>
        </div>
  );
}
export default App;
