import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './screens/login/Login';
import Signup from './screens/signup/Signup';
import HomeScreen from './screens/home/Home';
import ProfileScreen from './screens/profile/ProfileScreen';


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<HomeScreen/>}/>
      <Route path='/profile' element={<ProfileScreen/>}/>
    </Routes>
   </Router>
  );
}

export default App;
