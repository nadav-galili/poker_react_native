import client from './client';

const endPoint = 'teams/my-teams';
const getTeams = () => client.get(endPoint);

export default {
    getTeams
}