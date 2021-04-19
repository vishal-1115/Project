import axios from "axios"

const CUSTOMERS_REST_API_URL='http://localhost:8087/api/customers';

class CustomerService{

    getCustomers(){
        return axios.get(CUSTOMERS_REST_API_URL);
    }

}
export default new CustomerService();