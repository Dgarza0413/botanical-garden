import React, { useState, useEffect } from 'react';
import API from '../utils/API';

import useInputChange from '../hooks/useInputChange';
import PlantCard from '../components/Plantcard';
import PlantListBar from '../components/PlantListBar';
import PlantForm from '../components/PlantForm';
import Grid from '@material-ui/core/Grid';

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [details, setDetails] = useState([])

  //hooks
  const [value, handleInputChange] = useInputChange()


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
      <PlantListBar />
      <PlantForm
        handleInputChange={handleInputChange}
        value={value.plantName || ""}
      />

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
          return (
            <Grid item xs={3}>
              <PlantCard
                image={e.images[0] || {}}
                scientific_name={e.scientific_name}
                common_name={e.common_name || 'unknown'}
                id={e.id}
              />
            </Grid>
          )
        }) : "loading"}
      </Grid>

    </div >
  )

}

export default Plants;
