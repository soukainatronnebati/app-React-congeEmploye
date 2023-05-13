import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'

export default class 
 extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu />
       <section className="pcoded-main-container">
  <div className="pcoded-wrapper">
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        {/* [ breadcrumb ] start */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4>Annuaire des employés</h4>
                <button type="button" className="btn btn-success" title="btn btn-success" data-toggle="tooltip">Ajouter un employé</button>
              </div>
              <div className="card-block">
              </div>
            </div>
          </div> 
        </div>
        <div className="page-header">
          <div className="page-block">
          </div>
        </div>
        {/* [ breadcrumb ] end */}
        <div className="main-body">
          <div className="page-wrapper">
            {/* [ Main Content ] start */}
            <div className="row">
              {/* [ basic-table ] start */}
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <h5>Liste de tous les Employés</h5>
                    <span className="d-block m-t-5">pour tous les departements
                    </span>
                  </div>
                  <div className="card-block table-border-style">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Employé</th>
                            <th>Fonction</th>
                            <th>Département</th>
                            <th>Site</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Rajae Dahbane</th>
                            <td>Responsable Scolarité</td>
                            <td>Administratif</td>
                            <td>Maarif</td>
                          </tr>
                          <tr>
                            <th scope="row">Mohsine zair</th>
                            <td>Comptable</td>
                            <td>Comptabilité</td>
                            <td>Bélvédére</td>
                          </tr>
                          <tr>
                            <th scope="row">Anas Bennani</th>
                            <td>informaticien</td>
                            <td>Informatique</td>
                            <td>2 Mars</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* [ Main Content ] end */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      </div>
    )
  }
}
