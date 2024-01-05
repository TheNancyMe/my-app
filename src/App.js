import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './Settings/Settings';
import {BrowserRouter, Route, Routes} from "react-router-dom";



const App = () => {
  return(
        <div className='app-wrapper'>
          <Header />
          <Nav />
          <div class="app-wrapper-content">
              <BrowserRouter>
                  <Routes>
                    *<Route path="/dialogs*" element={<Dialogs />}/>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/news" element={<News />}/>
                    <Route path="/settings" element={<Settings />}/>
                  </Routes>
              </BrowserRouter>
          </div>
        </div>
  );
}
export default App;
