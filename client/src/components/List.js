import React from 'react';
import { useQuery, gql } from '@apollo/client';
// import Card from './Card';
import Grid from '@material-ui/core/Grid'
import PlantCard from './PlantCard';

import { SEARCH_PLANTS } from '../utils/queries';

const List = ({ value }) => {
  const { loading, error, data } = useQuery(SEARCH_PLANTS, {
    variables: { id: value.plantName },
  });

  console.log(data)
  if (loading) return <div>Loading</div>;
  if (error) return `Error! ${error}`;

  return (
    <Grid container spacing={3}>
      {data.getPlants.plants.map(e => {
        return (
          <Grid item xs={4}>
            <PlantCard {...e} />
          </Grid>
        )
      })
      }
    </Grid>
  )
}

export default List
