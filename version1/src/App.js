import React from 'react';
 


function App() {
  return (
    <div>
    
    <header className="main-header">
     <a href={'/#/'} className="logo">
       <span className="logo-mini"><b>A</b>LT</span>
       <span className="logo-lg"><b>Admin</b>LTE</span>
    </a>
     <nav className="navbar navbar-static-top">
       <a href={'/#/'} className="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>

      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
           <li className="dropdown messages-menu">
            <a href={'/#/'} className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-envelope-o"></i>
              <span className="label label-success">4</span>
            </a>
            <ul className="dropdown-menu">
              <li className="header">You have 4 messages</li>
              <li>
                 <ul className="menu">
                  <li>
                    <a href={'/posts/'}>
                      <div className="pull-left">
                        <img src={"../public/theme/dist/img/user2-160x160.jpg"} className="img-circle" alt="" />
                      </div>
                      <h4>
                        Support Team
                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                   <li>
                    <a href={'/posts/'}>
                      <div className="pull-left">
                        <img src={"../public/theme/dist/img/user3-128x128.jpg"} className="img-circle" alt=""/>
                      </div>
                      <h4>
                        AdminLTE Design Team
                        <small><i className="fa fa-clock-o"></i> 2 hours</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href={'/posts/'}>
                      <div className="pull-left">
                        <img src={"../public/theme/dist/img/user4-128x128.jpg"} className="img-circle" alt=""/>
                      </div>
                      <h4>
                        Developers
                        <small><i className="fa fa-clock-o"></i> Today</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href={'/posts/'}>
                      <div className="pull-left">
                        <img src={"../public/theme/dist/img/user3-128x128.jpg"} className="img-circle" alt=""/>
                      </div>
                      <h4>
                        Sales Department
                        <small><i className="fa fa-clock-o"></i> Yesterday</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href={'/posts/'}>
                      <div className="pull-left">
                        <img src={"../public/theme/dist/img/user4-128x128.jpg"} className="img-circle" alt=""/>
                      </div>
                      <h4>
                        Reviewers
                        <small><i className="fa fa-clock-o"></i> 2 days</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer"><a href={'/posts/'}>See All Messages</a></li>
            </ul>
          </li>
           <li className="dropdown notifications-menu">
            <a href={'/posts/'} className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-bell-o"></i>
              <span className="label label-warning">10</span>
            </a>
            <ul className="dropdown-menu">
              <li className="header">You have 10 notifications</li>
              <li>
                <ul className="menu">
                  <li>
                    <a href={'/posts/'}>
                      <i className="fa fa-users text-aqua"></i> 5 new members joined today
                    </a>
                  </li>
                  <li>
                    <a href={'/posts/'}>
                      <i className="fa fa-warning text-yellow"></i> Very long description here that may not fit into the
                      page and may cause design problems
                    </a>
                  </li>
                  <li>
                    <a href={'/posts/'}>
                      <i className="fa fa-users text-red"></i> 5 new members joined
                    </a>
                  </li>
                  <li>
                    <a href={'/posts/'}>
                      <i className="fa fa-shopping-cart text-green"></i> 25 sales made
                    </a>
                  </li>
                  <li>
                    <a href={'/posts/'}>
                      <i className="fa fa-user text-red"></i> You changed your username
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer"><a href={'/posts/'}>View all</a></li>
            </ul>
          </li>
           <li className="dropdown tasks-menu">
            <a href={'/posts/'} className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-flag-o"></i>
              <span className="label label-danger">9</span>
            </a>
            <ul className="dropdown-menu">
              <li className="header">You have 9 tasks</li>
              <li>
                <ul className="menu">
                  <li>
                    <a href={'/posts/'}>
                      <h3>
                        Design some buttons
                        <small className="pull-right">20%</small>
                      </h3>
                      <div className="progress xs">
                        <div className="progress-bar progress-bar-aqua" style={{width: "20%"}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span className="sr-only">20% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                   <li>
                    <a href={'/posts/'}>
                      <h3>
                        Create a nice theme
                        <small className="pull-right">40%</small>
                      </h3>
                      <div className="progress xs">
                        <div className="progress-bar progress-bar-green" style={{width: "40%"}}role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span className="sr-only">40% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                   <li>
                    <a href={'/posts/'}>
                      <h3>
                        Some task I need to do
                        <small className="pull-right">60%</small>
                      </h3>
                      <div className="progress xs">
                        <div className="progress-bar progress-bar-red" style={{width: "60%"}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span className="sr-only">60% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                   <li>
                    <a href={'/posts/'}>
                      <h3>
                        Make beautiful transitions
                        <small className="pull-right">80%</small>
                      </h3>
                      <div className="progress xs">
                        <div className="progress-bar progress-bar-yellow" style={{width: "80%"}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span className="sr-only">80% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer">
                <a href={'/posts/'}>View all tasks</a>
              </li>
            </ul>
          </li>
           <li className="dropdown user user-menu">
            <a href={'/posts/'} className="dropdown-toggle" data-toggle="dropdown">
              <img src={"../public/theme/dist/img/user2-160x160.jpg"} className="user-image" alt=""/>
              <span className="hidden-xs">Alexander Pierce</span>
            </a>
            <ul className="dropdown-menu">
               <li className="user-header">
                <img src={"../public/theme/dist/img/user2-160x160.jpg"} className="img-circle" alt=""/>

                <p>
                  Alexander Pierce - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
               <li className="user-body">
                <div className="row">
                  <div className="col-xs-4 text-center">
                    <a href={'/posts/'}>Followers</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href={'/posts/'}>Sales</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href={'/posts/'}>Friends</a>
                  </div>
                </div>
               </li>
               <li className="user-footer">
                <div className="pull-left">
                  <a href={'/posts/'} className="btn btn-default btn-flat">Profile</a>
                </div>
                <div className="pull-right">
                  <a href={'/posts/'} className="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
           <li>
            <a href={'/posts/'} data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  
  <aside className="main-sidebar">
    <section className="sidebar">
      <div className="user-panel">
        <div className="pull-left image">
          <img src="../public/theme/dist/img/user2-160x160.jpg" className="img-circle" alt="" />
        </div>
        <div className="pull-left info">
          <p>Alexander Pierce</p>
          <a href={'/#/'}><i className="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <form action={'/#/'} method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
       <ul className="sidebar-menu">
        <li className="header">MAIN NAVIGATION</li>
        <li className="active treeview">
          <a href={'/#/'}>
            <i className="fa fa-dashboard"></i> <span>Dashboard</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li className="active"><a href={'#'}><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href={'/#/'}>
            <i className="fa fa-files-o"></i>
            <span>Layout Options</span>
            <span className="pull-right-container">
              <span className="label label-primary pull-right">4</span>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Top Navigation</a></li>
            <li><a href={'/#/'} ><i className="fa fa-circle-o"></i> Boxed</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Fixed</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
          </ul>
        </li>
        <li>
          <a href={'/#/'}>
            <i className="fa fa-th"></i> <span>Widgets</span>
            <span className="pull-right-container">
              <small className="label pull-right bg-green">new</small>
            </span>
          </a>
        </li>
        <li className="treeview">
          <a href={'/#/'}>
            <i className="fa fa-pie-chart"></i>
            <span>Charts</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> ChartJS</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Morris</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Flot</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Inline charts</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href={'/#/'}>
            <i className="fa fa-laptop"></i>
            <span>UI Elements</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> General</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Icons</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Buttons</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Sliders</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Timeline</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Modals</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href={'/#/'}>
            <i className="fa fa-edit"></i> <span>Forms</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="pages/forms/general.html"><i className="fa fa-circle-o"></i> General Elements</a></li>
            <li><a href="pages/forms/advanced.html"><i className="fa fa-circle-o"></i> Advanced Elements</a></li>
            <li><a href="pages/forms/editors.html"><i className="fa fa-circle-o"></i> Editors</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href={'/#/'}>
            <i className="fa fa-table"></i> <span>Tables</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Simple tables</a></li>
            <li><a href={'/#/'} ><i className="fa fa-circle-o"></i> Data tables</a></li>
          </ul>
        </li>
        <li>
          <a href={'/#/'}>
            <i className="fa fa-calendar"></i> <span>Calendar</span>
            <span className="pull-right-container">
              <small className="label pull-right bg-red">3</small>
              <small className="label pull-right bg-blue">17</small>
            </span>
          </a>
        </li>
        <li>
          <a href={'/#/'}>
            <i className="fa fa-envelope"></i> <span>Mailbox</span>
            <span className="pull-right-container">
              <small className="label pull-right bg-yellow">12</small>
              <small className="label pull-right bg-green">16</small>
              <small className="label pull-right bg-red">5</small>
            </span>
          </a>
        </li>
        <li className="treeview">
          <a href={'/#/'}>
            <i className="fa fa-folder"></i> <span>Examples</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Invoice</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Profile</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Login</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Register</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Lockscreen</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> 404 Error</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> 500 Error</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Blank Page</a></li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Pace Page</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href={'/#/'}>
            <i className="fa fa-share"></i> <span>Multilevel</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Level One</a></li>
            <li>
              <a href={'/#/'}><i className="fa fa-circle-o"></i> Level One
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Level Two</a></li>
                <li>
                  <a href={'/#/'}><i className="fa fa-circle-o"></i> Level Two
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Level Three</a></li>
                    <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Level Three</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href={'/#/'}><i className="fa fa-circle-o"></i> Level One</a></li>
          </ul>
        </li>
        <li><a href="documentation/index.html"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
        <li className="header">LABELS</li>
        <li><a href={'/#/'}><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
        <li><a href={'/#/'}><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
        <li><a href={'/#/'}><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
      </ul>
    </section>
  </aside>
 
  
  </div>
  );
}

export default App;
