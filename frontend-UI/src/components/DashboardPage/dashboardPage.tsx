import React, { useEffect, useState } from "react";
import "./dashboardPage.css";
import SearchBar from "../../layouts/SearchBar/searchBar";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";

type OutletContextType = {
  toggleSearchBar: (show: boolean) => void;
  showSearchBar: boolean;
};

const DashboardPage = () => {
  const [showSearchDetails, setShowSearchDetails] = useState(false);
  const { toggleSearchBar } = useOutletContext<OutletContextType>();
  const [searchParams, setSearchParams] = useState({
    basicSearch: ""
  });
  const [advanceSearchParams, setAdvanceSearchParams] = useState([]);
  const [result, setResult] = useState([]);
  const [resultHeading, setResultHeading] = useState("");
  const [resultSubHeading, setResultSubHeading] = useState("No Data Found");

  useEffect(() => {
    toggleSearchBar(false);
  });

  const navigate = useNavigate();

  const navigateToDetails = (ndaNumber: any, brandName: any) => {
    console.log("index", ndaNumber);

    toggleSearchBar(true);
    sessionStorage.setItem("ndaNumber", ndaNumber);
    sessionStorage.setItem("brandName", brandName);
    const region = sessionStorage.getItem("selected_region");
    if (region === "USA") {
      navigate("/inphamed/usa-search-result");
    } else {
      navigate("/inphamed/search-result");
    }
  };

  const handleBasicSearch = async () => {
    console.log("i m here", searchParams);
    setResultSubHeading("No Data Found");

    try {
      const value = searchParams.basicSearch;
      if(value === "" || value === null || value.length < 3) {
        sessionStorage.removeItem("result");
        setResult([]);
        const msg = "Please enter a search value of at least 3 characters.";
        toast.error(msg, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
          return;
      }
      console.log(value);

      const region = sessionStorage.getItem("selected_region");
      const url =
        region === "USA"
          ? `${process.env.URL}usBasicSearch`
          : `${process.env.URL}epBasicSearch`;
      console.log(url);

      const response = await axios.post(url, {
        simpleSearch: value,
      });
      if (response.status === 200 && response.data.result.length > 0) {
        const data = response.data.result;
        setResult(data);
        setShowSearchDetails(true);
        setResultHeading(value);
        if(data.length > 0) {
          setResultSubHeading(value);
        }
      } else {
        setResult([]);
      }
    } catch (error: any) {
      setResult([]);
      const msg = error.response.data.message;
        if(msg === 'No value found') return;
        toast.error(msg, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
    } finally {
    }
  };

  const handleAdvanceSearch = async (fields: any) => {
    try {
      const value = searchParams.basicSearch;
       // Check for duplicate keys
    const seenKeys: Set<string> = new Set();
    let hasError = false;
    let errorMessage = "";

    const filteredFields = fields.filter((field: any) => {
      return !(field.selectedOption === "allFields" && field.inputValue.trim() === "");
    });

    console.log(filteredFields);
    

    filteredFields.forEach((field: any) => {
      if (seenKeys.has(field.selectedOption) && field.selectedOption !== "allFields") {
        // Duplicate key found, show toaster error
        hasError = true;
        errorMessage = "Please select different search categories";
        return;
      }
      seenKeys.add(field.selectedOption);

      if (field.selectedOption === "allFields" && field.inputValue.trim() !== "") {
        // "All Fields" with non-empty value found, show toaster error
        hasError = true;
        errorMessage = "please select a category for input value";
        return;
      }
    });

    if(hasError) {
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    } else {

      const body: Record<string, string> = {};
      
      filteredFields.forEach((field: any) => {
        if (field.selectedOption !== "allFields") {
          body[field.selectedOption] = field.inputValue;
        }
      });

      const values = Object.values(body).filter(value => value);  // Filter out empty strings or falsy values
const commaSeparatedValues = values.join(',');

      console.log("Body for API request:", body);

      const region = sessionStorage.getItem("selected_region");
      const url =
        region === "USA"
          ? `${process.env.URL}usAdvanceSearch`
          : `${process.env.URL}epAdvanceSearch`;
      console.log(url);

      const response = await axios.post(url, body);
      console.log(response);
      if (response.status === 200) {
        const data = response.data.result;
        setResult(data);
        setShowSearchDetails(true);
        setResultHeading(commaSeparatedValues);
        if(data.length > 0) {
          setResultSubHeading(commaSeparatedValues);
        } else {
          setResultSubHeading("No data found")
          setResult([]);
        }
      }
      
    }
      
    } catch (error: any) {

    } finally {

    }
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="custome_bg align-items-center"></div>
      <div className="search-bar-bg d-flex align-items-center justify-content-center">
        <div>
          <SearchBar
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            onBasicSearch={handleBasicSearch}
            onAdvanceSearch={handleAdvanceSearch}
          />
        </div>
      </div>
      {/* ------------------------------------------------------------ */}
      {(showSearchDetails) && (
        <div className="search-result">
          <div className="heading">
            <b className="search-results-for">
              Search result for "{resultHeading}"
            </b>
          </div>
          <div className="search-result2">
            <div className="custom_table-head">
              <b className="paracetamol">{resultSubHeading}</b>
            </div>
            <div className="table-content">
              {result?.map((row: any, _index: any) => (
                <div className="content" key={_index} onClick={() => sessionStorage.getItem("selected_region") === "USA" ? navigateToDetails(row.ndaNumber, row.brandName) : navigateToDetails(row.agencyProductNumber, row.brandName)}>
                  <div className="row-11">
                    <div className="ibrance2">{row.brandName}</div>
                    <div className="row-1-child"></div>
                    <div className="ibrance2">{row.company}</div>
                    <div className="row-1-child"></div>
                    <div className="ibrance2">{row.activeIngredient}</div>
                    <div className="row-1-child"></div>
                    <div className="ibrance2">{row.therapeuticClass}</div>
                    <div className="row-1-child"></div>
                    <div className="tablet">{row.dosageForm}</div>
                    <div className="row-1-child"></div>
                    <div className="tablet">{row.dateOfApproval}</div>
                    <div className="row-1-child"></div>
                    <div className="tablet">{sessionStorage.getItem("selected_region") === "USA" ? row.ndaNumber : row.agencyProductNumber}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* --------------------------------------------------------------------------- */}
      <div className="link-list">
        <div className="custom_div">
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="logo_container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="40"
                    viewBox="0 0 45 40"
                    fill="none"
                  >
                    <path
                      d="M0 30.371C0 35.4444 4.10699 39.5859 9.21484 39.5859H10.1467C15.22 39.5859 19.3615 35.4789 19.3615 30.371V20.2243H0V30.371ZM1.82916 22.088H17.4633V30.371C17.4633 34.4435 14.1501 37.7222 10.1122 37.7222H9.18033C5.10785 37.7222 1.82916 34.409 1.82916 30.371V22.088ZM43.5203 26.3676L26.195 33.4081C27.7481 36.5142 30.8887 38.6195 34.5125 38.6195C39.6894 38.6195 43.8654 34.3054 43.8654 28.956C43.8654 28.0932 43.7619 27.1959 43.5203 26.3676ZM34.5125 19.327C29.3356 19.327 25.1596 23.6411 25.1596 28.9905C25.1596 29.8878 25.2977 30.7507 25.5047 31.579L42.83 24.5384C41.2424 21.4323 38.1363 19.327 34.5125 19.327ZM10.1122 0H9.18033C4.10699 0 0 4.10699 0 9.18033V19.2925H19.327V9.18033C19.327 4.10699 15.22 0 10.1122 0Z"
                      fill="#242259"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <svg
              className="custome_svg"
              xmlns="http://www.w3.0rg/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#DA22FF" />
                  <stop offset="100%" stop-color="#9733EE" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" stroke-linecap="round" style={{
    strokeDashoffset: `200px`}} />
            </svg>
          </div>
          <div className="content">
            <div className="text-wrapper">1000+</div>
            <div className="text-wrapper-2">Drugs</div>
          </div>
        </div>
        <div className="custom_div">
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="logo_container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="40"
                    viewBox="0 0 36 40"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.0641 18.9982C26.957 24.3138 22.2461 28.3076 16.6016 28.3076C10.957 28.3076 6.24609 24.3138 5.13906 18.9982H10.6891C10.9516 20.1162 11.5227 21.1146 12.307 21.899C13.4055 22.9982 14.9242 23.6787 16.6023 23.6787C18.1406 23.6787 19.5523 23.0966 20.6297 22.138C20.7219 22.0646 20.8109 21.9849 20.8969 21.899C21.6813 21.1146 22.2523 20.1162 22.5148 18.9982H28.0641ZM5.62891 35.2896H14.5914V33.0771C10.8109 32.6208 7.42109 30.8943 4.86328 28.3357C1.85781 25.331 0 21.1802 0 16.5958C0 12.0122 1.85781 7.86225 4.86328 4.85756C5.89609 3.82475 7.05625 2.8849 8.32656 2.131C13.1617 -0.738533 20.2438 -0.713533 25.0422 2.22709C26.2484 2.96615 27.3531 3.86928 28.3406 4.85756C31.3453 7.86225 33.2031 12.0122 33.2031 16.5966C33.2031 21.1802 31.3453 25.331 28.3406 28.3357C25.782 30.8943 22.3922 32.6208 18.6109 33.0771V35.2896H27.5734C29.1219 35.2896 30.3875 36.5607 30.3875 38.1037V39.9583H2.81484V38.1037C2.81484 36.5552 4.08125 35.2896 5.62891 35.2896ZM16.6016 2.52319C24.3758 2.52319 30.6773 8.82475 30.6773 16.599C30.6773 24.3724 24.3758 30.6747 16.6016 30.6747C8.82734 30.6747 2.52578 24.3724 2.52578 16.599C2.52578 8.82475 8.82734 2.52319 16.6016 2.52319ZM9.89922 6.96459C9.66797 6.56459 9.80391 6.05287 10.2031 5.82084C10.6031 5.58959 11.1148 5.72631 11.3461 6.12553L12.3922 7.93647C12.6234 8.33569 12.4875 8.84819 12.0875 9.07944C11.6883 9.31069 11.1758 9.17475 10.9445 8.77553L9.89922 6.96459ZM6.00312 11.6724C5.60391 11.4435 5.46563 10.9326 5.69531 10.5326C5.92422 10.1333 6.43516 9.99584 6.83438 10.2247L8.64531 11.2701C9.04453 11.499 9.18281 12.0099 8.95312 12.4099C8.72422 12.8091 8.21328 12.9466 7.81406 12.7177L6.00312 11.6724ZM26.3687 9.75287C26.768 9.52397 27.2789 9.66147 27.5078 10.0607C27.7375 10.4607 27.5992 10.9716 27.2 11.2005L25.3891 12.2458C24.9898 12.4747 24.4789 12.3372 24.25 11.938C24.0203 11.538 24.1586 11.0271 24.5578 10.7982L26.3687 9.75287ZM21.657 5.85678C21.8859 5.45756 22.3969 5.32006 22.7961 5.54897C23.1961 5.77787 23.3336 6.28881 23.1047 6.68881L22.0594 8.49897C21.8297 8.89819 21.3195 9.03647 20.9195 8.80678C20.5203 8.57787 20.3828 8.06694 20.6117 7.66772L21.657 5.85678ZM15.6273 4.83334C15.6273 4.37084 16.0023 3.99506 16.4648 3.99506C16.9281 3.99506 17.3031 4.37084 17.3031 4.83334V6.92475C17.3031 7.38725 16.9281 7.76303 16.4648 7.76303C16.0023 7.76303 15.6273 7.38725 15.6273 6.92475V4.83334ZM17.9359 15.124C18.8172 15.599 19.4172 16.5318 19.4172 17.6044C19.4172 19.1591 18.157 20.4193 16.6023 20.4193C15.0477 20.4193 13.7867 19.1591 13.7867 17.6044C13.7867 16.5318 14.3867 15.599 15.2695 15.124V10.7044L16.6023 9.37162L17.9359 10.7044V15.124Z"
                      fill="#242259"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <svg
              className="custome_svg"
              xmlns="http://www.w3.0rg/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#DA22FF" />
                  <stop offset="100%" stop-color="#9733EE" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" stroke-linecap="round" style={{
    strokeDashoffset: `200px`}} />
            </svg>
          </div>
          <div className="content">
            <div className="text-wrapper">200+</div>
            <div className="text-wrapper-2">Therapeutic Area</div>
          </div>
        </div>
        <div className="custom_div">
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="logo_container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="40"
                    viewBox="0 0 38 40"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_3920)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.9849 14.8712C11.9849 12.0385 14.2812 9.74219 17.1139 9.74219H18.8236C19.1855 9.74236 19.5498 9.78621 19.9061 9.84561C20.4989 9.94441 21.3154 10.1452 22.1526 10.5638C22.9965 10.9858 23.8926 11.6456 24.5737 12.6673C25.262 13.6997 25.6623 14.9994 25.6623 16.5808C25.6623 18.1622 25.262 19.4619 24.5737 20.4943C23.8926 21.516 22.9967 22.1758 22.1526 22.5979C21.3154 23.0164 20.4989 23.2173 19.9061 23.3162C19.5519 23.3751 19.191 23.4174 18.8313 23.4196H15.4042V28.5486C15.4042 29.4929 14.6388 30.2583 13.6945 30.2583C12.7503 30.2583 11.9849 29.4929 11.9849 28.5486V14.8712ZM15.4042 14.8712V20.0002L18.8241 19.9999C19.4396 19.9794 20.0747 19.8139 20.6235 19.5395C21.0617 19.3203 21.4481 19.0185 21.7286 18.5976C22.002 18.1875 22.2429 17.564 22.2429 16.5808C22.2429 15.5978 22.002 14.9742 21.7286 14.564C21.4481 14.1432 21.0619 13.8413 20.6235 13.6222C20.0747 13.3478 19.4396 13.1824 18.8242 13.1618L17.1139 13.1615C16.1696 13.1615 15.4042 13.927 15.4042 14.8712Z"
                        fill="#242259"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.8235 38.8062C29.21 38.8062 37.63 30.3862 37.63 19.9998C37.63 9.61329 29.21 1.19336 18.8235 1.19336C8.43702 1.19336 0.0170898 9.61329 0.0170898 19.9998C0.0170898 30.3862 8.43702 38.8062 18.8235 38.8062ZM18.8235 35.3752C10.3319 35.3752 3.44812 28.4914 3.44812 19.9998C3.44812 11.5082 10.3319 4.62439 18.8235 4.62439C27.3151 4.62439 34.199 11.5082 34.199 19.9998C34.199 28.4914 27.3151 35.3752 18.8235 35.3752Z"
                        fill="#242259"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_3920">
                        <rect width="37.6471" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <svg
              className="custome_svg"
              xmlns="http://www.w3.0rg/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#DA22FF" />
                  <stop offset="100%" stop-color="#9733EE" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" stroke-linecap="round" style={{
    strokeDashoffset: `200px`}} />
            </svg>
          </div>
          <div className="content">
            <div className="text-wrapper">5000+</div>
            <div className="text-wrapper-2">Patents</div>
          </div>
        </div>
        <div className="custom_div">
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="logo_container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="40"
                    viewBox="0 0 38 40"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_3930)">
                      <path
                        d="M14.5521 1.20654H2.59255C1.14032 1.20654 0.0297852 2.31708 0.0297852 3.76931V37.9395C0.0297852 38.3667 0.456913 38.7938 0.884041 38.7938H4.30106C4.81362 38.7938 5.15532 38.4521 5.15532 37.9395V32.814C5.15532 32.3015 5.49702 31.9598 6.00958 31.9598H11.1351C11.6477 31.9598 11.9894 32.3015 11.9894 32.814V37.9395C11.9894 38.4521 12.3311 38.7938 12.8436 38.7938H15.4064C16.3461 38.7938 17.1149 38.025 17.1149 37.0853V3.76931C17.1149 2.31708 16.0044 1.20654 14.5521 1.20654ZM6.86383 28.1156C6.86383 28.3719 6.69298 28.5427 6.43671 28.5427H3.87394C3.61766 28.5427 3.44681 28.3719 3.44681 28.1156V23.8443C3.44681 23.588 3.61766 23.4172 3.87394 23.4172H6.43671C6.69298 23.4172 6.86383 23.588 6.86383 23.8443V28.1156ZM6.86383 19.573C6.86383 19.8293 6.69298 20.0002 6.43671 20.0002H3.87394C3.61766 20.0002 3.44681 19.8293 3.44681 19.573V15.3018C3.44681 15.0455 3.61766 14.8746 3.87394 14.8746H6.43671C6.69298 14.8746 6.86383 15.0455 6.86383 15.3018V19.573ZM6.86383 11.0305C6.86383 11.2868 6.69298 11.4576 6.43671 11.4576H3.87394C3.61766 11.4576 3.44681 11.2868 3.44681 11.0305V6.75921C3.44681 6.50293 3.61766 6.33208 3.87394 6.33208H6.43671C6.69298 6.33208 6.86383 6.50293 6.86383 6.75921V11.0305ZM13.6979 28.1156C13.6979 28.3719 13.527 28.5427 13.2708 28.5427H10.708C10.4517 28.5427 10.2809 28.3719 10.2809 28.1156V23.8443C10.2809 23.588 10.4517 23.4172 10.708 23.4172H13.2708C13.527 23.4172 13.6979 23.588 13.6979 23.8443V28.1156ZM13.6979 19.573C13.6979 19.8293 13.527 20.0002 13.2708 20.0002H10.708C10.4517 20.0002 10.2809 19.8293 10.2809 19.573V15.3018C10.2809 15.0455 10.4517 14.8746 10.708 14.8746H13.2708C13.527 14.8746 13.6979 15.0455 13.6979 15.3018V19.573ZM13.6979 11.0305C13.6979 11.2868 13.527 11.4576 13.2708 11.4576H10.708C10.4517 11.4576 10.2809 11.2868 10.2809 11.0305V6.75921C10.2809 6.50293 10.4517 6.33208 10.708 6.33208H13.2708C13.527 6.33208 13.6979 6.50293 13.6979 6.75921V11.0305Z"
                        fill="#242259"
                      />
                      <path
                        d="M35.0546 9.74902H23.095C21.6428 9.74902 20.5322 10.8596 20.5322 12.3118V37.9395C20.5322 38.3666 20.9594 38.7937 21.3865 38.7937H24.8035C25.3161 38.7937 25.6578 38.452 25.6578 37.9395V32.8139C25.6578 32.3014 25.9995 31.9597 26.512 31.9597H31.6376C32.1501 31.9597 32.4918 32.3014 32.4918 32.8139V37.9395C32.4918 38.452 32.8335 38.7937 33.3461 38.7937H35.9088C36.8485 38.7937 37.6173 38.0249 37.6173 37.0852V12.3118C37.6173 10.8596 36.5068 9.74902 35.0546 9.74902ZM27.3663 28.1155C27.3663 28.3718 27.1954 28.5427 26.9391 28.5427H24.3764C24.1201 28.5427 23.9493 28.3718 23.9493 28.1155V23.8442C23.9493 23.588 24.1201 23.4171 24.3764 23.4171H26.9391C27.1954 23.4171 27.3663 23.588 27.3663 23.8442V28.1155ZM27.3663 19.573C27.3663 19.8292 27.1954 20.0001 26.9391 20.0001H24.3764C24.1201 20.0001 23.9493 19.8292 23.9493 19.573V15.3017C23.9493 15.0454 24.1201 14.8746 24.3764 14.8746H26.9391C27.1954 14.8746 27.3663 15.0454 27.3663 15.3017V19.573ZM34.2003 28.1155C34.2003 28.3718 34.0295 28.5427 33.7732 28.5427H31.2104C30.9541 28.5427 30.7833 28.3718 30.7833 28.1155V23.8442C30.7833 23.588 30.9541 23.4171 31.2104 23.4171H33.7732C34.0295 23.4171 34.2003 23.588 34.2003 23.8442V28.1155ZM34.2003 19.573C34.2003 19.8292 34.0295 20.0001 33.7732 20.0001H31.2104C30.9541 20.0001 30.7833 19.8292 30.7833 19.573V15.3017C30.7833 15.0454 30.9541 14.8746 31.2104 14.8746H33.7732C34.0295 14.8746 34.2003 15.0454 34.2003 15.3017V19.573Z"
                        fill="#242259"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_3930">
                        <rect width="37.6471" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <svg
              className="custome_svg"
              xmlns="http://www.w3.0rg/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#DA22FF" />
                  <stop offset="100%" stop-color="#9733EE" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" stroke-linecap="round" style={{
    strokeDashoffset: `200px`}} />
            </svg>
          </div>
          <div className="content">
            <div className="text-wrapper">2000+</div>
            <div className="text-wrapper-2">API Manufacturer</div>
          </div>
        </div>
        <div className="custom_div">
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="logo_container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="40"
                    viewBox="0 0 35 40"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_3940)">
                      <path
                        d="M26.3581 11.8035C26.8593 11.8035 27.266 11.3967 27.266 10.8955V6.35572C27.266 4.85394 26.044 3.63185 24.5422 3.63185H23.0123C21.9899 1.48817 19.8072 0 17.2785 0H10.0149C7.48624 0 5.30357 1.48817 4.28118 3.63185H2.75121C1.24943 3.63185 0.0273438 4.85394 0.0273438 6.35572V37.2263C0.0273438 38.7281 1.24943 39.9501 2.75121 39.9501H24.5422C26.044 39.9501 27.266 38.7281 27.266 37.2263V32.6864C27.266 32.1852 26.8593 31.7785 26.3581 31.7785C25.8569 31.7785 25.4501 32.1852 25.4501 32.6864V37.2262C25.4501 37.7264 25.0424 38.1342 24.5421 38.1342H2.75121C2.25096 38.1342 1.84323 37.7265 1.84323 37.2262V6.35572C1.84323 5.85538 2.25096 5.44774 2.75121 5.44774H3.73181C3.68916 5.74558 3.6592 6.04699 3.6592 6.35572V8.17161C3.6592 8.6728 4.06599 9.07959 4.56718 9.07959H22.7263C23.2275 9.07959 23.6343 8.6728 23.6343 8.17161V6.35572C23.6343 6.04699 23.6043 5.74558 23.5617 5.44774H24.5422C25.0424 5.44774 25.4502 5.85538 25.4502 6.35572V10.8955C25.4502 11.3967 25.8569 11.8035 26.3581 11.8035ZM21.8183 7.26362H5.47508V6.35572C5.47508 3.85249 7.5116 1.81597 10.0148 1.81597H17.2785C19.7817 1.81597 21.8182 3.85249 21.8182 6.35572V7.26362H21.8183Z"
                        fill="#242259"
                      />
                      <path
                        d="M13.6468 5.44781C14.1482 5.44781 14.5547 5.04129 14.5547 4.53982C14.5547 4.03835 14.1482 3.63184 13.6468 3.63184C13.1453 3.63184 12.7388 4.03835 12.7388 4.53982C12.7388 5.04129 13.1453 5.44781 13.6468 5.44781Z"
                        fill="#242259"
                      />
                      <path
                        d="M20.9103 11.8032H6.38308C5.88189 11.8032 5.4751 12.21 5.4751 12.7112C5.4751 13.2124 5.88189 13.6191 6.38308 13.6191H20.9104C21.4116 13.6191 21.8184 13.2123 21.8184 12.7111C21.8184 12.2099 21.4115 11.8032 20.9103 11.8032Z"
                        fill="#242259"
                      />
                      <path
                        d="M16.3706 16.3433H6.38308C5.88189 16.3433 5.4751 16.7501 5.4751 17.2512C5.4751 17.7524 5.88189 18.1592 6.38308 18.1592H16.3706C16.8718 18.1592 17.2786 17.7524 17.2786 17.2512C17.2786 16.7501 16.8718 16.3433 16.3706 16.3433Z"
                        fill="#242259"
                      />
                      <path
                        d="M15.4626 20.8828H6.38308C5.88189 20.8828 5.4751 21.2896 5.4751 21.7908C5.4751 22.292 5.88189 22.6988 6.38308 22.6988H15.4627C15.9639 22.6988 16.3707 22.292 16.3707 21.7908C16.3706 21.2896 15.9638 20.8828 15.4626 20.8828Z"
                        fill="#242259"
                      />
                      <path
                        d="M20.9104 29.9624H13.6468C13.1456 29.9624 12.7388 30.3692 12.7388 30.8704C12.7388 31.3716 13.1456 31.7784 13.6468 31.7784H20.9104C21.4116 31.7784 21.8184 31.3716 21.8184 30.8704C21.8184 30.3692 21.4116 29.9624 20.9104 29.9624Z"
                        fill="#242259"
                      />
                      <path
                        d="M10.0149 29.9624H6.383C5.88189 29.9624 5.4751 30.3692 5.4751 30.8704C5.4751 31.3716 5.88189 31.7784 6.38308 31.7784H10.0149C10.5161 31.7784 10.9229 31.3716 10.9229 30.8704C10.9228 30.3692 10.516 29.9624 10.0149 29.9624Z"
                        fill="#242259"
                      />
                      <path
                        d="M16.3706 25.4229H6.38308C5.88189 25.4229 5.4751 25.8296 5.4751 26.3308C5.4751 26.832 5.88189 27.2387 6.38308 27.2387H16.3706C16.8718 27.2387 17.2786 26.8319 17.2786 26.3308C17.2786 25.8296 16.8718 25.4229 16.3706 25.4229Z"
                        fill="#242259"
                      />
                      <path
                        d="M26.3581 13.6191C21.8529 13.6191 18.1865 17.2855 18.1865 21.7907C18.1865 26.296 21.8529 29.9624 26.3581 29.9624C30.8634 29.9624 34.5297 26.296 34.5297 21.7907C34.5297 17.2855 30.8634 13.6191 26.3581 13.6191Z"
                        fill="#242259"
                      />
                      <path
                        d="M29.5493 18.2892C29.1189 18.0314 28.5615 18.1703 28.3035 18.6007L26.178 22.1435L24.2767 20.2422C23.9217 19.8872 23.3479 19.8872 22.9928 20.2422C22.6378 20.5973 22.6378 21.1711 22.9928 21.5261L25.7167 24.25C25.8865 24.4206 26.1181 24.5151 26.3578 24.5151C26.395 24.5151 26.4322 24.5133 26.4685 24.5087C26.7463 24.4743 26.9924 24.3144 27.1358 24.0747L29.8597 19.5349C30.1186 19.1045 29.9787 18.547 29.5493 18.2892Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_3940">
                        <rect width="34.5568" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <svg
              className="custome_svg"
              xmlns="http://www.w3.0rg/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#DA22FF" />
                  <stop offset="100%" stop-color="#9733EE" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" stroke-linecap="round" style={{
    strokeDashoffset: `200px`}} />
            </svg>
          </div>

          <div className="content">
            <div className="text-wrapper">1000+</div>
            <div className="text-wrapper-2">Clinical Trials</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
