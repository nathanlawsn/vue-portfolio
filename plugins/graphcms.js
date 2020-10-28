import { GraphQLClient } from 'graphql-request';

const graphcmsClient = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ckggfvioh22eq01z21ytzas7h/master'
);

export default (_, inject) => {
  inject('graphcms', graphcmsClient);
};