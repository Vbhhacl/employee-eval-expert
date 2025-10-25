import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:5000/api' })


export function createEmployee(name, role){
return API.post('/employees', { name, role })
}


export function evaluateEmployee(id, facts){
return API.post(`/evaluate/${id}`, facts)
}


export function listEmployees(){
return API.get('/employees')
}


export function listEvaluations(){
return API.get('/evaluations')
}


export function downloadCSV(){
return API.get('/reports/csv', { responseType: 'blob' })
}