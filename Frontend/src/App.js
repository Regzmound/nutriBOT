import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './screens/login/Login';
import Signup from './screens/signup/Signup';
import HomeScreen from './screens/home/Home';
import ProfileScreen from './screens/profile/ProfileScreen';
import TermsAndPrivacy from './screens/termsAndPrivacy/Terms';
import AboutScreen from './screens/about/About';


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<HomeScreen/>}/>
      <Route path='/profile' element={<ProfileScreen/>}/>
      <Route path='/terms' element={<TermsAndPrivacy/>}/>
      <Route path='/about' element={<AboutScreen/>}/>
    </Routes>
   </Router>
  );
}

export default App;
