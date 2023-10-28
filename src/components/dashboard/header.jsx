"use client";

import GetRole from "@/api/getRole";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GetUser from "@/api/getUser";
import deleteToken from "@/cookie/deleteToken";

export default function Header({ onSelect, token, role }) {
  // const [currentRole, setCurrentRole] = useState(0);
  const [allrole, setAllRole] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleClick = (e, role) => {
    e.preventDefault();
    // setCurrentRole(role);
    onSelect(role);
  };

  const LogoutClick = (e) => {
    e.preventDefault();
    deleteToken();
    router.refresh();
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const roleData = await GetRole({ token: token });
        const user = await GetUser({ token: token });
        setAllRole(roleData.data.data);
        setUser(user.data.data);
        // setCurrentRole(roleData.data.data[0].id);
        onSelect(roleData.data.data[0].id);
        setLoading(true);
      } catch (error) {
        if (token === undefined || token === null) {
          router.push("/login");
        }
        setLoading(true);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="nk-header nk-header-fixed is-light">
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-menu-trigger d-xl-none ms-n1">
            <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu">
              <em className="icon ni ni-menu"></em>
            </a>
          </div>
          <div className="nk-header-brand d-xl-none">
            <a href="html/index.html" className="logo-link">
              <img className="logo-light logo-img" src="./images/logo.png" srcSet="./images/logo2x.png 2x" alt="logo" />
              <img className="logo-dark logo-img" src="./images/logo-dark.png" srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
            </a>
          </div>
          {/* <!-- .nk-header-brand --> */}
          <div className="nk-header-search ms-3 ms-xl-0">
            {/* <em className="icon ni ni-search"></em> */}
            {/* <input type="text" className="form-control border-transparent form-focus-none" placeholder="Search anything" /> */}
          </div>
          {/* <!-- .nk-header-news --> */}
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li>
                {loading ? (
                  <div className="drodown">
                    <a href="#" className="dropdown-toggle btn btn-white btn-dim btn-outline-light" data-bs-toggle="dropdown">
                      <span>
                        <span className="d-none d-md-inline">{"-->"}</span> <ChangeTextRoleHeader role={role} />
                      </span>
                      <em className="dd-indc icon ni ni-chevron-right"></em>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <ul className="link-list-opt no-bdr">
                        <li>
                          {allrole.map((datarole) => (
                            <a key={datarole.id} href="#" onClick={(e) => handleClick(e, datarole.id)}>
                              <span>{datarole.name}</span>
                            </a>
                          ))}
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="spinner-grow spinner-grow-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow spinner-grow-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow spinner-grow-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </>
                )}
              </li>
              {loading ? (
                <li className="dropdown user-dropdown">
                  <a href="#" className="dropdown-toggle me-n1" data-bs-toggle="dropdown">
                    <div className="user-toggle">
                      <div className="user-avatar sm">
                        <em className="icon ni ni-user-alt"></em>
                      </div>
                      <div className="user-info d-none d-xl-block">
                        <div className="user-status user-status-unverified">Unverified</div>
                        <div className="user-name dropdown-indicator">{user.name}</div>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-md dropdown-menu-end">
                    <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                      <div className="user-card">
                        <div className="user-avatar">
                          <span>AB</span>
                        </div>
                        <div className="user-info">
                          <span className="lead-text">{user.name}</span>
                          <span className="sub-text">{user.email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-inner">
                      <ul className="link-list">
                        <li>
                          <a href="html/user-profile-regular.html">
                            <em className="icon ni ni-user-alt"></em>
                            <span>View Profile</span>
                          </a>
                        </li>
                        <li>
                          <a href="html/user-profile-setting.html">
                            <em className="icon ni ni-setting-alt"></em>
                            <span>Account Setting</span>
                          </a>
                        </li>
                        <li>
                          <a href="html/user-profile-activity.html">
                            <em className="icon ni ni-activity-alt"></em>
                            <span>Login Activity</span>
                          </a>
                        </li>
                        <li>
                          <a className="dark-switch" href="#">
                            <em className="icon ni ni-moon"></em>
                            <span>Dark Mode</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-inner">
                      <ul className="link-list">
                        <li>
                          <a href="#" onClick={(e) => LogoutClick(e)}>
                            <em className="icon ni ni-signout"></em>
                            <span>Sign out</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ) : (
                <>
                  <li className="preview-item">
                    <div className="spinner-grow spinner-grow-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow spinner-grow-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow spinner-grow-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        {/* <!-- .nk-header-wrap --> */}
      </div>
      {/* <!-- .container-fliud --> */}
    </div>
  );
}

function ChangeTextRoleHeader({ role }) {
  if (role == 0) {
    return <>Role</>;
  } else if (role == 1) {
    return <>Super Admin</>;
  } else if (role == 2) {
    return <>Admin</>;
  } else if (role == 3) {
    return <>Anggota</>;
  }
}
