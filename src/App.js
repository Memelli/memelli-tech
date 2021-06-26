import Navbar from './components/Navbar'
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom'
import './App.css'
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
      </div>
    </>
  );
}

export default App;
