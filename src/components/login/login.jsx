import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const Login = ({ authService }) => {
	const handleLogin = event => {
		authService //
			.login(event.currentTarget.textContent)
			.then(console.log);
	};

	return (
		<section>
			<Header></Header>
			<h1>Login</h1>
			<ul>
				<li>
					<button onClick={handleLogin}>Google</button>
				</li>
				<li>
					<button onClick={handleLogin}>Github</button>
				</li>
			</ul>
			<Footer></Footer>
		</section>
	);
};

export default Login;
