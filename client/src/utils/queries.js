import { gql } from '@apollo/client';

export const SEARCH_PLANTS = gql`
query getPlants($id: String!){
  getPlants(id: $id){
      plants{
        scientific_name
        common_name
        slug
        image_url
        year
        bibliography
        author
        status
        rank
        family_common_name
        genus_id
        # synonyms
        genus
        family
      }
    }
  }
`