import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App ({authService}) {
  return <BrowserRouter>
    <Switch>
      <Route path={['/', '/login']} exact >
        <div className={styles.app}>
          <Login authService={authService} />
        </div>
      </Route>
    </Switch>    
  </BrowserRouter>
    
  
}

export default App;
