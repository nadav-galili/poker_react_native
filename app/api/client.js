import { create } from "apisauce";

const apiClient = create({
    baseURL: 'https://node.poker-underdog.com/api/', 
    headers: {
        'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIyNDE5Nzg3YjY2NDBhZDA0MTIyMzkiLCJpYXQiOjE2NTQ5MzczNTN9.qIhUgD7UujSHsNwne5jtUoXgckrfM6_enhJqCiA5MKE'
    }
})

///sample call to api
// apiClient.get('/listings').then(response => {
//     if (!response.ok) {
//         response.problem
//     }
// })
export default apiClient;