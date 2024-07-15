import React, { useEffect, useRef, useState } from "react";
import "./adminPanel.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";
import SpcModal from "../../layouts/EuropeSPCModal/europeSpcModal";

type OutletContextType = {
  toggleSearchBar: (show: boolean) => void;
  showSearchBar: boolean;
};

export const AdminPanel = () => {

  const [showSCP, setShowSCP] = useState(true);
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);

  const showModal = (index: number) => {
    setSelectedRowIndex(index);
  };

  const closeModal = () => {
    setSelectedRowIndex(null);
    console.log("modal closed");
    
  };

  const navigate = useNavigate();
  const [tabNo, setTabNo] = useState(1);
  const { toggleSearchBar } = useOutletContext<OutletContextType>();

  const onTabClick = (tab: any) => {
    setTabNo(tab);
    if(tab === 1) {
      setActiveTable('product-key-insights');
    } else if (tab === 2) {
      setActiveTable('regulatory-information');
    } else if (tab === 3) {
      setActiveTable('intellectual-property-patents');
    } else if (tab === 4) {
      setActiveTable('ep-litigation');
    } else if (tab === 5) {
      setActiveTable('api-manufacturing');
    } else if (tab === 6) {
      setActiveTable('ep-launch');
    } else if (tab === 7) {
      setActiveTable('clinical-trials');
    }
  }

  const onHomeClick = () => {
    navigate('/inphamed');
  }

  const onLogOutClick = () => {
    sessionStorage.clear();
    navigate('/');
  }

  const [activeTable, setActiveTable] = useState<string | null>(null);
  const apiManufacturingRef = useRef<HTMLDivElement>(null);
  const clinicalTrialsRef = useRef<HTMLDivElement>(null);
  const productKeyInsights = useRef<HTMLDivElement>(null);
  const epLitigation = useRef<HTMLDivElement>(null);
  const epLaunch = useRef<HTMLDivElement>(null);
  const regulatoryInformation = useRef<HTMLDivElement>(null);
  const intellectualPropertyPatents = useRef<HTMLDivElement>(null);
  const [productInfo, setProductInfo] = useState<any[]>([]);
  const [regulatoryInfo, setRegulatoryInfo] = useState<any[]>([]);
  const [ipInfo, setIpInfo] = useState<any[]>([]);
  const [probability, setProbability] = useState<any[]>([]);
  const [litigationSummary, setLitigationSummary] = useState<any[]>([]);
  const [litigationAndaFilers, setLitigationAndaFilers] = useState<any[]>([]);
  const [epPetition, setEpPetition] = useState<any[]>([]);

  // Scroll function to scroll a given ref into view
  const scrollIntoView = (ref: React.RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Effect hook to make multiple API calls on initial render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ndaNumber = sessionStorage.getItem("ndaNumber");
        const epOverview = await axios.get(`${process.env.URL}getEpOverview?agencyProductNumber=${ndaNumber}`);
        const epRegulatory = await axios.get(`${process.env.URL}getEpRegulatory?agencyProductNumber=${ndaNumber}`)
        const epIp = await axios.get(`${process.env.URL}getEpIp?agencyProductNumber=${ndaNumber}`)
        const epProbability = await axios.get(`${process.env.URL}getEpProbability?agencyProductNumber=${ndaNumber}`)

        if(epOverview.status === 200) setProductInfo(epOverview.data.result);
        if(epRegulatory.status === 200) setRegulatoryInfo(epRegulatory.data.result);
        if(epIp.status === 200) setIpInfo(epIp.data.result);
        if(epProbability.status === 200) setProbability(epProbability.data.result);
        console.log(epOverview, epRegulatory, epIp, epProbability);
        

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
      }
    };

    fetchData();
    toggleSearchBar(true);
  }, []);

  // Effect hook to scroll active table into view when it changes
  useEffect(() => {
    if (activeTable === 'api-manufacturing') {
      scrollIntoView(apiManufacturingRef);
    } else if (activeTable === 'clinical-trials') {
      scrollIntoView(clinicalTrialsRef);
    }
    else if (activeTable === 'product-key-insights') {
      scrollIntoView(productKeyInsights);
    }
    else if (activeTable === 'regulatory-information') {
      scrollIntoView(regulatoryInformation);
    }
    else if (activeTable === 'ep-litigation') {
      scrollIntoView(epLitigation);
    }
    else if (activeTable === 'ep-launch') {
      scrollIntoView(epLaunch);
    }
    else if (activeTable === 'intellectual-property-patents') {
      scrollIntoView(intellectualPropertyPatents);
    }
  }, [activeTable]);

  

  const drugsName: any[] = [
    "Palbociclib",
    "Ayahuasca",
    "Cannabis",
    "Fentanyl",
    "Hallucinogens",
    "Palbociclib",
    "Ayahuasca",
    "Cannabis",
    "Fentanyl",
    "Hallucinogens",
    "Palbociclib",
    "Ayahuasca",
    "Cannabis",
    "Fentanyl",
    "Hallucinogens",
    "Palbociclib",
    "Ayahuasca",
    "Cannabis",
    "Fentanyl",
    "Palbociclib",
    "Ayahuasca",
    "Cannabis",
    "Fentanyl",
    "Hallucinogens",
    "Palbociclib",
    "Ayahuasca",
    "Cannabis",
    "Fentanyl",
    "Hallucinogens",
    "Palbociclib",
    "Ayahuasca",
    "Cannabis",
    "Fentanyl",
    "Hallucinogens",
    "Palbociclib",
    "Ayahuasca",
    "Cannabis",
    "Fentanyl",
    "Palbociclib",
    "Ayahuasca",
    "Cannabis",
    "Fentanyl",
    "Hallucinogens",
    "Palbociclib",
    "Ayahuasca",
    "Cannabis",
    "Fentanyl",
    "Hallucinogens",
    "Palbociclib",
    "Ayahuasca",
    "Cannabis",
    "Fentanyl",
    "Hallucinogens",
    "Palbociclib",
    "Ayahuasca",
    "Cannabis",
    "Fentanyl",
    "Palbociclib",
    "Ayahuasca",
    "Cannabis",
    "Fentanyl",
    "Hallucinogens",
    "Palbociclib",
    "Ayahuasca",
    "Cannabis",
    "Fentanyl",
    "Hallucinogens",
    "Palbociclib",
    "Ayahuasca",
    "Cannabis",
    "Fentanyl",
    "Hallucinogens",
    "Palbociclib",
    "Ayahuasca",
    "Cannabis",
    "Fentanyl",
    "Hallucinogens"
  ];

  const epLaunchData: any[] = [
    {
      ActiveIngredients: "Cinacalcet",
      BrandNames: "Accordpharma",
      Strengths: "30mg/60mg/90mg",
      DosageForm: "tablets",
      Route: "Oral",
      Country: "French",
      Marketers: "Accordpharma",
    },
    {
      ActiveIngredients: "Cinacalcet",
      BrandNames: "Biogaran",
      Strengths: "30mg/60mg/90mg",
      DosageForm: "tablets",
      Route: "Oral",
      Country: "French",
      Marketers: "GENERIC ARROWS",
    }
  ];
  
  const renderTextWithTooltip = (text: string, type: string) => {
    let showTooltip, displayText;
    if(type === "text") {
      showTooltip = text && text.length > 115;
      displayText = showTooltip ? `${text.substring(0, 115)}...` : text;
    } else {
      showTooltip = text && text.length > 30;
      displayText = showTooltip ? `${text.substring(0, 30)}...` : text;
    }

    return (
      <div
        style={{
          whiteSpace: 'wrap',
          height: "100%",
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '100%',
        }}
        title={showTooltip ? text : ''}
      >
        {displayText}
      </div>
    );
  };

  const [sideBarMaximised, setSideBarMaximised] = useState(false);

  const sideBarButtonClicked = () => {
    setSideBarMaximised(!sideBarMaximised);
  };

  return (
    <div className="europe-drug-profile">
      <div className="div_1">
        <div className="overlap">
        <div className="dashboard-links">
            <div className="home" onClick={onHomeClick}>
              <img
                className="img-2"
                alt="Home"
                src="../src/assets/vectors/Vector48_x2.svg"
              />
              <div className="text-wrapper-36">Home</div>
            </div>
            <div className="drugs-selected" onClick={sideBarButtonClicked}>
              <img
                className="img-2"
                alt="Drugs"
                src="../src/assets/vectors/Vector14_x2.svg"
              />
              <div className="text-wrapper-35">Drugs</div>
            </div>
            <div className="logout" onClick={() => onLogOutClick()}>
              <img className="img-2"
              alt="History"
              src="../src/assets/vectors/Logout2_x2.svg"/>
              <div className="text-wrapper-36">Logout</div>
            </div>
          </div>
          {sideBarMaximised && (
            <div className="filters">
              <div className="drug-filter">
                <div className="heading-5">
                  <div className="heading-with-arrow">
                    <div className="heading-6">
                      <div className="text-wrapper">Drugs</div>
                    </div>
                    <img
                      className="img arrow-down" style={{height: '15px', width:'13px'}}
                      alt="Arrow down"
                      src="../src/assets/vectors/Xmlid22249_x2.svg"
                    />
                  </div>
                  <div className="line-under-drugs-sidebar"></div>
                </div>
                <div className="frame-3">
                  <div className="drugs-list">
                    {drugsName.map((row, index) => (
                      <div className="drug">
                      <div className="text-wrapper-29">{row}</div>
                    </div>
                    ))}
                  </div>
                </div>
                <div className="show-all">
                  <div className="text-wrapper-34">Show All</div>
                </div>
              </div>
            </div>
          )}
          <div className={`main-container ${sideBarMaximised ? 'main-container-with-sidebar' : ''}`}>
          <div className="search-term-sub-menu">
              <div className="search-term">
                <div className="search-term-region">
                  <div className="heading-4">
                    <div className="text-wrapper-30">{sessionStorage.getItem("brandName")}</div>
                  </div>
                  <div className="select-region">
                    <img
                      className="region-icon"
                      alt="Region icon"
                      src="../src/assets/vectors/Globe19_x2.svg"
                    />
                    <div className="select-region-2 d-flex align-items-center">
                      <div className="text-wrapper-31">{sessionStorage.getItem("selected_region")}</div>
                    </div>
                  </div>
                </div>
                <div className="save-download">
                  <div className="save">
                    <img
                      className="wishlist-svgrepo-com"
                      alt="Wishlist svgrepo com"
                      src="../src/assets/vectors/Vector50_x2.svg"
                    />
                    <div className="text-wrapper-32">Save the Search</div>
                  </div>
                  <div className="download">
                    <img
                      className="download-svgrepo-com"
                      alt="Download svgrepo com"
                      src="../src/assets/vectors/Group2_x2.svg"
                    />
                    <div className="text-wrapper-32">Export</div>
                  </div>
                </div>
              </div>
              <div className="sub-menu-links">
                <div className={`product-key ${tabNo == 1 ? 'tab-click' : ''}`} >
                  <div className="group-12" onClick={() => onTabClick(1)}>
                    <div className="text-wrapper-28">Product Key Insights</div>
                  </div>
                </div>
                <div className={`div-10 ${tabNo == 2 ? 'tab-click' : ''}`} onClick={() => onTabClick(2)}>
                  <div className="group-13">
                    <div className="text-wrapper-29">
                      Regulatory Information
                    </div>
                  </div>
                </div>
                <div className={`div-10 ${tabNo == 3 ? 'tab-click' : ''}`} onClick={() => onTabClick(3)}>
                  <div className="group-14">
                    <div className="text-wrapper-29">
                      Intellectual Property Patents
                    </div>
                  </div>
                </div>
                {/* <div className={`div-10 ${tabNo == 4 ? 'tab-click' : ''}`} onClick={() => onTabClick(4)}>
                  <div className="group-15">
                    <div className="text-wrapper-29">EP Litigation</div>
                  </div>
                </div> */}
                <div className={`div-10 ${tabNo == 5 ? 'tab-click' : ''}`} onClick={() => onTabClick(5)}>
                  <div className="group-16">
                    <div className="text-wrapper-29">
                      API Manufacturing Status
                    </div>
                  </div>
                </div>
                <div className={`div-10 ${tabNo == 6 ? 'tab-click' : ''}`} onClick={() => onTabClick(6)}>
                  <div className="group-17">
                    <div className="text-wrapper-29">EP Launch</div>
                  </div>
                </div>
                <div className={`div-10 ${tabNo == 7 ? 'tab-click' : ''}`} onClick={() => onTabClick(7)}>
                  <div className="group-18">
                    <div className="text-wrapper-29">Clinical Trials</div>
                  </div>
                </div>
              </div>
            </div>
          <div className="dashboard">
            <div className="dashboard-2">
            <div className="product-information" ref={productKeyInsights}>
                <div className="heading">
                  <div className="headline">
                    <div className="group">
                      <div className="text-wrapper">Product Information</div>
                    </div>
                  </div>
                </div>
                <div className="frame">
                  <table style={{ width: "100%" }}>
                    <thead>
                      <tr>
                        <th>
                          <div className="table-label">Brand Name</div>
                        </th>
                        <th>
                          <div className="table-label">Active Ingredient</div>
                        </th>
                        <th>
                          <div className="table-label">Company</div>
                        </th>
                        <th>
                          <div className="table-label">Therapeutic Class</div>
                        </th>
                        <th>
                          <div className="table-label">Dosage Form</div>
                        </th>
                        <th>
                          <div className="table-label">Route</div>
                        </th>
                        <th>
                          <div className="table-label">Strength</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
      {productInfo?.map((drug: any, index: number) => (
        <tr key={index}>
          <td className="product-info-table-cell">
            <div className="table-cell">
              <div className="IBRANCE text-wrapper-3">
                {drug.brandName}
              </div>
            </div>
          </td>
          <td className="product-info-table-cell">
            <div className="table-cell">
              <div className="IBRANCE text-wrapper-3">
                {drug.activeIngredient}
              </div>
            </div>
          </td>
          <td className="product-info-table-cell">
            <div className="table-cell">
              <div className="IBRANCE text-wrapper-3">
                {drug.company}
              </div>
            </div>
          </td>
          <td className="product-info-table-cell">
            <div className="table-cell">
              <div className="IBRANCE text-wrapper-3">
                {drug.therapeuticClass}
              </div>
            </div>
          </td>
          <td className="product-info-table-cell">
            <div className="table-cell">
              {drug.dosageDetail.map((form: any, idx: number) => (
                <div key={idx} className={`IBRANCE text-wrapper-3 ${idx !== 0 && idx !== drug.dosageDetail.length - 1 ? 'strength-route-margin' : ''}`}>
                  {form.dosageForm}
                </div>
              ))}
            </div>
          </td>
          <td className="product-info-table-cell">
            <div className="table-cell">
              {drug.dosageDetail.map((route: any, idx: number) => (
                <div key={idx} className={`IBRANCE text-wrapper-3 ${idx !== 0 && idx !== drug.dosageDetail.length - 1 ? 'strength-route-margin' : ''}`}>
                  {route.route}
                </div>
              ))}
            </div>
          </td>
          <td className="product-info-table-cell">
            <div className="table-cell">
              {drug.dosageDetail.map((strength: any, idx: number) => (
                <div key={idx} className={`IBRANCE text-wrapper-3 ${idx !== 0 && idx !== drug.dosageDetail.length - 1 ? 'strength-route-margin' : ''}`}>
                  {strength.strength}
                </div>
              ))}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
                  </table>
                </div>
              </div>
              <div className="regulatory-information" ref={regulatoryInformation}>
                <div className="headline-wrapper">
                  <div className="headline">
                    <div className="group-2">
                      <div className="text-wrapper">Regulatory Information</div>
                    </div>
                  </div>
                </div>
                <div className="table-head-content">
                  <div className="div-3">
                    <div className="regulatory-information-row" style={{borderTop: '1px solid #d5ddf4'}}>
                      <div className="key">
                        <div className="text-wrapper-4">
                        Agency Product Number
                        </div>
                      </div>
                      <div className="value">
                        <div className="text-wrapper-5">{regulatoryInfo[0]?.agencyProductNumber}</div>
                      </div>
                      <div className="key">
                        <div className="text-wrapper-6">Date of Approval</div>
                      </div>
                      <div className="value">
                        <div className="text-wrapper-5">{regulatoryInfo[0]?.dateOfApproval}</div>
                      </div>
                      <div className="key">
                        <div className="text-wrapper-4">
                        Data + MArketing Exclusivity
                        </div>
                      </div>
                      <div className="value">
                        <div className="text-wrapper-5">{regulatoryInfo[0]?.markettingExclusivity}</div>
                      </div>
                    </div>
                    <div className="regulatory-information-row">
                      <div className="key">
                        <div className="text-wrapper-6">Orphan Exclusivity</div>
                      </div>
                      <div className="value">
                        <p className="p">
                          {regulatoryInfo[0]?.orphanDesignated}
                        </p>
                      </div>
                      <div className="key">
                        <div className="text-wrapper-6">Marketing Status</div>
                      </div>
                      <div className="value">
                        <div className="text-wrapper-5">{regulatoryInfo[0]?.markettingStatus}</div>
                      </div>
                      <div className="key">
                        <div className="text-wrapper-6">
                          Pediatric Exclusivity
                        </div>
                      </div>
                      <div className="value">
                        <p className="p">
                          {renderTextWithTooltip(regulatoryInfo[0]?.pediatricExclusivity, "text")}
                        </p>
                      </div>
                    </div>
                    <div className="regulatory-information-row" style={{borderBottom: '1px solid #d5ddf4', maxWidth:'66.7%'}}>
                      <div className="key" style={{width:'25%'}}>
                        <p className="text-wrapper-7">
                        BLA Number
                        </p>
                      </div>
                      <div className="value" style={{width:'25%'}}>
                        <div className="text-wrapper-5">{regulatoryInfo[0]?.blaNumber}</div>
                      </div>
                      <div className="key" style={{width:'25%'}}>
                        <div className="text-wrapper-6">Latest Indication</div>
                      </div>
                      <div className="value" style={{width:'25%'}}>
                      <div className="text-wrapper-5"><a href={regulatoryInfo[0]?.latestIndication} target="_blank" rel="noopener noreferrer">{renderTextWithTooltip(regulatoryInfo[0]?.latestIndication, "link")}</a></div>
                      </div>
                    </div>
                    {/* <div className="regulaory-information-row">
                      <div className="div-wrapper-submission">
                        <div className="text-wrapper-6">Specific Technology if any</div>
                      </div>
                      <div className="div-wrapper-6">
                        <div className="text-wrapper-5">None</div>
                      </div>
                      <div className="div-wrapper-7">
                        <div className="text-wrapper-6">Citizen Petition</div>
                      </div>
                      <div className="div-wrapper-6">
                        <div className="text-wrapper-5">None</div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="intellectual-property-patents" ref={intellectualPropertyPatents}>
                <div className="headline-wrapper">
                  <div className="headline">
                    <div className="group-3">
                      <div className="text-wrapper">
                        Intellectual Property Patents
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-with-details">
                  <div className="div-5">
                    <div className="table">
                      <div className="patentDetailsStartingColumn">
                        <div className="element-3">
                          <div className="text-wrapper-9" style={{paddingTop: '0px'}}>Brand name</div>
                        </div>
                        {ipInfo.map((row: any, index: number) => (
                          <div
                            className={
                              index == ipInfo.length - 1
                                ? "element-5"
                                : "element-4"
                            }
                          >
                            <div className="text-wrapper-10" style={{paddingTop: '0px'}}>
                              {row.brandName}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="column-scroll">
                        <div className="div-6">
                          <div className="element-6">
                            <div className="text-wrapper-9">
                              Active ingredient
                            </div>
                          </div>
                          {ipInfo.map((row: any, index: number) => (
                            <div className={`element-7 ${index === ipInfo.length-1 ? 'scroll-margin' : ''}`}>
                              <div className="text-wrapper-10">
                                {row.activeIngredient}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-6">
                            <div className="text-wrapper-9">Type of patent</div>
                          </div>
                          {ipInfo.map((row: any, index: number) => (
                            <div className="element-7">
                              <div className="text-wrapper-10">
                                {row.typeOfPatent}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-8">
                            <div className="text-wrapper-9">
                            Equivalent Family
                            </div>
                          </div>
                          {ipInfo.map((row: any, index: number) => (
                            <div className="element-9">
                              <div className="text-wrapper-10">
                                {row.equivalentFamily}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-7">
                          <div className="element-12">
                            <div className="text-wrapper-9">Patent Number</div>
                          </div>
                          {ipInfo.map((row :any, index: any) => (
                            <div className="element-13">
                              <div className="text-wrapper-10">
                                {row.patentNumber}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-14">
                            <div className="text-wrapper-9">Current Assignee</div>
                          </div>
                          {ipInfo.map((row: any, index: any) => (
                            <div className="element-15">
                              <div className="text-wrapper-10">{row.currentAssignee}</div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-10">
                            <div className="text-wrapper-9">
                              Status
                            </div>
                          </div>
                          {ipInfo.map((row: any, index: number) => (
                            <div className="element-11">
                              <div className="text-wrapper-10">
                                {row.status}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="div-6">
                          <div className="element-14">
                            <div className="text-wrapper-9">SPC</div>
                          </div>
                          {ipInfo.map((row: any, index: any) => (
                            <div className="element-15">
                              <div className="text-wrapper-11">{row.spc}</div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="div-6">
                          <div className="element-14">
                            <div className="text-wrapper-9">PED</div>
                          </div>
                          {ipInfo.map((row: any, index: any) => (
                            <div className="element-15">
                              <div className="text-wrapper-11">{row.ped}</div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-10">
                            <div className="text-wrapper-9">
                              Estimated expiry&nbsp;&nbsp;
                              <br />
                              (inc. PTE PED)
                            </div>
                          </div>
                          {ipInfo.map((row: any, index: any) => (
                            <div className="element-11">
                              <div className="text-wrapper-11">
                                {row.estimatedExpiry === 'SPC' ? <a href="#" style={{ color: '#030229', textDecoration: 'underline' }} onClick={() => showModal(index)}>{row.estimatedExpiry}</a> : <div>{row.estimatedExpiry}</div>}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-17">
                            <div className="text-wrapper-9">
                              Independent claims coverage brief
                            </div>
                          </div>
                          {ipInfo.map((row: any, index: any) => (
                            <div className="element-18">
                              <div className="text-wrapper-10" style={{height:'100%'}}>
                                {renderTextWithTooltip(row.IndependentClaims, "text")}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="div-8" style={{ width: "17%" }}>
                        <div className="element-19 w-100">
                          <div
                            className="text-wrapper-9"
                            style={{ marginTop: "-12px", paddingLeft: "0px" }}
                          >
                            Proposed Strategy for PARA IV scenario
                          </div>
                        </div>
                        {ipInfo.map((row: any, index :any) => (
                          <div
                            className={`${
                              index == ipInfo.length - 1
                                ? "element-21"
                                : "element-20"
                            } w-100`}
                          >
                            <div className="text-wrapper-10">
                              {renderTextWithTooltip(row.proposedStrategyForPARA, "text")}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* <div className="scroll-bar">
                      <div className="scroll" />
                    </div> */}
                  </div>
                  <div className="summary-perception">
                  <div className="div-5">
                  <div className="content">
                        <div className="text-wrapper" style={{position: 'relative', color:'black'}}>Launch Probability</div>
                    </div>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="logo_container" style={{display:'flex'}}>
                                    <span style={{fontSize:'2.3rem', fontWeight:'700', fontStyle:'normal'}}>{probability[0]?.launchProbability}</span>
                                    <span style={{paddingTop:'15px', fontSize:'1.3rem', fontWeight:'600', fontStyle:'normal'}}>%</span>
                                </div>
                            </div>
                        </div>
                        <svg className='custome_svg' xmlns="http://www.w3.0rg/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#DA22FF" />
                                    <stop offset="100%" stop-color="#9733EE" />
                                </linearGradient>
                            </defs>
                            <circle cx="80" cy="80" r="70" stroke-linecap="round"   style={{
    strokeDashoffset: `${(100 - probability[0]?.launchProbability || 0) * 4.5}px`,
    // Other inline styles as needed
  }} />
                        </svg>
                    </div>
                    
                </div>
                    <div className="launch-perceptions">
                      <div className="heading-3">
                        <div className="text-wrapper-15">
                          Launch Perceptions
                        </div>
                      </div>
                      <div className="text-perception">
                        <div className="flexcontainer">
                          <p className="span-wrapper" style={{whiteSpace: "pre-line"}}>
                            {probability[0]?.launchPerceptions}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {selectedRowIndex !== null && (
                    <SpcModal show={selectedRowIndex !== null}
                    onClose={closeModal}
                    apnNumber={ipInfo[selectedRowIndex].agencyProductNumber}
                    ></SpcModal>
                  )}
                </div>
              </div>
              {/* <div className="div-2" ref={epLitigation}>
                <div className="headline-wrapper">
                  <div className="headline">
                    <div className="group-8">
                      <div className="text-wrapper">EP Litigation</div>
                    </div>
                  </div>
                </div>
                <div className="litigation-brief">
                  <div className="subheading">
                    <div className="text-wrapper-21">Litigation Brief</div>
                  </div>
                  <div className="div-9 round-top-left-border round-top-right-border">
                    <div className="div-6" style={{ width: "14.7%" }}>
                      <div className="element-29 w-100">
                        <div className="text-wrapper-9">Case Number</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "13.7%" }}>
                      <div className="element-31 w-100">
                        <div className="text-wrapper-9">Date</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "14.7%" }}>
                      <div className="element-33 w-100">
                        <div className="text-wrapper-9">
                          Court with Jurisdiction
                        </div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "17.6%" }}>
                      <div className="element-35 w-100">
                        <div className="text-wrapper-9">
                          Plaintiffs and Defendants
                        </div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "10.8%" }}>
                      <div className="element-37 w-100">
                        <div className="text-wrapper-9">Decision</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "10.8%" }}>
                      <div className="element-39 w-100">
                        <div className="text-wrapper-9">Status</div>
                      </div>
                    </div>
                    <div className="div-8" style={{ width: "17.7%" }}>
                      <div className="frame-wrapper w-100">
                        <div className="frame-2 w-100">
                          <div className="text-wrapper-22">Patent Numbers</div>
                          <img
                            className="arrow-down"
                            alt="Arrow down"
                            src="../src/assets/vectors/Xmlid22228_x2.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {litigationBriefData?.map((row, index) => (
                    <div className="div-9" style={{background:'none'}}>
                      <div className="div-6" style={{ width: "14.7%" }}>
                        <div
                          className={`element-30 w-100 ${
                            index == litigationBriefData.length - 1
                              ? "round-border-left"
                              : ""
                          }`}
                        >
                          <div className="text-wrapper-10">
                            {row.CaseNumber}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "13.7%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">{row.Date}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "14.7%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">
                            {row.CourtWithJurisdiction}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "17.6%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">
                            {row.PlaintiffsAndDefendants}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "10.8%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">{row.Decision}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "10.8%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">{row.Status}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "17.7%" }}>
                        <div
                          className={`element-41 w-100 ${
                            index == litigationBriefData.length - 1
                              ? "round-border-right"
                              : ""
                          }`}
                        >
                          <div className="text-wrapper-10" style={{color:'#9e028f', fontWeight:'bolder'}}>
                            {row.PatentNumbers}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="litigation-detail w-100">
                  <div className="subheading">
                    <div className="text-wrapper-21">Litigation Detail</div>
                  </div>
                  <div className="div-9 w-100 litigation-detail-header">
                    <div className="div-6" style={{ width: "12.5%" }}>
                      <div
                        className="litigation-detail-header-items w-100"
                      >
                        <div className="litigation-detail-text-wrap">Case Number</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "12.5%" }}>
                      <div
                        className="litigation-detail-header-items w-100"
                      >
                        <div className="litigation-detail-text-wrap">Date</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "12.5%" }}>
                      <div
                        className="litigation-detail-header-items w-100"
                      >
                        <div className="litigation-detail-text-wrap">
                          Court with Jurisdiction
                        </div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "12.5%" }}>
                      <div
                        className="litigation-detail-header-items w-100"
                      >
                        <div className="litigation-detail-text-wrap">
                          Plaintiffs and Defendants
                        </div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "12.5%" }}>
                      <div
                        className="litigation-detail-header-items w-100"
                      >
                        <div className="litigation-detail-text-wrap">Patent Number</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "12.5%" }}>
                      <div
                        className="litigation-detail-header-items w-100"
                      >
                        <div className="litigation-detail-text-wrap">Summary</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "12.5%" }}>
                      <div
                        className="litigation-detail-header-items w-100"
                      >
                        <div className="litigation-detail-text-wrap">Filing Number</div>
                      </div>
                    </div>
                    <div className="div-8" style={{ width: "12.5%" }}>
                        <div className="litigation-detail-header-items w-100">
                          <div className="litigation-detail-text-wrap">
                            Proceedings in Court
                          </div>
                        </div>
                    </div>
                  </div>
                  {litigationDetailData?.map((row, index) => (
                    <div
                      className={`div-9 w-100 lgDataRows ${
                        index == litigationDetailData.length - 1
                          ? "round-border-left round-border-right"
                          : ""
                      }`}
                    >
                      <div className="div-6" style={{ width: "12.5%" }}>
                        <div
                          className={`element-30 w-100 ${
                            index == litigationDetailData.length - 1
                              ? "round-border-left"
                              : ""
                          }`}
                        >
                          <div className="text-wrapper-10">
                            {row.CaseNumber}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "12.5%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">{row.Date}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "12.5%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">
                            {row.CourtWithJurisdiction}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "12.5%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">
                            {row.PlaintiffsAndDefendants}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "12.5%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">
                            {row.PatentNumber}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "12.5%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">{row.Summary}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "12.5%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">
                            {row.FilingNumber}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "12.5%" }}>
                        <div
                          className={`element-41 w-100 ${
                            index == litigationDetailData.length - 1
                              ? "round-border-right"
                              : ""
                          }`}
                        >
                          <div className="text-wrapper-10">
                            {row.ProceedingsInCourt}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
              <div className="div-4" ref={apiManufacturingRef}>
                <div className="headline-wrapper">
                  <div className="headline">
                    <div className="group-3">
                      <div className="text-wrapper">
                        API Manufaturing Status
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-with-details">
                  <div className="div-5">
                    <div className="table">
                      <div
                        className="patentDetailsStartingColumn"
                        style={{ width: "15%" }}
                      >
                        <div className="element-3">
                          <div className="text-wrapper-9">Brand name</div>
                        </div>
                        {epLaunchData.map((row, index) => (
                          <div
                            className={
                              index == epLaunchData.length - 1
                                ? "element-5"
                                : "element-4"
                            }
                          >
                            <div className="text-wrapper-10">
                              -
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="column-scroll" style={{ width: "70%" }}>
                        <div className="div-6" style={{ width: "20%" }}>
                          <div className="element-6">
                            <div className="text-wrapper-9">DMF#</div>
                          </div>
                          {epLaunchData.map((row, index) => (
                            <div className={`element-7 ${index === epLaunchData.length-1 ? 'scroll-margin' : ''}`}>
                              <div className="text-wrapper-10">
                                -
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6" style={{ width: "20%" }}>
                          <div className="element-6">
                            <div className="text-wrapper-9">Status</div>
                          </div>
                          {epLaunchData.map((row, index) => (
                            <div className="element-7">
                              <div className="text-wrapper-10">
                                -
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6" style={{ width: "20%" }}>
                          <div className="element-8">
                            <div className="text-wrapper-9">Type</div>
                          </div>
                          {epLaunchData.map((row, index) => (
                            <div className="element-9">
                              <div className="text-wrapper-10">
                                -
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6" style={{ width: "20%" }}>
                          <div className="element-8">
                            <div className="text-wrapper-9">Submit Date</div>
                          </div>
                          {epLaunchData.map((row, index) => (
                            <div className="element-9">
                              <div className="text-wrapper-10">
                                -
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6" style={{ width: "20%" }}>
                          <div className="element-10">
                            <div className="text-wrapper-9">Holder</div>
                          </div>
                          {epLaunchData.map((row, index) => (
                            <div className="element-11">
                              <div className="text-wrapper-10">
                                -
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="div-7" style={{ width: "15%" }}>
                          <div className="element-12">
                            <div className="text-wrapper-9">Status</div>
                          </div>
                          {epLaunchData.map((row, index) => (
                            <div className="element-13">
                              <div className="text-wrapper-10">
                                -
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-14">
                            <div className="text-wrapper-9">SPC</div>
                          </div>
                          {epLaunchData.map((row, index) => (
                            <div className="element-15">
                              <div className="text-wrapper-10">-</div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-14">
                            <div className="text-wrapper-9">PED</div>
                          </div>
                          {epLaunchData.map((row, index) => (
                            <div className="element-15">
                              <div className="text-wrapper-11">-</div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-10">
                            <div className="text-wrapper-9">
                              Estimated expiry&nbsp;&nbsp;
                              <br />
                              (inc. PTE PED)
                            </div>
                          </div>
                          {epLaunchData.map((row, index) => (
                            <div className="element-11">
                              <div className="text-wrapper-11">
                                -
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-17">
                            <div className="text-wrapper-9">
                              Independent claims coverage brief
                            </div>
                          </div>
                          {epLaunchData.map((row, index) => (
                            <div className="element-18">
                              <div className="text-wrapper-10">
                                -
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="div-8" style={{ width: "17%" }}>
                        <div className="element-19 w-100">
                          <div
                            className="text-wrapper-9"
                            style={{ marginTop: "-12px" }}
                          >
                            GDUFA Fees Payment
                          </div>
                        </div>
                        {epLaunchData.map((row, index) => (
                          <div
                            className={`${
                              index == epLaunchData.length - 1
                                ? "element-21"
                                : "element-20"
                            } w-100`}
                          >
                            <div className="text-wrapper-10">
                              -
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* <div className="scroll-bar">
                      <div className="scroll" />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="div-4" ref={epLaunch}>
                <div className="headline-wrapper">
                  <div className="headline">
                    <div className="group-9">
                      <div className="text-wrapper">EP Launch</div>
                    </div>
                  </div>
                </div>
                <div className="litigation-detail w-100">
                  <div className="ep-launch-header w-100 ">
                    <div className="div-6" style={{ width: "16.7%" }}>
                      <div
                        className="ep-launch-header-items w-100"
                      >
                        <div className="text-wrapper-9">Active Ingredients</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "13.7%" }}>
                      <div
                        className="ep-launch-header-items w-100"
                      >
                        <div className="text-wrapper-9">Brand Name</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "17.6%" }}>
                      <div
                        className="ep-launch-header-items w-100"
                      >
                        <div className="text-wrapper-9">Strength</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "14.7%" }}>
                      <div
                        className="ep-launch-header-items w-100"
                      >
                        <div className="text-wrapper-9">Dosage Form</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "10%" }}>
                      <div
                        className="ep-launch-header-items w-100"
                      >
                        <div className="text-wrapper-9">Route</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "11.7%" }}>
                      <div
                        className="ep-launch-header-items w-100"
                      >
                        <div className="text-wrapper-9">Country</div>
                      </div>
                    </div>
                    <div className="div-8" style={{ width: "15.6%" }}>
                        <div className="ep-launch-header-items w-100">
                          <div className="text-wrapper-22">Marketer</div>
                        </div>
                    </div>
                  </div>
                  {epLaunchData?.map((row, index) => (
                    <div
                      className={`div-9 w-100 lgDataRows ${
                        index == epLaunchData.length - 1
                          ? "round-border-left round-border-right"
                          : ""
                      }`}
                    >
                      <div className="div-6" style={{ width: "16.7%" }}>
                        <div
                          className={`element-30 w-100 ${
                            index == epLaunchData.length - 1
                              ? "round-border-left"
                              : ""
                          }`}
                        >
                          <div className="text-wrapper-10">
                            -
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "13.7%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">
                            -
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "17.6%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">-</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "14.7%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">
                            -
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "10%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">-</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "11.7%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">-</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "15.6%" }}>
                        <div
                          className={`element-41 w-100 ${
                            index == epLaunchData.length - 1
                              ? "round-border-right"
                              : ""
                          }`}
                        >
                          <div className="text-wrapper-10">-</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="div-4" ref={clinicalTrialsRef}>
                <div className="headline-wrapper">
                  <div className="headline">
                    <div className="group-11">
                      <div className="text-wrapper">Clinical Trials</div>
                    </div>
                  </div>
                </div>
                <div className="div-5">
                  <div className="table">
                    <div className="patentDetailsStartingColumn">
                      <div className="element-3">
                        <div className="text-wrapper-9">Active Ingredients</div>
                      </div>
                      {epLaunchData.map((row, index) => (
                        <div
                          className={
                            index == epLaunchData.length - 1
                              ? "element-5"
                              : "element-4"
                          }
                        >
                          <div className="text-wrapper-10">-</div>
                        </div>
                      ))}
                    </div>
                    <div className="column-scroll">
                      <div className="div-6">
                        <div className="element-6">
                          <div className="text-wrapper-9">EudraCT Number</div>
                        </div>
                        {epLaunchData.map((row, index) => (
                          <div className={`element-7 ${index === epLaunchData.length-1 ? 'scroll-margin' : ''}`}>
                            <div className="text-wrapper-10">
                              -
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="div-6">
                        <div className="element-6">
                          <div className="text-wrapper-9">
                            National Competent Authority
                          </div>
                        </div>
                        {epLaunchData.map((row, index) => (
                          <div className="element-7">
                            <div className="text-wrapper-10">
                              -
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="div-6">
                        <div className="element-8">
                          <div className="text-wrapper-9">Trial Status</div>
                        </div>
                        {epLaunchData.map((row, index) => (
                          <div className="element-9">
                            <div className="text-wrapper-10">
                              -
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="div-6">
                        <div className="element-8">
                          <div className="text-wrapper-9">Patent number</div>
                        </div>
                        {epLaunchData.map((row, index) => (
                          <div className="element-9">
                            <div className="text-wrapper-10">
                              -
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="div-6">
                        <div className="element-10">
                          <div className="text-wrapper-9">Current Assignee</div>
                        </div>
                        {epLaunchData.map((row, index) => (
                          <div className="element-11">
                            <div className="text-wrapper-10">
                              -
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="div-7">
                        <div className="element-12">
                          <div className="text-wrapper-9">Status</div>
                        </div>
                        {epLaunchData.map((row, index) => (
                          <div className="element-13">
                            <div className="text-wrapper-10">-</div>
                          </div>
                        ))}
                      </div>
                      <div className="div-6">
                        <div className="element-14">
                          <div className="text-wrapper-9">SPC</div>
                        </div>
                        {epLaunchData.map((row, index) => (
                          <div className="element-15">
                            <div className="text-wrapper-10">-</div>
                          </div>
                        ))}
                      </div>
                      <div className="div-6">
                        <div className="element-14">
                          <div className="text-wrapper-9">PED</div>
                        </div>
                        {epLaunchData.map((row, index) => (
                          <div className="element-15">
                            <div className="text-wrapper-11">-</div>
                          </div>
                        ))}
                      </div>
                      <div className="div-6">
                        <div className="element-10">
                          <div className="text-wrapper-9">
                            Estimated expiry&nbsp;&nbsp;
                            <br />
                            (inc. PTE PED)
                          </div>
                        </div>
                        {epLaunchData.map((row, index) => (
                          <div className="element-11">
                            <div className="text-wrapper-11">
                              -
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="div-6">
                        <div className="element-17">
                          <div className="text-wrapper-9">
                            Independent claims coverage brief
                          </div>
                        </div>
                        {epLaunchData.map((row, index) => (
                          <div className="element-18">
                            <div className="text-wrapper-10">
                              -
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="div-8" style={{ width: "17%" }}>
                      <div className="element-19 w-100">
                        <div
                          className="text-wrapper-9"
                          style={{ marginTop: "-12px" }}
                        >
                          Proposed Strategy for PARA IV scenario
                        </div>
                      </div>
                      {epLaunchData.map((row, index) => (
                        <div
                          className={`${
                            index == epLaunchData.length - 1
                              ? "element-21"
                              : "element-20"
                          } w-100`}
                        >
                          <div className="text-wrapper-10">
                            -
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* <div className="scroll-bar">
                      <div className="scroll" />
                    </div> */}
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
