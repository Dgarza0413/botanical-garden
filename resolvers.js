module.exports = {
    Query: {
        getPlants: async (_, { id }, { dataSources }) => {
            const allPlants = await dataSources.plantAPI.getPlants(id);
            console.log(allPlants.length)
            return {
                plants: allPlants
            }
        }
    }
}