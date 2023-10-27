"use client";

import Footer from "@/components/dashboard/footer";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import { useEffect, useState } from "react";

export default function MainLayoutDashboard({ children }) {
  const [role, setRole] = useState(1);
  useEffect(() => {
    console.log("role:", role);
  }, [role]);
  return (
    <>
      <div className="nk-app-root">
        {/* <!-- main @s --> */}
        <div className="nk-main ">
          {/* <!-- sidebar @s --> */}
          <Sidebar />
          {/* <!-- sidebar @e --> */}
          {/* <!-- wrap @s --> */}
          <div className="nk-wrap ">
            {/* <!-- main header @s --> */}
            <Header onSelect={(r) => setRole(r)} />
            {/* <!-- main header @e --> */}
            {/* <!-- content @s --> */}
            {children}
            {/* <!-- content @e --> */}
            {/* <!-- footer @s --> */}
            <Footer />
            {/* <!-- footer @e --> */}
          </div>
          {/* <!-- wrap @e --> */}
        </div>
        {/* <!-- main @e --> */}
      </div>
      {/* <!-- app-root @e --> */}
      {/* <!-- select region modal --> */}
      <div className="modal fade" tabIndex="-1" role="dialog" id="region">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <a href="#" className="close" data-bs-dismiss="modal">
              <em className="icon ni ni-cross-sm"></em>
            </a>
            <div className="modal-body modal-body-md">
              <h5 className="title mb-4">Select Your Country</h5>
              <div className="nk-country-region">
                <ul className="country-list text-center gy-2">
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/arg.png" alt="" className="country-flag" />
                      <span className="country-name">Argentina</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/aus.png" alt="" className="country-flag" />
                      <span className="country-name">Australia</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/bangladesh.png" alt="" className="country-flag" />
                      <span className="country-name">Bangladesh</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/canada.png" alt="" className="country-flag" />
                      <span className="country-name">
                        Canada <small>(English)</small>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/china.png" alt="" className="country-flag" />
                      <span className="country-name">Centrafricaine</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/china.png" alt="" className="country-flag" />
                      <span className="country-name">China</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/french.png" alt="" className="country-flag" />
                      <span className="country-name">France</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/germany.png" alt="" className="country-flag" />
                      <span className="country-name">Germany</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/iran.png" alt="" className="country-flag" />
                      <span className="country-name">Iran</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/italy.png" alt="" className="country-flag" />
                      <span className="country-name">Italy</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/mexico.png" alt="" className="country-flag" />
                      <span className="country-name">México</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/philipine.png" alt="" className="country-flag" />
                      <span className="country-name">Philippines</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/portugal.png" alt="" className="country-flag" />
                      <span className="country-name">Portugal</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/s-africa.png" alt="" className="country-flag" />
                      <span className="country-name">South Africa</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/spanish.png" alt="" className="country-flag" />
                      <span className="country-name">Spain</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/switzerland.png" alt="" className="country-flag" />
                      <span className="country-name">Switzerland</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/uk.png" alt="" className="country-flag" />
                      <span className="country-name">United Kingdom</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img src="./images/flags/english.png" alt="" className="country-flag" />
                      <span className="country-name">United State</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- .modal-content --> */}
        </div>
        {/* <!-- .modla-dialog --> */}
      </div>
      {/* <!-- .modal --> */}
      {/* </div> */}
    </>
  );
}
