import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import RedPage from './pages/RedPage';
import { Route } from 'react-router-dom';
import BluePage from './pages/BluePage';

function App() {
  return (
    <div>
      <Menu />
      <hr/>
      <Route path="/red" component ={RedPage}/>
      <Route path="/blue" component={BluePage}/>      
    </div>
  );
}

export default App;
