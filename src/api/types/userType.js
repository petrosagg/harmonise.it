import { GraphQLObjectType, GraphQLString } from 'graphql'
import { globalIdField } from 'graphql-relay'
import Db from '../../database'
import userSolutionConnection from '../connections/userSolutionConnection'
import { sequelize } from 'sequelize'
import { relay } from 'graphql-sequelize'

import { nodeTypeMapper, nodeInterface } from '../sequelizeIntegration'

export const userType = new GraphQLObjectType({
  name: 'User',
  description: 'This represents a User',
  fields: () => ({
    id: globalIdField(),
    name: {
      type: GraphQLString
    },
    solutions: {
      type: userSolutionConnection().connectionType,
      args: userSolutionConnection().connectionArgs,
      resolve: userSolutionConnection().resolve,
      description: 'A theme Solution',
    }
  }),
  interfaces: () => [nodeInterface]
})

nodeTypeMapper.mapTypes({
  [Db.models.user.id]: userType
})
