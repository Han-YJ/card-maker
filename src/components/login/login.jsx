import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';

const Login = ({ authService }) => {
	const handleLogin = event => {
		authService //
			.login(event.currentTarget.textContent)
			.then(console.log);
	};

	return (
		<section className={styles.login}>
			<Header></Header>
			<h1 className={styles.title}>Login</h1>
			<ul className={styles.list}>
				<li>
					<button className={styles.button} onClick={handleLogin}>Google</button>
				</li>
				<li>
					<button className={styles.button} onClick={handleLogin}>Github</button>
				</li>
			</ul>
			<Footer></Footer>
		</section>
	);
};

export default Login;
