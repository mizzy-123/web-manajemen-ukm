function Sidebar({ role }) {
  // const [rolev, setRolev] = useState(0);
  // useEffect(() => {
  //   setRolev(role);
  //   console.log("log side:", rolev);
  // }, [role, rolev]);
  return (
    <div className="nk-sidebar nk-sidebar-fixed is-light " data-content="sidebarMenu">
      <div className="nk-sidebar-element nk-sidebar-head">
        <div className="nk-sidebar-brand">
          <a href="html/index.html" className="logo-link nk-sidebar-logo">
            <img className="logo-light logo-img" src="./images/logo.png" srcSet="./images/logo2x.png 2x" alt="logo" />
            <img className="logo-dark logo-img" src="./images/logo-dark.png" srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
            <img className="logo-small logo-img logo-img-small" src="./images/logo-small.png" srcSet="./images/logo-small2x.png 2x" alt="logo-small" />
          </a>
        </div>
        <div className="nk-menu-trigger me-n2">
          <a href="#" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu">
            <em className="icon ni ni-arrow-left"></em>
          </a>
          <a href="#" className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu">
            <em className="icon ni ni-menu"></em>
          </a>
        </div>
      </div>
      {/* <!-- .nk-sidebar-element --> */}

      <div className="nk-sidebar-element">
        <div className="nk-sidebar-content">
          <SidebarHandle role={role} />
          {/* <!-- .nk-sidebar-menu --> */}
        </div>
        {/* <!-- .nk-sidebar-content --> */}
      </div>
      {/* <!-- .nk-sidebar-element --> */}
    </div>
  );
}

function SidebarHandle({ role }) {
  console.log("cek role", role);
  if (role == 1) {
    return (
      <div className="nk-sidebar-menu" data-simplebar>
        <ul className="nk-menu">
          {/* <!-- .nk-menu-item --> */}
          <li className="nk-menu-heading">
            <h6 className="overline-title text-primary-alt">Dashboards</h6>
          </li>
          {/* <!-- .nk-menu-item --> */}
          <li className="nk-menu-item">
            <a href="html/index.html" className="nk-menu-link">
              <span className="nk-menu-icon">
                <em className="icon ni ni-cart-fill"></em>
              </span>
              <span className="nk-menu-text">Default</span>
            </a>
          </li>
          {/* <!-- .nk-menu-item --> */}
          <li className="nk-menu-item">
            <a href="html/index-sales.html" className="nk-menu-link">
              <span className="nk-menu-icon">
                <em className="icon ni ni-activity-round-fill"></em>
              </span>
              <span className="nk-menu-text">Sales</span>
            </a>
          </li>
          {/* <!-- .nk-menu-item --> */}
          <li className="nk-menu-item">
            <a href="html/index-analytics.html" className="nk-menu-link">
              <span className="nk-menu-icon">
                <em className="icon ni ni-growth-fill"></em>
              </span>
              <span className="nk-menu-text">Analytics</span>
            </a>
          </li>
          {/* <!-- .nk-menu-item --> */}
          <li className="nk-menu-heading">
            <h6 className="overline-title text-primary-alt">Applications</h6>
          </li>
          {/* <!-- .nk-menu-heading --> */}
          <li className="nk-menu-item has-sub">
            <a href="#" className="nk-menu-link nk-menu-toggle">
              <span className="nk-menu-icon">
                <em className="icon ni ni-tile-thumb-fill"></em>
              </span>
              <span className="nk-menu-text">Projects</span>
            </a>
            <ul className="nk-menu-sub">
              <li className="nk-menu-item">
                <a href="html/project-card.html" className="nk-menu-link">
                  <span className="nk-menu-text">Project Cards</span>
                </a>
              </li>
              <li className="nk-menu-item">
                <a href="html/project-list.html" className="nk-menu-link">
                  <span className="nk-menu-text">Project List</span>
                </a>
              </li>
            </ul>
            {/* <!-- .nk-menu-sub --> */}
          </li>
          {/* <!-- .nk-menu-item --> */}
          <li className="nk-menu-item has-sub">
            <a href="#" className="nk-menu-link nk-menu-toggle">
              <span className="nk-menu-icon">
                <em className="icon ni ni-users-fill"></em>
              </span>
              <span className="nk-menu-text">User Manage</span>
            </a>
            <ul className="nk-menu-sub">
              <li className="nk-menu-item">
                <a href="html/user-list-default.html" className="nk-menu-link">
                  <span className="nk-menu-text">User List - Default</span>
                </a>
              </li>
              <li className="nk-menu-item">
                <a href="html/user-list-regular.html" className="nk-menu-link">
                  <span className="nk-menu-text">User List - Regular</span>
                </a>
              </li>
              <li className="nk-menu-item">
                <a href="html/user-list-compact.html" className="nk-menu-link">
                  <span className="nk-menu-text">User List - Compact</span>
                </a>
              </li>
              <li className="nk-menu-item">
                <a href="html/user-details-regular.html" className="nk-menu-link">
                  <span className="nk-menu-text">User Details - Regular</span>
                </a>
              </li>
              <li className="nk-menu-item">
                <a href="html/user-profile-regular.html" className="nk-menu-link">
                  <span className="nk-menu-text">User Profile - Regular</span>
                </a>
              </li>
              <li className="nk-menu-item">
                <a href="html/user-card.html" className="nk-menu-link">
                  <span className="nk-menu-text">User Contact - Card</span>
                </a>
              </li>
            </ul>
            {/* <!-- .nk-menu-sub --> */}
          </li>
        </ul>
        {/* <!-- .nk-menu --> */}
      </div>
    );
  } else if (role == 2) {
    return (
      <div className="nk-sidebar-menu" data-simplebar>
        <ul className="nk-menu">
          {/* <!-- .nk-menu-item --> */}
          {/* <!-- .nk-menu-item --> */}
          <li className="nk-menu-heading">
            <h6 className="overline-title text-primary-alt">UKM Handling</h6>
          </li>
          {/* <!-- .nk-menu-heading --> */}
          <li className="nk-menu-item has-sub">
            <a href="#" className="nk-menu-link nk-menu-toggle">
              <span className="nk-menu-icon">
                <em className="icon ni ni-users-fill"></em>
              </span>
              <span className="nk-menu-text">Perekrutan ukm</span>
            </a>
            <ul className="nk-menu-sub">
              <li className="nk-menu-item">
                <a href="html/project-card.html" className="nk-menu-link">
                  <span className="nk-menu-text">Rekrut anggota</span>
                </a>
              </li>
              <li className="nk-menu-item">
                <a href="html/project-list.html" className="nk-menu-link">
                  <span className="nk-menu-text">Lihat calon anggota</span>
                </a>
              </li>
            </ul>
            {/* <!-- .nk-menu-sub --> */}
          </li>
          {/* <!-- .nk-menu-item --> */}
        </ul>
        {/* <!-- .nk-menu --> */}
      </div>
    );
  } else {
    return null;
  }
}

export default Sidebar;
