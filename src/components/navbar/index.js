import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {

    componentDidMount() {
        //console.log(this.props);
    }
       
    search = async (query) => {
        // let data = await searchApi.search(query);
        // dataApi.loadData(data);
    }

    clearSearch = () => {
        //searchApi.clearSearch();
    }

    logoutClick = () => {
        //Auth.logout();
    }

    showLeftMenu = () => {
       // layoutService.showLefNavigation(true);
    }

    render() {

        return (

            <nav className="top-navbar navbar navbar-expand-lg navbar-light">

                {1 === 2 &&
                    <button className="action-icon fxbutton fx-fade" tabIndex="-1">
                        <span className="fa fa-bars" />
                    </button>
                }

                <Link className="navbar-brand" to="/">
                    <span className="navbar-app-name">TodoApp</span>
                </Link>

                <div className="search-bar">
                    <i className="fa fa-search search-icon" aria-hidden="true" />
                    <input value={this.props.main.query} onChange={(event) => this.search(event.target.value)} className="form-control mr-sm-2 search-input" type="search" placeholder="Search" aria-label="Search" />
                    {this.props.main.query &&
                        <span id="search-clear" onClick={this.clearSearch} className="fa fa-times-circle clear-search-button" aria-hidden="true"><span className="sr-only">Clear search</span></span>
                    }
                </div>

             
                {1===2 &&
                <div className="collapse navbar-collapse navbar-icons" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link fxbutton fx-fade bradius50" to="/location" >
                                <span className="fa fa-map-marker-alt mappin-icon" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fxbutton fx-fade bradius50" to="/publish" >
                                <span className="fa fa-camera upload-icon" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fxbutton fx-fade bradius50" to="#" >
                                <span className="fa fa-bell bell-icon" />
                            </Link>
                        </li>
                        {1===2 &&
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#dropdown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    EN
                        </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#action1">EN - English</a>
                                    <a className="dropdown-item" href="#action2">PT - Portuguese</a>
                                </div>
                            </li>}
                        {1 === 2 &&
                            <li className="nav-item dropdown">

                                <a className="nav-link dropdown-toggle" href="#dropdown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.props.user.isAuthenticated ? this.props.user.displayName : 'Sign In'}
                                </a>


                                <div className="dropdown-menu dropdown-menu-right" >
                                    {(!this.props.user.isAuthenticated) &&
                                        <div>
                                            <div className="dropdown-header">Sign In with</div>
                                            <Link className="dropdown-item marketplace-login-button" to="/login" >
                                                
                                                 Marketplace</Link>
                                            
                                        </div>
                                    }
                                    {this.props.user.isAuthenticated &&
                                        <div>
                                            <Link onClick={this.logoutClick} className="dropdown-item" to="/logout" >Logout</Link>
                                        </div>
                                    }
                                </div>

                            </li>}
                       
                    </ul>

                </div>

              }

            </nav>
        );
    }
}
Navbar.displayName = 'Navbar';

/* Redux Code Start */

// make user object available on props
const mapStateToProps = (state) => ({
    ...state
});


// connect component, state and dispatch actions with Redux. 
Navbar = withRouter(connect(mapStateToProps)(Navbar));

export { Navbar };