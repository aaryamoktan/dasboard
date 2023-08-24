import logo from './logo.svg';
import './App.css';
import './App.scss'
import Nevbar from './Content/Nevbar';
import Home from './Content/Home';
import {
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nevbar/>
    <Home/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
