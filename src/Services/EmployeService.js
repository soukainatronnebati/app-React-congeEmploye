import axios from "axios";

const USERS_REST_API_URL = 'http://localhost:8080/api/employes';

class EmployeService {

    getEmployes() {

       return axios.get(USERS_REST_API_URL)
    }
}
export default new EmployeService();