import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

const CardAddForm = (props) => {
  const onSubmit = () => {
    
  }
  return (
  <form className={styles.form}>
  <input className={styles.input} type="text" name="name" value='' />
  <input className={styles.input} type="text" name="company" value='' />
  <select className={styles.select} name="theme" value=''>
    <option selected value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="colorful">Colorful</option>
  </select>
  <input className={styles.input} type="text" name="title" value='' />
  <input className={styles.input} type="text" name="email" value='' />
  <textarea className={styles.textarea} name="message" value='' />
  <div className={styles.fileInput}>
    <ImageFileInput />
  </div>
  <Button name='Add' onClick={onSubmit}></Button>
</form>    
  )
};

export default CardAddForm;