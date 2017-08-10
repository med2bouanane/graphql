import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

import schema from './graphql';

import graphQLSchema from 'swagger-to-graphql';

const app = express()

//mongoose.connect('mongodb://admin-mlab:admin@ds147052.mlab.com:47052/graphql-api')
mongoose.connect('mongodb://localhost:27017/graphql-api')
const db = mongoose.connection
db.on('error',() => console.log(' Fail to connect to database. '))
  .once('open' , () => console.log(' Connected to database. '))



app.get('/',(req,res) => {
	res.send('Hello world this is graphql api!!')
})


// GraphQL API Endpoint
// graphQLSchema('./petstore.json').then(schema => {
app.use('/graphql',graphqlHTTP(() => ({

	schema,
	graphiql: true,
	pretty: true
})))


app.listen(3000, () => {

	console.log('GraphQL API running at port 3000')
})
// }).catch(e => {
//   throw e;
// });