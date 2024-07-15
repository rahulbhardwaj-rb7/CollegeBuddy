import { useEffect, useState } from "react";
import "./searchBar.css";
import { CiSearch } from "react-icons/ci";
import { useLocation } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";

type InputProps = {
  searchParams: any;
  setSearchParams: (searchParams: any) => void;
  onBasicSearch: () => void;
  onAdvanceSearch: (fields: any) => void;
};

type LocationState = {
  variableValue?: string;
};

const SearchBar = ({
  searchParams,
  setSearchParams,
  onBasicSearch,
  onAdvanceSearch
}: InputProps) => {
  const location = useLocation();
  const state = location.state as LocationState;
  const variableValue = state?.variableValue || "";
  const [advanceSearch, setAdvanceSearch] = useState<boolean>(
    sessionStorage.getItem("advanceSearch") === "true"
  );
  const [advanceFields, setAdvanceFields] = useState(1);
  const [region, setRegion] = useState(sessionStorage.getItem('selected_region'));
  const count = Math.max(1, advanceFields);

  const initialFields = Array.from({ length: 6 }).map(() => ({
    selectedOption: "allFields",
    inputValue: "",
  }));

  const [fields, setFields] = useState(initialFields);
  const usDropdownOptions = [
    { value: "allFields", label: "All Fields" },
    { value: "brandName", label: "Brand Name" },
    { value: "activeIngredient", label: "Active Ingredient" },
    { value: "ndaNumber", label: "NDA" },
    { value: "therapeuticClass", label: "Therapeutic Class" },
    { value: "patentNumber", label: "Patent Number" },
    { value: "caseNumber", label: "Case Number" }
  ];

  const epDropdownOptions = [
    { value: "allFields", label: "All Fields" },
    { value: "brandName", label: "Brand Name" },
    { value: "activeIngredient", label: "Active Ingredient" },
    { value: "apn", label: "APN" },
    { value: "therapeuticClass", label: "Therapeutic Class" },
    { value: "patentNumber", label: "Patent Number" }
  ];
  

  const handleSelectChange = (index: number, event: any) => {
    const newFields = [...fields];
    newFields[index].selectedOption = event.target.value;
    setFields(newFields);
  };

  const handleInputChange = (index: number, event: any) => {
    const newFields = [...fields];
    newFields[index].inputValue = event.target.value;
    setFields(newFields);
  };

  const handleAddField = () => {
    if (advanceFields < 6) {
      setAdvanceFields(advanceFields + 1);
      setFields([...fields, { selectedOption: '', inputValue: '' }]);
    }
  };

  const handleRemoveField = (index: number) => {
    if (advanceFields > 1) {
      setAdvanceFields(advanceFields - 1);
      const newFields = fields.filter((_, fieldIndex) => fieldIndex !== index);
      setFields(newFields);
    }
  };

  const handleRegionChange = (e: any) => {
    setRegion(e.target.value);
    sessionStorage.setItem('selected_region', e.target.value);
  };

  const regions = sessionStorage.getItem("regions");
  const regionsArray = regions?.split(",");

  const toggleSearch = () => {
      setAdvanceSearch(!advanceSearch);
      sessionStorage.setItem("advanceSearch", "false");
  };

  const handleSearchValue = (e: any) => {
    const value = e.target.value;
    setSearchParams((prevParams: any) => ({
      ...prevParams,
      basicSearch: value,
    }));
    console.log(searchParams);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (region !== null && region !== "") {
      sessionStorage.setItem("selected_region", region);
      onBasicSearch();
    } else {
      const msg = "Please select region";
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
    }
  };

  const handleApplyButtonClick = async (e: any) => {
    e.preventDefault();
    if (region !== null && region !== "") {
        sessionStorage.setItem("selected_region", region);
      setAdvanceSearch(!advanceSearch);
      onAdvanceSearch(fields);
    } else {
      const msg = "Please select region";
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
    }
  };

  return (
    <div className="search-bar d-flex flex-column">
      <ToastContainer></ToastContainer>
      <div className="search-with-advanced">
        <div className="search-box">
          <div className="select-region">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.683 11.8821C12.7335 11.5663 11.7126 11.3303 10.6381 11.1775C10.7844 10.3183 10.8622 9.41782 10.887 8.49606H14.8562C14.7674 9.74606 14.3474 10.9028 13.683 11.8821ZM9.63603 14.7232C9.96625 13.9254 10.2365 13.0632 10.4442 12.1548C11.3357 12.2867 12.1906 12.4816 13.0003 12.7374C12.1058 13.6909 10.9445 14.3925 9.63603 14.7232ZM8.41478 14.9176C8.25513 14.929 8.09597 14.9419 7.93333 14.9419C7.7707 14.9419 7.61204 14.929 7.45188 14.9176C7.02993 14.039 6.6883 13.0612 6.43542 12.0234C6.92828 11.9803 7.42758 11.955 7.93333 11.955C8.43908 11.955 8.93839 11.9803 9.43174 12.0234C9.17837 13.0612 8.83674 14.039 8.41478 14.9176ZM2.86642 12.7374C3.67611 12.4816 4.53093 12.2867 5.42244 12.1548C5.63019 13.0632 5.90041 13.9254 6.23064 14.7232C4.92213 14.3925 3.76139 13.6909 2.86642 12.7374ZM2.18365 11.8821C1.51924 10.9028 1.09926 9.74606 1.01051 8.49606H4.97965C5.00445 9.41782 5.08229 10.3183 5.22856 11.1775C4.15409 11.3303 3.13317 11.5663 2.18365 11.8821ZM2.18365 4.11836C3.13317 4.4342 4.15409 4.6707 5.22856 4.82292C5.08229 5.6822 5.00445 6.58264 4.97965 7.50439H1.01051C1.09926 6.2544 1.51924 5.09763 2.18365 4.11836ZM6.23064 1.27721C5.90041 2.07501 5.63019 2.93726 5.42244 3.84563C4.53093 3.71423 3.67611 3.51888 2.86642 3.26303C3.76139 2.30954 4.92213 1.60793 6.23064 1.27721ZM7.45188 1.08286C7.61204 1.07195 7.7707 1.05856 7.93333 1.05856C8.09597 1.05856 8.25513 1.07195 8.41478 1.08286C8.83674 1.96148 9.17837 2.93975 9.43174 3.97703C8.93839 4.02017 8.43908 4.04545 7.93333 4.04545C7.42758 4.04545 6.92828 4.02017 6.43542 3.97703C6.6883 2.93975 7.02993 1.96148 7.45188 1.08286ZM9.89386 8.49606C9.86708 9.36922 9.78775 10.228 9.6385 11.0526C9.08019 11.004 8.51247 10.9752 7.93333 10.9752C7.3542 10.9752 6.78647 11.004 6.22866 11.0526C6.07892 10.228 5.99958 9.36922 5.9733 8.49606H9.89386ZM5.9733 7.50439C5.99958 6.63123 6.07892 5.77245 6.22866 4.94788C6.78647 4.99647 7.3542 5.02523 7.93333 5.02523C8.51247 5.02523 9.0802 4.99647 9.63801 4.94788C9.78775 5.77245 9.86708 6.63123 9.89386 7.50439H5.9733ZM13.0003 3.26303C12.1906 3.51888 11.3357 3.71423 10.4442 3.84563C10.2365 2.93726 9.96625 2.07501 9.63603 1.27721C10.9445 1.60793 12.1058 2.30954 13.0003 3.26303ZM13.683 4.11836C14.3474 5.09763 14.7674 6.2544 14.8562 7.50439H10.887C10.8622 6.58264 10.7844 5.6822 10.6381 4.82292C11.7126 4.6707 12.7335 4.4342 13.683 4.11836ZM7.93333 0.0668945C3.55215 0.0668945 0 3.61855 0 8.00023C0 12.3819 3.55215 15.9336 7.93333 15.9336C12.3145 15.9336 15.8667 12.3819 15.8667 8.00023C15.8667 3.61855 12.3145 0.0668945 7.93333 0.0668945Z"
                fill="#9E028F"
              />
            </svg>
            {/* <BsGlobe2 className="globe_logo"></BsGlobe2> */}
            <select className="div-wrapper" onChange={handleRegionChange}>
              {regionsArray?.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="search-area">
            <CiSearch className="magnifying-glass"></CiSearch>
            <input
              type="text"
              className="input"
              placeholder="Search by keyword or patent field"
              onChange={handleSearchValue}
            />
          </div>
          <button
            className="search"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button className="btn-learn-more" onClick={toggleSearch}>
          Advanced Search
        </button>
      </div>

      {advanceSearch && (
        <>
          <div className="search_container">
            <div className="advanced-search-form">
            {Array.from({ length: advanceFields }).map((_, index) => (
                <div className="search-fileds" style={{ paddingTop: "10px" }}>
                  <div className="field">
                    <div className="search-box-2">
                      <div className="select-field">
                        <div className="all-fields">
                          <div className="menu-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1_2961)">
                                <path
                                  d="M14.5791 0.672852H11.9679C11.0064 0.672852 10.2271 1.45223 10.2271 2.41365V5.02485C10.2271 5.98627 11.0064 6.76564 11.9679 6.76564H14.5791C15.5405 6.76564 16.3199 5.98627 16.3199 5.02485V2.41365C16.3199 1.45223 15.5405 0.672852 14.5791 0.672852Z"
                                  stroke="#242259"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.00483 0.672852H2.39363C1.43221 0.672852 0.652832 1.45223 0.652832 2.41365V5.02485C0.652832 5.98627 1.43221 6.76564 2.39363 6.76564H5.00483C5.96625 6.76564 6.74563 5.98627 6.74563 5.02485V2.41365C6.74563 1.45223 5.96625 0.672852 5.00483 0.672852Z"
                                  stroke="#242259"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M14.5791 10.2476H11.9679C11.0064 10.2476 10.2271 11.0269 10.2271 11.9884V14.5996C10.2271 15.561 11.0064 16.3404 11.9679 16.3404H14.5791C15.5405 16.3404 16.3199 15.561 16.3199 14.5996V11.9884C16.3199 11.0269 15.5405 10.2476 14.5791 10.2476Z"
                                  stroke="#242259"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.00483 10.2476H2.39363C1.43221 10.2476 0.652832 11.0269 0.652832 11.9884V14.5996C0.652832 15.561 1.43221 16.3404 2.39363 16.3404H5.00483C5.96625 16.3404 6.74563 15.561 6.74563 14.5996V11.9884C6.74563 11.0269 5.96625 10.2476 5.00483 10.2476Z"
                                  stroke="#242259"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_2961">
                                  <rect width="17" height="17" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          {/* <select className="region-select">
                          <option>All Fields</option>
                        </select> */}
                          <div className="all-fields-2" key={index}>
                            <select className="custom-select"
                            value={fields[index].selectedOption}
                            onChange={(event) => handleSelectChange(index, event)}>
                              {region === "USA" ? usDropdownOptions.map((option) => (
    <option key={option.value} value={option.value}>{option.label}</option>
  )) : epDropdownOptions.map((option) => (
    <option key={option.value} value={option.value}>{option.label}</option>
  ))}
                            </select>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="19"
                              viewBox="0 0 13 19"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1_2968)">
                                <path
                                  d="M6.7333 17.0994L11.7316 12.1012L11.7316 12.1012C11.9836 11.8492 12.3923 11.8492 12.6444 12.1013C12.7704 12.2273 12.8334 12.3926 12.8334 12.5576C12.8334 12.7227 12.7704 12.8881 12.6443 13.0141L7.18966 18.4686C7.18965 18.4686 7.18965 18.4686 7.18964 18.4686C7.06859 18.5897 6.90443 18.6576 6.73326 18.6576C6.5621 18.6576 6.39789 18.5897 6.27684 18.4686C6.27684 18.4686 6.27683 18.4686 6.27683 18.4686L0.822453 13.014C0.57037 12.762 0.570379 12.3533 0.822489 12.1012C1.07456 11.8492 1.48322 11.8492 1.73529 12.1013L1.73529 12.1013L6.7333 17.0994Z"
                                  fill="#242259"
                                  stroke="#242259"
                                  stroke-width="0.2"
                                />
                                <path
                                  d="M6.7333 2.47044L11.7316 7.4686L11.7316 7.4686C11.9836 7.72063 12.3923 7.72063 12.6444 7.46856C12.7704 7.34257 12.8334 7.1772 12.8334 7.01218C12.8334 6.84715 12.7704 6.68177 12.6443 6.55575L7.18966 1.10127C7.18965 1.10126 7.18965 1.10126 7.18964 1.10125C7.06859 0.980167 6.90443 0.912183 6.73326 0.912183C6.5621 0.912183 6.39789 0.980164 6.27684 1.10125C6.27684 1.10126 6.27683 1.10126 6.27683 1.10127L0.822453 6.55579C0.57037 6.80783 0.570379 7.21653 0.822489 7.4686C1.07456 7.72063 1.48322 7.72063 1.73529 7.46856L1.73529 7.46856L6.7333 2.47044Z"
                                  fill="#242259"
                                  stroke="#242259"
                                  stroke-width="0.2"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_2968">
                                  <rect
                                    width="19"
                                    height="13"
                                    fill="white"
                                    transform="matrix(0 1 1 0 0 0)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="search-by-keyword-wrapper">
                        <input
                          type="text"
                          className="search-by-keyword-2"
                          placeholder="e.g. malaria"
                          value={fields[index].inputValue}
                          onChange={(event) => handleInputChange(index, event)}
                        />
                      </div>
                      <div className="search-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="18"
                          viewBox="0 0 17 18"
                          fill="none"
                        >
                          <g opacity="0.7" clip-path="url(#clip0_1_2975)">
                            <path
                              d="M15.7423 15.3056L11.9108 11.4741C12.8606 10.3162 13.433 8.83304 13.433 7.21652C13.433 3.50861 10.4244 0.5 6.71652 0.5C3.00536 0.5 0 3.50861 0 7.21652C0 10.9244 3.00536 13.933 6.71652 13.933C8.33304 13.933 9.81295 13.3638 10.9709 12.4141L14.8024 16.2423C15.0626 16.5026 15.4821 16.5026 15.7423 16.2423C16.0026 15.9854 16.0026 15.5626 15.7423 15.3056ZM6.71652 12.5962C3.74694 12.5962 1.33355 10.1828 1.33355 7.21652C1.33355 4.25019 3.74694 1.83355 6.71652 1.83355C9.68284 1.83355 12.0995 4.25019 12.0995 7.21652C12.0995 10.1828 9.68284 12.5962 6.71652 12.5962Z"
                              fill="#242259"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_2975">
                              <rect
                                width="17"
                                height="17"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div
                      className="add-field"
                      onClick={handleAddField}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_2925)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.08333 15.5833C7.08333 16.3658 7.71758 17 8.5 17C9.28242 17 9.91667 16.3658 9.91667 15.5833V9.91667H15.5833C16.3658 9.91667 17 9.28242 17 8.5C17 7.71758 16.3658 7.08333 15.5833 7.08333H9.91667V1.41667C9.91667 0.634256 9.28242 0 8.5 0C7.71758 0 7.08333 0.634256 7.08333 1.41667V7.08333H1.41667C0.63427 7.08333 0 7.71758 0 8.5C0 9.28242 0.63427 9.91667 1.41667 9.91667H7.08333V15.5833Z"
                            fill="#9E028F"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_2925">
                            <rect width="17" height="17" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className="delete-field"
                      onClick={() => handleRemoveField(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="4"
                        viewBox="0 0 18 4"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_2928)">
                          <path
                            d="M2.26172 2.26172H16.0236"
                            stroke="#242259"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_2928">
                            <rect width="18" height="4" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
              <div className="cancel-or-apply">
                <div className="cancel">
                  <div className="text-wrapper-4" onClick={toggleSearch}>
                    Cancel
                  </div>
                </div>
                <button className="btn-apply" onClick={handleApplyButtonClick}>
                  <div className="text-wrapper-5">Apply</div>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBar;
