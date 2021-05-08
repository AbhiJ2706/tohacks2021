import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import './App.css';


import Home from './pages/Home'
import Article from './pages/Article'
import NavBar from './components/NavBar'
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <NavBar />
      <Router>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/sports' component={Sports}/>
        <Route exact path='/business' component={Business}/>
        <Route exact path='/finance' component={Finance}/>
        <Route exact path='/politics' component={Politics}/> */}
        <Switch>
          <Route exact path='/:articleId' component={Article} />
        </Switch>
      </Router>
    </Container>

  );
}

export default App;
