import React from 'react';
import { useQuery, gql } from '@apollo/client';
// import Card from './Card';
import Grid from '@material-ui/core/Grid'
import PlantCard from './PlantCard';

export const SEARCH_PLANTS = gql`
query getPlants($id: String!){
  getPlants(id: $id){
      plants{
        scientific_name
        common_name
        complete_data
        image_url
        link
        slug
      }
    }
  }
`
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
