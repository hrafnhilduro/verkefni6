import React, { useState } from 'react';

import { addTodo } from '../../api';

import Button from '../button/Button';
import Field from '../field/Field';
import Errors from '../errors/Errors';

import css from './Form.css';

// Form á forsíðu
export default function Form(props) {
  const [data] = useState({ title: '', date: undefined });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    const newTodo = addTodo(data.title, data,due);
    console.log(data.title + " " + data.date);

    if (!newTodo.success) {
      setErrors(newTodo.response);
      setLoading(false);
      return;
    }

    onCreated();
    setLoading(false);
  }

  function onChangeTitle(e) {
    data.title = e.target.value;
  }

  function onChangeDue(e) {
    data.date = e.target.value;
  }

  return (
    <form className = { css.form } onSubmit = { onSubmit }>
      {errors &&
        <Errors errors = { errors } />}
      {loading &&
        <p>Hleð verkefnum</p>}
      <h2 className = { css.form__header }> Nýtt verkefni</h2>
      <Field
          title = "Titill:"
          value = { data.title }
          onChange = { onChangeTitle }/>
      <Field
          title = "Klárast fyrir:"
          type = "datetime-local"
          onChange = { onChangeDue }/>

      <Button children = "Búa til" onClick = { onSubmit } />
    </form>
  )
}
