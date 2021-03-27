import React from 'react';
import CardEditoform from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards }) => {
	return (
		<section className={styles.editor}>
			<h1 className={styles.title}>Card Maker</h1>
			{cards.map((card) => (
        <CardEditoform card={card} />
			))}
		</section>
	);
};
export default Editor;
