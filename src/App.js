
import { Navbar } from 'react-bootstrap';
import TopNav from './components/TopNav';
import { Routes, Route,Link,} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import './App.css';


function App() {
  return (
  <div className="App">

    <TopNav/>

  
    <Routes>
      <Route path='/home' element={<AboutMe/>}> </Route>
      <Route path='/photogallery' element={<Gallery/>}></Route>
      <Route path='/appoitments' element={<ContactForm/>}></Route>
    </Routes>

    



  </div>
  )  
 
  
}

export default App;
