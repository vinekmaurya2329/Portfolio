import Navb from './Component/Navbar';
import Home from './Component/Home';
import AboutMe from './Component/AboutMe';
import Skill from './Component/Skill';
import Project from './Component/Project';
import 'bootstrap/dist/css/bootstrap.min.css';
import Github from './Component/Github';

function App() {
  return (
    <>
    <Navb/>
    <Home/>
    <AboutMe/>
    <Skill/>
    <Project/>
    <Github/>
    </>
  );
}

export default App;
