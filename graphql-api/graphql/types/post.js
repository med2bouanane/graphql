import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLList
} from 'graphql'


/*
===============
OBJETO postType  ==> valores de retorno
===============
postType {

	_id: guid,
	uid: String,
	title: String,
	body: String
}

*/
export const postType = new GraphQLObjectType({

	name: 'Post',
	description: 'User api',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		uid: {
			type: GraphQLString
		},
		title: {
			type: GraphQLString
		},
		body: {
			type: GraphQLString
		}
	})
});


/*
====================
OBJETO postInputType  ==> parametros que se pasan como parametros
====================
postInputType {

	uid: String,
	title: String,
	body: String
}

*/
export const postInputType = new GraphQLInputObjectType({

	name: 'PostInput',
	description: 'Insert Post',
	fields: () => ({
		uid: {
			type: GraphQLString
		},
		title: {
			type: GraphQLString
		},
		body: {
			type: GraphQLString
		}
	})
});