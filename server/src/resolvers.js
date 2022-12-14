const resolvers = {
    Query: {
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        track: async (_, {id}, {dataSources}) => {
            const track = await dataSources.trackAPI.getTrack(id);
            if(!track) throw new Error(`Not found Track for id ${id}`);
            return track;
        },
        module: async (_, {id}, {dataSources}) => {
            const module = await dataSources.trackAPI.module(id);
            if(!module) throw new Error(`Not found Module for id ${id}`);
            return module;
        }
    },

    Mutation: {
        incrementTrackViews: async (_, {id}, {dataSources}) => {
            try {
                const track = await dataSources.trackAPI.incrementTrackViews(id);
                return {
                    code: 200,
                    success: true,
                    message: `Successfully increment number of views for track ${id}`,
                    track
                }
            } catch(err) {
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    track: null
                }
            }
        },
    },

    Track: {
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: ({id}, _, {dataSources}) => {
            return dataSources.trackAPI.getTrackModules(id);
        },
        durationInSeconds: ({length}) => length,
    },

    Module: {
        durationInSeconds: ({length}) => length,
    }

};

module.exports = resolvers;