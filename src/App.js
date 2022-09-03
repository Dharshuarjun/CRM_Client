import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './Navbar';
import Home from './Home';
import Register from './Register';
import {Switch,Route,BrowserRouter} from "react-router-dom";
import Edit from './Edit';
import Details from './Details';




function App() {
  return (
    <>
   
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/"component={Home}/>
      <Route exact path="/register"component={Register}/>
      <Route exact path="/edit/:id"component={Edit}/>
      <Route exact path="/view/:id"component={Details}/>
    </Switch>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
