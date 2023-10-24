import Navb from './Component/Navbar';
import Home from './Component/Home';
import AboutMe from './Component/AboutMe';
import Skill from './Component/Skill';
import Project from './Component/Project';
import 'bootstrap/dist/css/bootstrap.min.css';
import Github from './Component/Github';
import Contact from './Component/Contact';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landingpage from './Component/Landing-page';

function App() {
  return (
    <BrowserRouter>
    
     <Routes>

<Route path={'/home'} element={<Landingpage/>}/>
<Route path={'/'} element={<Landingpage/>}/>

<Route path={'/project'} element={<Project/>}/>
<Route path={'/skill'} element={<Skill/>}/>
<Route path={'/about'} element={<AboutMe/>}/>
<Route path={'/contact'} element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;
