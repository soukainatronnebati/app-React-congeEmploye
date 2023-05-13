import React  from "react";
import EmployeService from "../Services/EmployeService";

class EmployeComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            employes:[]
        }
    }
     
    componentDidMount(){
        EmployeService.getEmployes().then((response) =>{
         this.setState({ employes: response.data})
        });
    }

    render(){
        return (
            <div>
              <h1 className="text-center">Employes List</h1>
              <table className="table table-striped">
                <thead>
                    <tr>
                        <td>id employe</td>
                        <td>nom employe</td>
                        <td>email employe</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employes.map(
                            employes =>
                            <tr key={employe.id}>
                                  <td>{employe.nom}</td>
                                  <td>{employe.email}</td>
                            </tr>
                        )
                    }
                </tbody>
              </table>
          
            </div>
        )
    }
}