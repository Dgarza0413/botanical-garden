import React, { useState, useEffect } from 'react';
import API from '../utils/API';

import useInputChange from '../hooks/useInputChange'

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [input, setInput] = useState('');
  const [different, setDifferent] = useState('');

  //hooks
  // const [value, handleInputChange] = useInputChange()

  console.log(plants)

  const formValidate = (e) => {
    e.preventDefault()

    console.log(input)
    // API.searchPlant("basil")
    API.searchPlant(input)
      .then(res => setPlants(res.data))
      .catch(err => console.error(err))
  }

  const handleInput = e => {
    const value = e.target.value
    const name = e.target.name
    // console.log(e.target.value)
    setInput({ [name]: value })
  }

  const handleClick = (id) => {
    API.postPlantDetail({ id: id })
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    API.loadPlant()
      .then(res => setPlants(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Plants Page</h1>

      <form onSubmit={formValidate}>
        <label>input search</label>
        <input
          value={input.value}
          onChange={handleInput}
          name="plantName"
          type="string"
        />
        <button type="submit" value='Submit'>Submit</button>
      </form>

      {plants.length > 0 ? plants.map((e, i) => {
        return (
          <div key={i}>
            <div>scientific_name: {e.scientific_name}</div>
            <div>common name: {e.common_name || "unknown"}</div>
            <div onClick={() => handleClick(e.id)}>ID: {e.id}</div>
            <br />
          </div>
        )
      }) : "loading"}
    </div >
  )
}

export default Plants;
