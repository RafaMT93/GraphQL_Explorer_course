const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
    };

    //Querys

    getTracksForHome(){
        return this.get('tracks');
    };

    getTrack(trackId){
        return this.get(`track/${encodeURIComponent(trackId)}`);
    };

    getTrackModules(trackId){
        return this.get(`track/${encodeURIComponent(trackId)}/modules`);
    };

    getAuthor(authorId){
        return this.get(`author/${encodeURIComponent(authorId)}`);
    };

    module(moduleId){
        return this.get(`module/${encodeURIComponent(moduleId)}`);
    }

    //Mutations

    incrementTrackViews(trackId){
        return this.patch(`track/${encodeURIComponent(trackId)}/numberOfViews`);
    }

}

module.exports = TrackAPI;