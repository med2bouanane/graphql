import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import mutations from './mutations';
import queries from './queries';


export default new GraphQLSchema({

	// GET
	query: new GraphQLObjectType({

		name: 'Query',
		fields: queries
	}),

	// POST DELETE UPDATE
	mutation: new GraphQLObjectType({

		name: 'Mutation',
		fields: mutations
	})
})