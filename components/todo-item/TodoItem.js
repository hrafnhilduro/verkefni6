import React, { useState } from 'react';
import Link from 'next/link';
import css from './TodoItem.css';

export default function todoItem(props) {
  const { todo, id } = props;
  const linkIDs = `/todo/${id}`;
  const linkURL = `todo?id=${id}`;

  return (
    <React.Fragment>
      <li className = { css.item }>
        {todo.completed ?
          <input
            type = "checkbox"
            className = { css.item__input }
            checked
          /> :
          <input
            type = "checkbox"
            className = { css.item__input }
          />
        }
        <p>
          <Link as = { linkIDs } href = { linkURL }>
            <a className = { css.item__link } > { todo.title}</a>
          </Link>
        </p>
        <p className = { css.item__due } > { todo.due ? 'Klárist fyrir ' : ''}{ todo.due }</p>
      </li>
    </React.Fragment>
  );
}
