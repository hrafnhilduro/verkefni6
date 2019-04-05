import 'isomorphic-fetch';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { apiUrl } = publicRuntimeConfig;
/* todo isomorphic-fetch og útfæra köll í vefþjónustu með slóð úr config */

export async function deleteTodo(id) {
  const options = {
    headers: {
      'content-type': 'application/json',
    },
    method: 'DELETE',
  };

  const url = new URL(`/${id}`, apiUrl);
  await fetch(url.href, options);
}

export async function addTodo(title, due) {
  const options = {
    body: JSON.stringify({
      title,
      due,
    }),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  };

  const url = new URL('/', apiUrl);
  const response = await fetch(url.href, options);

  const result = await response.json();
  return {
    success: response.ok,
    result,
  }
}

export async function updateTodo(id, { title, completed, due } = {}) {
  const options = {
    body: JSON.stringify({
      title,
      completed,
      due,
    }),
    headers: {
      'content-type': 'application/json',
    },
    method: 'PATCH',
  };

  const url = new URL(`/${id}`, apiUrl);
  const response = await fetch(url.href, options);

  const result = await response.json();
  return {
    success: response.ok,
    result,
  }
}

export async function getTodos(hideCompleted = undefined) {
  let url = new URL(apiUrl);
    const response = await fetch(url.href);

    if (!response.ok) {
      return null;
    }
    return response.json();
  }

  export async function getTodo(id) {
      const data =  await getTodos();

    const foundTodo = data.find(i => i.id === Number(id));

    if (!foundTodo) {
        return null;
      }

    return foundTodo;
    }
