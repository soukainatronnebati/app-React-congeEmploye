import React, { Component } from "react";
import "bootstrap/js/dist/base-component";

const Menu = () => {
  return (
    <div>
      <nav className="pcoded-navbar">
        <div className="navbar-wrapper">
          <div className="navbar-brand header-logo">
            <a href="index.html" className="b-brand">
              <div className="b-bg">
                <i className="feather icon-trending-up" />
              </div>
              <span className="b-title">Application Capr</span>
            </a>
            <a className="mobile-menu" id="mobile-collapse" href="javascript:">
              <span />
            </a>
          </div>
          <div className="navbar-content scroll-div">
            <ul className="nav pcoded-inner-navbar">
              <li
                data-username="dashboard Default Ecommerce CRM Analytics Crypto Project"
                className="nav-item active"
              >
                <a href="index.html" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-home" />
                  </span>
                  <span className="pcoded-mtext">Dashboard</span>
                </a>
              </li>
              <li
                data-username="Table bootstrap datatable footable"
                className="nav-item"
              >
                {/* <Link to="Calendar" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-server" />
                  </span>
                  <span className="pcoded-mtext">Calendrier</span>
                </Link> */}
              </li>
              <li
                data-username="form elements advance componant validation masking wizard picker select"
                className="nav-item"
              >
                {/* <Link to="Annuaire" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-file-text" />
                  </span>
                  <span className="pcoded-mtext">Annuaire</span>
                </Link> */}
              </li>
              <li
                data-username="Table bootstrap datatable footable"
                className="nav-item"
              >
                <a href="tbl_bootstrap.html" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-server" />
                  </span>
                  <span className="pcoded-mtext">WorkFlow</span>
                </a>
              </li>
              <div></div>
              <li
                data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds"
                className="nav-item pcoded-hasmenu"
              >
                <a href="#" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-box" />
                  </span>
                  <span className="pcoded-mtext">Présence</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className>
                    <a href="bc_button.html" className>
                      Button
                    </a>
                  </li>
                  <li className>
                    <a href="bc_badges.html" className>
                      Badges
                    </a>
                  </li>
                  <li className>
                    <a href="bc_breadcrumb-pagination.html" className>
                      Breadcrumb{" "}
                    </a>
                  </li>
                  <li className>
                    <a href="bc_collapse.html" className>
                      Collapse
                    </a>
                  </li>
                </ul>
              </li>
              <li
                data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds"
                className="nav-item pcoded-hasmenu"
              >
                <a href="javascript:" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-box" />
                  </span>
                  <span className="pcoded-mtext">Absence</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className>
                    <a href="bc_button.html" className>
                      Button
                    </a>
                  </li>
                  <li className>
                    <a href="bc_badges.html" className>
                      Badges
                    </a>
                  </li>
                  <li className>
                    <a href="bc_breadcrumb-pagination.html" className>
                      Breadcrumb{" "}
                    </a>
                  </li>
                  <li className>
                    <a href="bc_collapse.html" className>
                      Collapse
                    </a>
                  </li>
                </ul>
              </li>

              <li
                data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds"
                className="nav-item pcoded-hasmenu"
              >
                <a href="javascript:" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-box" />
                  </span>
                  <span className="pcoded-mtext">Retard</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className>
                    <a href="bc_button.html" className>
                      Button
                    </a>
                  </li>
                  <li className>
                    <a href="bc_badges.html" className>
                      Badges
                    </a>
                  </li>
                  <li className>
                    <a href="bc_breadcrumb-pagination.html" className>
                      Breadcrumb{" "}
                    </a>
                  </li>
                  <li className>
                    <a href="bc_collapse.html" className>
                      Collapse
                    </a>
                  </li>
                </ul>
              </li>
              <li
                data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds"
                className="nav-item pcoded-hasmenu"
              >
                <a href="javascript:" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-box" />
                  </span>
                  <span className="pcoded-mtext">Congé</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className>
                    <a href="bc_button.html" className>
                      Button
                    </a>
                  </li>
                  <li className>
                    <a href="bc_badges.html" className>
                      Badges
                    </a>
                  </li>
                  <li className>
                    <a href="bc_breadcrumb-pagination.html" className>
                      Breadcrumb{" "}
                    </a>
                  </li>
                  <li className>
                    <a href="bc_collapse.html" className>
                      Collapse
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item pcoded-menu-caption">
                <label>Paramétres</label>
              </li>
              <li
                data-username="Table bootstrap datatable footable"
                className="nav-item"
              >
                <a href="tbl_bootstrap.html" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-server" />
                  </span>
                  <span className="pcoded-mtext">Indicateurs RH</span>
                </a>
              </li>
              <li
                data-username="form elements advance componant validation masking wizard picker select"
                className="nav-item"
              >
                <a href="form_elements.html" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-file-text" />
                  </span>
                  <span className="pcoded-mtext">Infos Entreprise</span>
                </a>
              </li>
              <li
                data-username="form elements advance componant validation masking wizard picker select"
                className="nav-item"
              >
                <a href="auth-signin.html" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-file-text" />
                  </span>
                  <span className="pcoded-mtext">Se Déconnecter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
