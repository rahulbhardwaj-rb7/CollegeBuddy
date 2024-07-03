import "./header.css"
import logo from "../../../assets/images/inphamed logo.png"
import expert from "../../../assets/images/expert.svg"
import support from "../../../assets/images/notification.svg"
import help from "../../../assets/images/help.svg"
import { CiSearch } from "react-icons/ci"
import { useState } from "react"
import { Link } from "react-router-dom"

// Define the props interface
interface MainHeaderProps {
  displaySearch: boolean;
}

const MainHeader: React.FC<MainHeaderProps> = ({displaySearch}) => {

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [advanceSearch, setAdvanceSearch] = useState(false);

  const toggleSearch = () => {
    setAdvanceSearch(!advanceSearch);
  };
  return (
    <div className="header">
     <Link to="/inphamed">
      <img className="inphamed-logo-icon" alt="Inphamed Logo" src={logo} />
    </Link>

    {displaySearch && (
      <div className="header-search-with-advanced">
      <div className="header-search-box">
        <div className="header-select-region">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.683 11.8821C12.7335 11.5663 11.7126 11.3303 10.6381 11.1775C10.7844 10.3183 10.8622 9.41782 10.887 8.49606H14.8562C14.7674 9.74606 14.3474 10.9028 13.683 11.8821ZM9.63603 14.7232C9.96625 13.9254 10.2365 13.0632 10.4442 12.1548C11.3357 12.2867 12.1906 12.4816 13.0003 12.7374C12.1058 13.6909 10.9445 14.3925 9.63603 14.7232ZM8.41478 14.9176C8.25513 14.929 8.09597 14.9419 7.93333 14.9419C7.7707 14.9419 7.61204 14.929 7.45188 14.9176C7.02993 14.039 6.6883 13.0612 6.43542 12.0234C6.92828 11.9803 7.42758 11.955 7.93333 11.955C8.43908 11.955 8.93839 11.9803 9.43174 12.0234C9.17837 13.0612 8.83674 14.039 8.41478 14.9176ZM2.86642 12.7374C3.67611 12.4816 4.53093 12.2867 5.42244 12.1548C5.63019 13.0632 5.90041 13.9254 6.23064 14.7232C4.92213 14.3925 3.76139 13.6909 2.86642 12.7374ZM2.18365 11.8821C1.51924 10.9028 1.09926 9.74606 1.01051 8.49606H4.97965C5.00445 9.41782 5.08229 10.3183 5.22856 11.1775C4.15409 11.3303 3.13317 11.5663 2.18365 11.8821ZM2.18365 4.11836C3.13317 4.4342 4.15409 4.6707 5.22856 4.82292C5.08229 5.6822 5.00445 6.58264 4.97965 7.50439H1.01051C1.09926 6.2544 1.51924 5.09763 2.18365 4.11836ZM6.23064 1.27721C5.90041 2.07501 5.63019 2.93726 5.42244 3.84563C4.53093 3.71423 3.67611 3.51888 2.86642 3.26303C3.76139 2.30954 4.92213 1.60793 6.23064 1.27721ZM7.45188 1.08286C7.61204 1.07195 7.7707 1.05856 7.93333 1.05856C8.09597 1.05856 8.25513 1.07195 8.41478 1.08286C8.83674 1.96148 9.17837 2.93975 9.43174 3.97703C8.93839 4.02017 8.43908 4.04545 7.93333 4.04545C7.42758 4.04545 6.92828 4.02017 6.43542 3.97703C6.6883 2.93975 7.02993 1.96148 7.45188 1.08286ZM9.89386 8.49606C9.86708 9.36922 9.78775 10.228 9.6385 11.0526C9.08019 11.004 8.51247 10.9752 7.93333 10.9752C7.3542 10.9752 6.78647 11.004 6.22866 11.0526C6.07892 10.228 5.99958 9.36922 5.9733 8.49606H9.89386ZM5.9733 7.50439C5.99958 6.63123 6.07892 5.77245 6.22866 4.94788C6.78647 4.99647 7.3542 5.02523 7.93333 5.02523C8.51247 5.02523 9.0802 4.99647 9.63801 4.94788C9.78775 5.77245 9.86708 6.63123 9.89386 7.50439H5.9733ZM13.0003 3.26303C12.1906 3.51888 11.3357 3.71423 10.4442 3.84563C10.2365 2.93726 9.96625 2.07501 9.63603 1.27721C10.9445 1.60793 12.1058 2.30954 13.0003 3.26303ZM13.683 4.11836C14.3474 5.09763 14.7674 6.2544 14.8562 7.50439H10.887C10.8622 6.58264 10.7844 5.6822 10.6381 4.82292C11.7126 4.6707 12.7335 4.4342 13.683 4.11836ZM7.93333 0.0668945C3.55215 0.0668945 0 3.61855 0 8.00023C0 12.3819 3.55215 15.9336 7.93333 15.9336C12.3145 15.9336 15.8667 12.3819 15.8667 8.00023C15.8667 3.61855 12.3145 0.0668945 7.93333 0.0668945Z" fill="#9E028F" />
          </svg>
          <select className="header-div-wrapper" >
            <option>Select Region</option>
            <option>Europe</option>
            <option>USA</option>
          </select>
        </div>
        <div className="header-search-area">
          <CiSearch className="header-magnifying-glass"></CiSearch>
          <input
            type="text"
            className="input"
            placeholder="Search by keyword or patent field"
          />
        </div>
        <button className="header-search">
          Search
        </button>
      </div>
      <button className="header-learn-more" onClick={toggleSearch}>
        Advanced Search
      </button>
    </div>
    )}

      {/* <div className="search-with-advanced-search">
        <div className="search-box">
          <div className="select-region">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.683 11.8821C12.7335 11.5663 11.7126 11.3303 10.6381 11.1775C10.7844 10.3183 10.8622 9.41782 10.887 8.49606H14.8562C14.7674 9.74606 14.3474 10.9028 13.683 11.8821ZM9.63603 14.7232C9.96625 13.9254 10.2365 13.0632 10.4442 12.1548C11.3357 12.2867 12.1906 12.4816 13.0003 12.7374C12.1058 13.6909 10.9445 14.3925 9.63603 14.7232ZM8.41478 14.9176C8.25513 14.929 8.09597 14.9419 7.93333 14.9419C7.7707 14.9419 7.61204 14.929 7.45188 14.9176C7.02993 14.039 6.6883 13.0612 6.43542 12.0234C6.92828 11.9803 7.42758 11.955 7.93333 11.955C8.43908 11.955 8.93839 11.9803 9.43174 12.0234C9.17837 13.0612 8.83674 14.039 8.41478 14.9176ZM2.86642 12.7374C3.67611 12.4816 4.53093 12.2867 5.42244 12.1548C5.63019 13.0632 5.90041 13.9254 6.23064 14.7232C4.92213 14.3925 3.76139 13.6909 2.86642 12.7374ZM2.18365 11.8821C1.51924 10.9028 1.09926 9.74606 1.01051 8.49606H4.97965C5.00445 9.41782 5.08229 10.3183 5.22856 11.1775C4.15409 11.3303 3.13317 11.5663 2.18365 11.8821ZM2.18365 4.11836C3.13317 4.4342 4.15409 4.6707 5.22856 4.82292C5.08229 5.6822 5.00445 6.58264 4.97965 7.50439H1.01051C1.09926 6.2544 1.51924 5.09763 2.18365 4.11836ZM6.23064 1.27721C5.90041 2.07501 5.63019 2.93726 5.42244 3.84563C4.53093 3.71423 3.67611 3.51888 2.86642 3.26303C3.76139 2.30954 4.92213 1.60793 6.23064 1.27721ZM7.45188 1.08286C7.61204 1.07195 7.7707 1.05856 7.93333 1.05856C8.09597 1.05856 8.25513 1.07195 8.41478 1.08286C8.83674 1.96148 9.17837 2.93975 9.43174 3.97703C8.93839 4.02017 8.43908 4.04545 7.93333 4.04545C7.42758 4.04545 6.92828 4.02017 6.43542 3.97703C6.6883 2.93975 7.02993 1.96148 7.45188 1.08286ZM9.89386 8.49606C9.86708 9.36922 9.78775 10.228 9.6385 11.0526C9.08019 11.004 8.51247 10.9752 7.93333 10.9752C7.3542 10.9752 6.78647 11.004 6.22866 11.0526C6.07892 10.228 5.99958 9.36922 5.9733 8.49606H9.89386ZM5.9733 7.50439C5.99958 6.63123 6.07892 5.77245 6.22866 4.94788C6.78647 4.99647 7.3542 5.02523 7.93333 5.02523C8.51247 5.02523 9.0802 4.99647 9.63801 4.94788C9.78775 5.77245 9.86708 6.63123 9.89386 7.50439H5.9733ZM13.0003 3.26303C12.1906 3.51888 11.3357 3.71423 10.4442 3.84563C10.2365 2.93726 9.96625 2.07501 9.63603 1.27721C10.9445 1.60793 12.1058 2.30954 13.0003 3.26303ZM13.683 4.11836C14.3474 5.09763 14.7674 6.2544 14.8562 7.50439H10.887C10.8622 6.58264 10.7844 5.6822 10.6381 4.82292C11.7126 4.6707 12.7335 4.4342 13.683 4.11836ZM7.93333 0.0668945C3.55215 0.0668945 0 3.61855 0 8.00023C0 12.3819 3.55215 15.9336 7.93333 15.9336C12.3145 15.9336 15.8667 12.3819 15.8667 8.00023C15.8667 3.61855 12.3145 0.0668945 7.93333 0.0668945Z" fill="#9E028F" />
            </svg>
            <select className="div-wrapper" >
              <option>Select Region</option>
            </select>
          </div>
          <div className="search-area">
            <img className="magnifying-glass-1-icon" alt="" src="magnifying-glass 1.svg"/>
              <div className="search-by-keyword">
                <div className="search-by-keyword1">Search by keyword or patent field</div>
              </div>
          </div>
          <div className="search-area">
            <CiSearch className="magnifying-glass"></CiSearch>
            <input
              type="text"
              className="input"
              placeholder="Search by keyword or patent field"
            />
          </div>
          <button className="search">
            <div className="advanced-search">Search</div>
          </button>
        </div>
        <button className="btn-learn-more" onClick={toggleSearch}>
          <div className="advanced-search">Advanced Search</div>
        </button>
      </div> */}

      <div className="top-right-links">
        <div className="expert-icon">
        <img className="support-svgrepo-com" alt="" src={expert} />
        </div>
        <div className="expert-icon">
        <img className="email-notification" alt="" src={support} />
        </div>
        <div className="expert-icon">
        <img className="help-icon" alt="" src={help} />
        </div>
      </div>
    </div>
  )
}

export default MainHeader;