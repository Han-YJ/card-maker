import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({ authService }) {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Switch>
					<Route path={['/', '/login']} exact>
						<Login authService={authService} />
					</Route>
						<Route path={'/maker'}>
							<Maker authService={authService} />
						</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
