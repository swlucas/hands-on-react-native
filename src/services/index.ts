import axios from 'axios'

const api = axios
.create({baseURL:'http://api2.sec.ba.gov.br'})

export default api;