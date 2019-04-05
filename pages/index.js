import React, { useState, useEffect } from 'react';

import Layout from '../components/layout/Layout';
import Todos from '../components/todos/Todos';
import Form from '../components/form/Form';
import Button from '../components/button/Button'

import { getTodos, updateTodo } from '../api';

function Home(props) {
  const { initialTodos } = props;

  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  async function onFetchNewData(other) {
    setLoading(true);
    const newData = await getTodos(other);
    setData(newData);
    setLoading(false);
  }

  return (
    <main>
      <Layout title = "Verkefni">
        <Todos
          loading = { loading }
          data = { data }
          onFetchNewData = { onFetchNewData }
          />
          <Form />
      </Layout>
    </main>
  );
}

Home.getInitialProps = async({ req }) => {
  const data = await getTodos();
  console.log(data);
  return { initialData: data}
}

export default Home
