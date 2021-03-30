import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
	const [cards, setCards] = useState({
    '1': {
			id: '1',
			name: 'aaa',
			company: 'AAA',
			theme: 'colorful',
			title: 'First',
			email: 'aaa@gmail.com',
			message: 'go for it',
			fileName: 'aaa',
			fileURL: null,
		},
    '2': {
			id: '2',
			name: 'bbb',
			company: 'BBB',
			theme: 'dark',
			title: 'Second',
			email: 'bbb@gmail.com',
			message: 'go for it',
			fileName: 'bbb',
			fileURL: 'bbb.png',
		},
    '3': {
			id: '3',
			name: 'ccc',
			company: 'CCC',
			theme: 'light',
			title: 'Third',
			email: 'ccc@gmail.com',
			message: 'go for it',
			fileName: 'ccc',
			fileURL: null,
		},
  });

	const history = useHistory();
	const onLogout = () => {
		authService.logout();
	};

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (!user) {
				history.push('/');
			}
		});
	});

	const addCard = (card) => {
    const updated = [...cards, card];
		setCards(updated);
	};

  const updateCard = (card) => {
    console.log(card)
  }

  const deleteCard = (card) => {
    console.log(card)
  }
  
	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout} />
			<div className={styles.container}>
				<Editor cards={cards} addCard={addCard} updateCard={updateCard} deleteCard={deleteCard} />
				<Preview cards={cards} />
			</div>
			<Footer />
		</section>
	);
};

export default Maker;
