import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
	const {
		name,
		company,
		title,
		email,
		message,
		theme,
		fileName,
		fileURL,
	} = card;
	const onSubmit = () => {
    deleteCard(card);
  };

	const onChange = (event) => {
    if(event.currentTarget ==null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
	};

	return (
		<form className={styles.form}>
			<input className={styles.input} type="text" name="name" value={name} />
			<input
				className={styles.input}
				type="text"
				name="company"
				value={company}
				onChange={onChange}
			/>
			<select
				className={styles.select}
				name="theme"
				value={theme}
				onChange={onChange}>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
				<option value="colorful">Colorful</option>
			</select>
			<input
				className={styles.input}
				type="text"
				name="title"
				value={title}
				onChange={onChange}
			/>
			<input
				className={styles.input}
				type="text"
				name="email"
				value={email}
				onChange={onChange}
			/>
			<textarea
				className={styles.textarea}
				name="message"
				value={message}
				onChange={onChange}
			/>
			<div className={styles.fileInput}>
				<FileInput />
			</div>
			<Button name="Delete" onClick={onSubmit}></Button>
		</form>
	);
};

export default CardEditForm;
