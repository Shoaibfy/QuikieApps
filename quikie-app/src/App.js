


import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/home'

import View from './components/View';



function App() {
  return (
    <div>

      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/view/:id' component={View} />

      </Router>

    </div >

  );
}

export default App;
