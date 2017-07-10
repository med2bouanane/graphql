import { GraphQLNonNull, GraphQLID } from 'graphql';
import { userType } from '../../types/user';
import { UserModel } from '../../../models/user';


/*
	La diferencia con respecto a los Types 
	es la clave args que define los parámetros y el tipo que se le va a pasar a la función resolve.
*/
export default {

	type: userType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params){
		return UserModel.findById(params.id).exec()
	}
}