import React from 'react';
import CustomerService from '../services/CustomerService';

class CustomerComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            customers:[]
        }
    }

    componentDidMount(){
        CustomerService.getCustomers().then((response) =>{
            this.setState({customers: response.data})
        });

    }

    render (){
        return(
            <div>
                <h1 className="text-center">Customers List</h1>     
                <table className="table table-stripped">
                <thead>

                    <tr>
                        <td>Cust Id</td>
                        <td>Cust First Name</td>
                        <td>Cust Last Name</td>
                        <td>Cust Email Id</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.customers.map(
                            customer =>
                            <tr key = {customer.id} >
                                <td>{customer.id}</td>
                                <td> {customer.firstName}</td>
                                <td> {customer.lastName}</td>
                                <td> {customer.email}</td>
                            </tr>
                        )
                    }
                </tbody>
                </table>


            </div>
        )
    }
}
export default CustomerComponent;