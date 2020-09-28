const { RESTDataSource } = require('apollo-datasource-rest')

class PlantAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://trefle.io/api/v1/';
    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
    }

    async getPlants(search) {
        const { data } = await this.get(`plants/search?q=${search}`)
        console.log(data)
        return Array.isArray(data)
            ? data.map(plant => this.plantReducer(plant))
            : [];
    }

    plantReducer(plant) {
        console.log(plant)
        return {
            id: plant.id || 0,
            common_name: plant.common_name || 'unknown',
            slug: plant.slug,
            scientific_name: plant.scientific_name,
            year: plant.year,
            bibliography: plant.bibliography,
            author: plant.author,
            status: plant.status,
            rank: plant.rank,
            family_common_name: plant.family_common_name,
            genus_id: plant.genus_id,
            // synonyms: plant.synonyms,
            genus: plant.genus,
            family: plant.family,
            image_url: plant.image_url
        };
    }
}

module.exports = PlantAPI