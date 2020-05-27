import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/API';

import useInputChange from '../hooks/useInputChange';
import PlantCard from '../components/Plantcard';
import Grid from '@material-ui/core/Grid';

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [details, setDetails] = useState([])

  const [value, handleInputChange] = useInputChange()

  console.log(value)

  const formValidate = async (e) => {
    e.preventDefault()
    try {
      const res = await API.searchPlant(value)
      await setPlants(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  const detailQuery = async () => {
    const arr = []
    await Promise.all(plants.map(async (e, i) => {
      await API.postPlantDetail({ id: e.id })
        .then(res => {
          arr.push(res.data)
        })
    }))
    setDetails(arr)
  }

  useEffect(() => {
    detailQuery()
  }, [plants])

  return (
    <div>
      <h1>Plants Page</h1>

      <form onSubmit={formValidate}>
        <label>input search</label>
        <input
          value={value.plantName || ""}
          onChange={handleInputChange}
          name="plantName"
          type="string"
        />
        <button type="submit" value='Submit'>Submit</button>
      </form>

      <Grid container justify="center" spacing={3}>
        {details.length === details.length ? details.map((e, i) => {
          console.log(e)
          return (
            <Grid item xs={3}>
              <Link to={`/detail`}>
                <PlantCard
                  image={e.images[0] || {}}
                  scientific_name={e.scientific_name}
                  common_name={e.common_name || 'unknown'}
                  id={e.id}
                />
              </Link>
            </Grid>
          )
        }) : "loading"}
      </Grid>

    </div >
  )

}

export default Plants;
