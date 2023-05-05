import React, { Component } from 'react'

export default class 

extends Component {
  render() {
    return (
      <div>
          <div class="loader-bg">
        <div class="loader-track">
            <div class="loader-fill"></div>
        </div>
    </div>
      <div className="pcoded-main-container">
  <div className="pcoded-wrapper">
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        {/* [ breadcrumb ] start */}
        {/* [ breadcrumb ] end */}
        <div className="main-body">
          <div className="page-wrapper">
            {/* [ Main Content ] start */}
            <div className="row">
              {/*[ daily sales section ] start*/}
            
              {/*[ Recent Users ] start*/}
              <div className="col-xl-8 col-md-6">
                <div className="card Recent-Users">
                  <div className="card-header">
                    <h5>Demandes de congés en attente </h5>
                  </div>
                  <div className="card-block px-0 py-3">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <tbody>
                          <tr className="unread">
                            <td><img className="rounded-circle" style={{width: 40}} src="assets/images/user/avatar-1.jpg" alt="activity-user" /></td>
                            <td>
                              <h6 className="mb-1">Nadia Moustarih</h6>
                              <p className="m-0">Demande de congé de maladie</p>
                            </td>
                            <td>
                              <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15" />11 MAI 12:56</h6>
                            </td>
                            <td><a href="#!" className="label theme-bg2 text-white f-12">Refusé</a><a href="#!" className="label theme-bg text-white f-12">Approuvé</a></td>
                          </tr>
                          <tr className="unread">
                            <td><img className="rounded-circle" style={{width: 40}} src="assets/images/user/avatar-2.jpg" alt="activity-user" /></td>
                            <td>
                              <h6 className="mb-1">Omar Diori</h6>
                              <p className="m-0">Demande de congé de paternité</p>
                            </td>
                            <td>
                              <h6 className="text-muted"><i className="fas fa-circle text-c-red f-10 m-r-15" />11 JUIN 10:35</h6>
                            </td>
                            <td><a href="#!" className="label theme-bg2 text-white f-12">Refusé</a><a href="#!" className="label theme-bg text-white f-12">Approuvé</a></td>
                          </tr>
                          <tr className="unread">
                            <td><img className="rounded-circle" style={{width: 40}} src="assets/images/user/avatar-3.jpg" alt="activity-user" /></td>
                            <td>
                              <h6 className="mb-1">Rajae Dahban</h6>
                              <p className="m-0">Demande de congé de mariage</p>
                            </td>
                            <td>
                              <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15" />9 MAI 17:38</h6>
                            </td>
                            <td><a href="#!" className="label theme-bg2 text-white f-12">Refusé</a><a href="#!" className="label theme-bg text-white f-12">Approuvé</a></td>
                          </tr>
                         
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/*[ Recent Users ] end*/}
              {/* [ statistics year chart ] start */}
              <div className="col-xl-4 col-md-6">
                <div className="card card-event">
                  <div className="card-block">
                    <div className="row align-items-center justify-content-center">
                      <div className="col">
                        <h5 className="m-0">Taches à réaliser</h5>
                      </div>
                      <div className="col-auto">
                        <label className="label theme-bg2 text-white f-14 f-w-400 float-right">Mois AVRIL</label>
                      </div>
                    </div>
                    <h2 className="mt-3 f-w-300">10<sub className="text-muted f-14">Taches Restants</sub></h2>
                    <h6 className="text-muted mt-4 mb-0">Impossible de demander congé </h6>
                    
                  </div>
                </div>
                <div className="card">
                  <div className="card-block border-bottom">
                    <div className="row d-flex align-items-center">
                      <div className="col-auto">
                        <i className="feather icon-zap f-30 text-c-green" />
                      </div>
                      <div className="col">
                        <h3 className="f-w-300">235</h3>
                        <span className="d-block text-uppercase">Nombre Heure de travail</span>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
              {/* [ statistics year chart ] end */}
              <div className="col-md-6 col-xl-4">
                <div className="card daily-sales">
                  <div className="card-block">
                    <h4 className="mb-4">Solde congé Payé</h4>
                    <div className="row d-flex align-items-center">
                      <div className="col-9">
                        <h5 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10" /> 25 Jours </h5>
                      </div>
                      <div className="col-3 text-right">
                        <p className="m-b-0">Reste</p>
                      </div>
                    </div>
                    <div className="progress m-t-30" style={{height: 7}}>
                      <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>
              </div>
              {/*[ daily sales section ] end*/}
              {/*[ Monthly  sales section ] starts*/}
              <div className="col-md-6 col-xl-4">
                <div className="card Monthly-sales">
                  <div className="card-block">
                    <h4 className="mb-4">Solde Absence</h4>
                    <div className="row d-flex align-items-center">
                      <div className="col-9">
                        <h5 className="f-w-300 d-flex align-items-center  m-b-0"><i className="feather icon-arrow-down text-c-red f-30 m-r-10" />5 Jours</h5>
                      </div>
                      <div className="col-3 text-right">
                        <p className="m-b-0">Reste</p>
                      </div>
                    </div>
                    <div className="progress m-t-30" style={{height: 7}}>
                      <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '35%'}} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>
              </div>
              {/*[ Monthly  sales section ] end*/}
              {/*[ year  sales section ] starts*/}
              <div className="col-md-12 col-xl-4">
                <div className="card yearly-sales">
                  <div className="card-block">
                    <h4 className="mb-4">Solde Retard</h4>
                    <div className="row d-flex align-items-center">
                      <div className="col-9">
                        <h5 className="f-w-300 d-flex align-items-center  m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10" />2 Jours</h5>
                      </div>
                      <div className="col-3 text-right">
                        <p className="m-b-0">Reste</p>
                      </div>
                    </div>
                    <div className="progress m-t-30" style={{height: 7}}>
                      <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>
              </div>
              {/*[ year  sales section ] end*/}
              {/*[departement -iga] start*/}
              <div className="col-md-12 col-xl-4">
                <div className="card card-social">
                  <div className="card-block border-bottom">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-auto">
                        
                        <h5>Departement Comptabilité</h5>
                      </div>
                      <div className="col text-right">
                        <h5>30</h5>
                        <h5 className="text-c-green mb-0"> <span className="text-muted"> Total </span></h5>
                      </div>
                    </div>
                  </div>
                  <div className="card-block">
                    <div className="row align-items-center justify-content-center card-active">
                      <div className="col-6">
                        <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Congés:</span>8</h6>
                        <div className="progress">
                          <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '60%', height: 6}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                      <div className="col-6">
                        <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Absences:</span>3</h6>
                        <div className="progress">
                          <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '45%', height: 6}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="card card-social">
                  <div className="card-block border-bottom">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-auto">
                         <h5>Departement Informatique</h5>
                      </div>
                      <div className="col text-right">
                        <h5>50</h5>
                        <h5 className="text-c-purple mb-0"> <span className="text-muted">Total </span></h5>
                      </div>
                    </div>
                  </div>
                  <div className="card-block">
                    <div className="row align-items-center justify-content-center card-active">
                      <div className="col-6">
                        <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Congés:</span>3</h6>
                        <div className="progress">
                          <div className="progress-bar progress-c-green" role="progressbar" style={{width: '40%', height: 6}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                      <div className="col-6">
                        <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Absences:</span>2</h6>
                        <div className="progress">
                          <div className="progress-bar progress-c-blue" role="progressbar" style={{width: '70%', height: 6}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="card card-social">
                  <div className="card-block border-bottom">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-auto">
                         <h5>Department Administratif</h5>
                      </div>
                      <div className="col text-right">
                        <h5>10</h5>
                        <h5 className="text-c-blue mb-0"> <span className="text-muted">Total</span></h5>
                      </div>
                    </div>
                  </div>
                  <div className="card-block">
                    <div className="row align-items-center justify-content-center card-active">
                      <div className="col-6">
                        <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Congés:</span>25</h6>
                        <div className="progress">
                          <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '80%', height: 6}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                      <div className="col-6">
                        <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Absences:</span>7</h6>
                        <div className="progress">
                          <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '50%', height: 6}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*[social-media section] end*/}
              {/* [ rating list ] starts*/}
              <div className="col-xl-4 col-md-6">
                <div className="card user-list">
                  <div className="card-header">
                    <h5>Type de congé</h5>
                  </div>
                  <div className="card-block">
                    <div className="row align-items-center justify-content-center m-b-20">
                     
                      <div className="col-6">
                        <h6 className="d-flex  align-items-center float-right m-0"> </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <h6 className="align-items-center float-left"><i className="fas fa-star f-10 m-r-10 text-c-yellow" />Congé Payé</h6>
                        <h6 className="align-items-center float-right">384</h6>
                        <div className="progress m-t-30 m-b-20" style={{height: 6}}>
                          <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <h6 className="align-items-center float-left"><i className="fas fa-star f-10 m-r-10 text-c-yellow" />Congé maladie</h6>
                        <h6 className="align-items-center float-right">145</h6>
                        <div className="progress m-t-30  m-b-20" style={{height: 6}}>
                          <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '35%'}} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <h6 className="align-items-center float-left"><i className="fas fa-star f-10 m-r-10 text-c-yellow" />Congé Maternité / paternité</h6>
                        <h6 className="align-items-center float-right">24</h6>
                        <div className="progress m-t-30  m-b-20" style={{height: 6}}>
                          <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <h6 className="align-items-center float-left"><i className="fas fa-star f-10 m-r-10 text-c-yellow" />Congé Mariage / Décés</h6>
                        <h6 className="align-items-center float-right">20</h6>
                        <div className="progress m-t-30  m-b-20" style={{height: 6}}>
                          <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <h6 className="align-items-center float-left"><i className="fas fa-star f-10 m-r-10 text-c-yellow" />Congé Sans Solde</h6>
                        <h6 className="align-items-center float-right">10</h6>
                        <div className="progress m-t-30  m-b-20" style={{height: 6}}>
                          <div className="progress-bar" role="progressbar" style={{width: 0}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* [ rating list ] end*/}
              <div className="col-xl-8 col-md-12 m-b-30">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Aujourd'hui</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active show" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Cette semaine</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Tous</a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Employé</th>
                          <th>tache</th>
                          <th>Date </th>
                          <th>Status</th>
                          <th className="text-right" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width: 40}} src="assets/images/user/avatar-1.jpg" alt="activity-user" />Ida Jorgensen</h6>
                          </td>
                          <td>
                            <h6 className="m-0">The quick brown fox</h6>
                          </td>
                          <td>
                            <h6 className="m-0">3:28 PM</h6>
                          </td>
                          <td>
                            <h6 className="m-0 text-c-green">Done</h6>
                          </td>
                          <td className="text-right"><i className="fas fa-circle text-c-green f-10" /></td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width: 40}} src="assets/images/user/avatar-2.jpg" alt="activity-user" />Albert Andersen</h6>
                          </td>
                          <td>
                            <h6 className="m-0">Jumps over the lazy</h6>
                          </td>
                          <td>
                            <h6 className="m-0">2:37 PM</h6>
                          </td>
                          <td>
                            <h6 className="m-0 text-c-red">Missed</h6>
                          </td>
                          <td className="text-right"><i className="fas fa-circle text-c-red f-10" /></td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width: 40}} src="assets/images/user/avatar-3.jpg" alt="activity-user" />Silje Larsen</h6>
                          </td>
                          <td>
                            <h6 className="m-0">Dog the quick brown</h6>
                          </td>
                          <td>
                            <h6 className="m-0">10:23 AM</h6>
                          </td>
                          <td>
                            <h6 className="m-0 text-c-purple">Delayed</h6>
                          </td>
                          <td className="text-right"><i className="fas fa-circle text-c-purple f-10" /></td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width: 40}} src="assets/images/user/avatar-1.jpg" alt="activity-user" />Ida Jorgensen</h6>
                          </td>
                          <td>
                            <h6 className="m-0">The quick brown fox</h6>
                          </td>
                          <td>
                            <h6 className="m-0">4:28 PM</h6>
                          </td>
                          <td>
                            <h6 className="m-0 text-c-green">Done</h6>
                          </td>
                          <td className="text-right"><i className="fas fa-circle text-c-green f-10" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Employé</th>
                          <th>Activité</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th className="text-right" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width: 40}} src="assets/images/user/avatar-2.jpg" alt="activity-user" />Albert Andersen</h6>
                          </td>
                          <td>
                            <h6 className="m-0">Jumps over the lazy</h6>
                          </td>
                          <td>
                            <h6 className="m-0">2:37 PM</h6>
                          </td>
                          <td>
                            <h6 className="m-0 text-c-red">Missed</h6>
                          </td>
                          <td className="text-right"><i className="fas fa-circle text-c-red f-10" /></td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width: 40}} src="assets/images/user/avatar-1.jpg" alt="activity-user" />Ida Jorgensen</h6>
                          </td>
                          <td>
                            <h6 className="m-0">The quick brown fox</h6>
                          </td>
                          <td>
                            <h6 className="m-0">3:28 PM</h6>
                          </td>
                          <td>
                            <h6 className="m-0 text-c-green">Done</h6>
                          </td>
                          <td className="text-right"><i className="fas fa-circle text-c-green f-10" /></td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width: 40}} src="assets/images/user/avatar-1.jpg" alt="activity-user" />Ida Jorgensen</h6>
                          </td>
                          <td>
                            <h6 className="m-0">The quick brown fox</h6>
                          </td>
                          <td>
                            <h6 className="m-0">4:28 PM</h6>
                          </td>
                          <td>
                            <h6 className="m-0 text-c-green">Done</h6>
                          </td>
                          <td className="text-right"><i className="fas fa-circle text-c-green f-10" /></td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width: 40}} src="assets/images/user/avatar-3.jpg" alt="activity-user" />Silje Larsen</h6>
                          </td>
                          <td>
                            <h6 className="m-0">Dog the quick brown</h6>
                          </td>
                          <td>
                            <h6 className="m-0">10:23 AM</h6>
                          </td>
                          <td>
                            <h6 className="m-0 text-c-purple">Delayed</h6>
                          </td>
                          <td className="text-right"><i className="fas fa-circle text-c-purple f-10" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Employé</th>
                          <th>Tache</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th className="text-right" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width: 40}} src="assets/images/user/avatar-3.jpg" alt="activity-user" />Silje Larsen</h6>
                          </td>
                          <td>
                            <h6 className="m-0">Dog the quick brown</h6>
                          </td>
                          <td>
                            <h6 className="m-0">10:23 AM</h6>
                          </td>
                          <td>
                            <h6 className="m-0 text-c-purple">Delayed</h6>
                          </td>
                          <td className="text-right"><i className="fas fa-circle text-c-purple f-10" /></td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width: 40}} src="assets/images/user/avatar-1.jpg" alt="activity-user" />Ida Jorgensen</h6>
                          </td>
                          <td>
                            <h6 className="m-0">The quick brown fox</h6>
                          </td>
                          <td>
                            <h6 className="m-0">3:28 PM</h6>
                          </td>
                          <td>
                            <h6 className="m-0 text-c-green">Done</h6>
                          </td>
                          <td className="text-right"><i className="fas fa-circle text-c-green f-10" /></td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width: 40}} src="assets/images/user/avatar-2.jpg" alt="activity-user" />Albert Andersen</h6>
                          </td>
                          <td>
                            <h6 className="m-0">Jumps over the lazy</h6>
                          </td>
                          <td>
                            <h6 className="m-0">2:37 PM</h6>
                          </td>
                          <td>
                            <h6 className="m-0 text-c-red">Missed</h6>
                          </td>
                          <td className="text-right"><i className="fas fa-circle text-c-red f-10" /></td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width: 40}} src="assets/images/user/avatar-1.jpg" alt="activity-user" />Ida Jorgensen</h6>
                          </td>
                          <td>
                            <h6 className="m-0">The quick brown fox</h6>
                          </td>
                          <td>
                            <h6 className="m-0">4:28 PM</h6>
                          </td>
                          <td>
                            <h6 className="m-0 text-c-green">Done</h6>
                          </td>
                          <td className="text-right"><i className="fas fa-circle text-c-green f-10" /></td>
                        </tr>
                      </tbody>
                    </table>
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
</div>


      </div>
    )
  }
}
