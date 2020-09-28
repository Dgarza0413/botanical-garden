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
        return Array.isArray(data)
            ? data.map(plant => this.plantReducer(plant))
            : [];
    }

    plantReducer(plant) {
        return {
            id: plant.id || 0,
            common_name: plant.common_name || 'unknown',
            complete_data: plant.complete_data,
            link: plant.link,
            scientific_name: plant.scientific_name,
            slug: plant.slug,
            image_url: plant.image_url
        };
    }
}

module.exports = PlantAPI