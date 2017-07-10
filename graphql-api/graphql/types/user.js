import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLList
} from 'graphql'

import PostModel from '../../models/post'
import { postType } from './post'


/*
===============
OBJETO userType  ==> valores de retorno
===============
userType {

	_id: guid,
	email: String,
	name: String,
	posts: [postType]
}

*/
export const userType = new GraphQLObjectType({

	name: 'User',
	description: 'User api',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		email: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
		},
		posts: {
			type: new GraphQLList(postType),
			resolve(user){
				const { _id } = user
				return PostModel.find({ uid: _id}).exec()
			}
		}
	})
});


/*
====================
OBJETO userInputType  ==> parametros que se pasan como parametros
====================
userType {

	email: String,
	name: String
}

*/
export const userInputType = new GraphQLInputObjectType({

	name: 'UserInput',
	description: 'Insert User',
	fields: () => ({
		email: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
		}
	})
});