import React from 'react';
import Header from './components/Header/header.components';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Header />
      <div className='main-content'>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
