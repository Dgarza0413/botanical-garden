import React, { useState, useEffect } from 'react';
import { useMutation, gql, ApolloConsumer } from '@apollo/client';

import useInputChange from '../hooks/useInputChange';
import Grid from '@material-ui/core/Grid';

import List from '../components/List';

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [details, setDetails] = useState([])
  const [query, setQuery] = useState()

  const [value, handleInputChange] = useInputChange()

  const handleSubmit = async (e, client) => {
    e.preventDefault()
    await setQuery(value)
  }

  return (
    <>
      <h1>Plants Page</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <label>input search</label>
        <input
          value={value.plantName || ""}
          onChange={handleInputChange}
          name="plantName"
          type="string"
        />
        <button type="submit" value='Submit'>Submit</button>
      </form>

      {query && <List value={query} />}
    </>
  )

}


export default Plants;
