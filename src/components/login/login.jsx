import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';
import { useHistory } from 'react-router';

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: {id: userId},
    });
  }

	const handleLogin = (event) => {
		authService //
			.login(event.currentTarget.textContent)
			.then(data => goToMaker(data.user.uid));
	};

  useEffect(()=> {
    authService.onAuthChange(user => {
      user && goToMaker(user.id);
    })
  })

	return (
		<section className={styles.login}>
			<Header></Header>
			<section>
				<h1 className={styles.title}>Login</h1>
				<ul className={styles.list}>
					<li>
						<button className={styles.button} onClick={handleLogin}>
							Google
						</button>
					</li>
					<li>
						<button className={styles.button} onClick={handleLogin}>
							Github
						</button>
					</li>
				</ul>
			</section>
			<Footer></Footer>
		</section>
	);
};

export default Login;
