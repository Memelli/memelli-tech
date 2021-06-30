import Navbar from './components/Navbar'
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer';
import Repositories from './pages/Repositories';
import Contato from './pages/Contact';
function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/repos" component={Repositories} exact />
          <Route path="/contato" component={Contato} exact />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
