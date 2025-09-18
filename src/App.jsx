import './App.css';
// npm install react-router-dom
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Bmi from './Bmi';
import Hello from './Hello';
import Home from './Home';
import About from './About';
import List from './List';
function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <h1>Welcome to My website</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bmi" >Bmi Calculator</Link></li>
          <li><Link to="/hello">Hello</Link></li>
          <li><Link to="/hello?name=korawit&surname=orkphol">Hello Korawit</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      <Routes>
          <Route path="/" element={<List/>}/>
          <Route path="/bmi" element={<Bmi/>}/>
          <Route path="/hello" element={<Hello/>}/>
          <Route path="/hello/:n" element={<Hello/>}/>
          <Route path="/hello/:n/:m" element={<Hello/>}/>
          <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
    <h1>Footer</h1>
    </>
  );
}

export default App;
