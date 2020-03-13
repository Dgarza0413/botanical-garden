import React, { useState, useEffect } from 'react';
import API from '../utils/API';

import useInputChange from '../hooks/useInputChange';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import axios from 'axios';
import Image from '../components/Image'

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [options, setOptions] = useState(0);
  const [details, setDetails] = useState([])

  console.log(details)

  // const fetchMoreItems = () => {
  //   setTimeout(() => {
  //     // console.log('setting options')
  //     // console.log(options)
  //     setOptions(options + 1)
  //     setIsFetching(false);
  //   }, 2000);
  // }


  //hooks
  const [value, handleInputChange] = useInputChange()
  // const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreItems)


  const formValidate = (e) => {
    e.preventDefault()
    API.searchPlant(value)
      .then(res => setPlants(res.data))
      .catch(err => console.error(err))
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

  const handleClick = (id) => {
    API.postPlantDetail({ id: id })
      .then(res => console.log(res))
      .catch(err => console.error(err))
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
          // value="Submit"
          value={value.plantName || ""}
          // value={value.plantName || ""}
          onChange={handleInputChange}
          name="plantName"
          type="string"
        />
        <button type="submit" value='Submit'>Submit</button>
      </form>


      {details.length === details.length ? details.map((e, i) => {
        console.log(e)
        return (
          <div key={i} onClick={() => handleClick(e.id)}>

            <Image urls={e.images} />
            <div>scientific_name: {e.scientific_name}</div>
            <div>common name: {e.family_common_name || "unknown"}</div>
            <div >ID: {e.id}</div>
            <br />
          </div>
        )
      }) : "loading"}
      {/* {isFetching && 'Searching for more plants'} */}
    </div >
  )
}

export default Plants;
