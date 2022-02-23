import React from 'react';

function Header () {
  const path = window.location.pathname;
  return (
    <>
      <div className="sub-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <p className="text-center top-message" style={{color: '#fff'}}><a href="#/">Now Hiring:</a>Hire us and we will take you around the <strong style={{color:'yellow'}}>Pearl of Africa</strong>
          </p>

            {/* <ul className="left-info">
              <li><a href="#/"><i className="fa fa-clock-o"></i>Mon-Fri 09:00-17:00</a></li>
              <li><a href="#/"><i className="fa fa-phone"></i>090-080-0760</a></li>
            </ul> */}
          </div>
  
        </div>
      </div>
    </div>
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/"><h2>Uganda Zzabu</h2></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${path === '/'? 'active': null}`}>
                <a className="nav-link " href="/">Home
                </a>                                                                               
              </li>
              <li className={`nav-item ${path === '/hotels'? 'active': null}`}>
                <a className="nav-link" href="/hotels">Hotels</a>
              </li>  
              <li className={`nav-item ${path === '/touristsites'? 'active': null}`}>
                <a className="nav-link" href="/touristsites">Sites</a>
              </li> 
              <li className={`nav-item ${path === '/aboutus'? 'active': null}`}>
                <a className="nav-link" href="/aboutus">About Us</a>
              </li> 
                                    
              <li className={`nav-item ${path === '/contactus'? 'active': null}`}>
                <a className="nav-link" href="/contactus">Contact Us</a>
              </li>
             </ul>
          </div>                                                                                                                                                                                                                                        
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header;