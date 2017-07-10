import { GraphQLNonNull, GraphQLID } from 'graphql';

import { userType } from '../../types/user';
import userModel from '../../../models/user';

export default {
	type: userType,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params){
		const removedUser = userModel.findByIdAndRemove(params.id).exec()
		if(!removedUser){
			throw new Error('Error removing user.')
		}

		return removedUser
	}
}