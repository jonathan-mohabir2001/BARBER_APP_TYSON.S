
import { Navbar } from 'react-bootstrap';
import TopNav from './components/TopNav';
import { Routes, Route,Link,} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ContactForm from './components/ContactForm';
import './App.css';


function App() {
  return (
  <div className="App">

    <TopNav/>

  
    <Routes>
      <Route path='/home' element={<AboutMe/>}> </Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
      <Route path='/contact' element={<ContactForm/>}></Route>
    </Routes>

    



  </div>
  )  
 
  
}

export default App;
