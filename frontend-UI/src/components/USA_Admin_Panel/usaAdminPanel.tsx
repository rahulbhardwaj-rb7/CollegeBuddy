import React, { useEffect, useRef, useState } from "react";
import "./usaAdminPanel.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";
import LitigationModal from "../../layouts/UsLitigationModal/usLitigationModal";

type OutletContextType = {
  toggleSearchBar: (show: boolean) => void;
  showSearchBar: boolean;
};

export const USAAdminPanel = () => {

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
      setActiveTable('us-litigation');
    } else if (tab === 5) {
      setActiveTable('api-manufacturing');
    } else if (tab === 6) {
      setActiveTable('us-launch');
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
  const usLitigation = useRef<HTMLDivElement>(null);
  const usLaunch = useRef<HTMLDivElement>(null);
  const regulatoryInformation = useRef<HTMLDivElement>(null);
  const intellectualPropertyPatents = useRef<HTMLDivElement>(null);
  const [productInfo, setProductInfo] = useState<any[]>([]);
  const [regulatoryInfo, setRegulatoryInfo] = useState<any[]>([]);
  const [ipInfo, setIpInfo] = useState<any[]>([]);
  const [probability, setProbability] = useState<any[]>([]);
  const [litigationSummary, setLitigationSummary] = useState<any[]>([]);
  const [litigationAndaFilers, setLitigationAndaFilers] = useState<any[]>([]);
  const [usPetition, setUsPetition] = useState<any[]>([]);




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
          const usOverview = await axios.get(`${process.env.URL}getUsOverview?ndaNumber=${ndaNumber}`);
          const usRegulatory = await axios.get(`${process.env.URL}getUsRegulatory?ndaNumber=${ndaNumber}`)
          const usIp = await axios.get(`${process.env.URL}getUsip?ndaNumber=${ndaNumber}`)
          const usProbability = await axios.get(`${process.env.URL}getUsProbability?ndaNumber=${ndaNumber}`)
          const usLitigation = await axios.get(`${process.env.URL}getUsLitigationSummary?ndaNumber=${ndaNumber}`)
          const usAndaFilers = await axios.get(`${process.env.URL}getUsAndaFilers?ndaNumber=${ndaNumber}`)
          const petition = await axios.get(`${process.env.URL}getUsPitition?ndaNumber=${ndaNumber}`)

          if(usOverview.status === 200) setProductInfo(usOverview.data.result);
          if(usRegulatory.status === 200) setRegulatoryInfo(usRegulatory.data.result);
          if(usIp.status === 200) setIpInfo(usIp.data.result);
          if(usProbability.status === 200) setProbability(usProbability.data.result);
          if(usLitigation.status === 200)  setLitigationSummary(usLitigation.data.result);
          if(usAndaFilers.status === 200) setLitigationAndaFilers(usAndaFilers.data.result);
          if(petition.status === 200) setUsPetition(petition.data.result);

        } catch (error) {
          console.error('Error fetching data:', error);
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
    else if (activeTable === 'us-litigation') {
      scrollIntoView(usLitigation);
    }
    else if (activeTable === 'us-launch') {
      scrollIntoView(usLaunch);
    }
    else if (activeTable === 'intellectual-property-patents') {
      scrollIntoView(intellectualPropertyPatents);
    }
  }, [activeTable]);

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
    },
    {
      ActiveIngredients: "Cinacalcet",
      BrandNames: "Biogaran",
      Strengths: "30mg/60mg/90mg",
      DosageForm: "tablets",
      Route: "Oral",
      Country: "French",
      Marketers: "GENERIC ARROWS",
    },
    {
      ActiveIngredients: "Cinacalcet",
      BrandNames: "Biogaran",
      Strengths: "30mg/60mg/90mg",
      DosageForm: "tablets",
      Route: "Oral",
      Country: "French",
      Marketers: "GENERIC ARROWS",
    },
    {
      ActiveIngredients: "Cinacalcet",
      BrandNames: "BGR",
      Strengths: "30mg/60mg/90mg",
      DosageForm: "tablets",
      Route: "Oral",
      Country: "French",
      Marketers: "EG LABO - EuroGenerics Laboratories",
    },
  ];

  const patentData: any[] = [
    {
      ActiveIngredient: "PALBOCICLIB",
      BrandName: "IBRANCE",
      TypeOfPatent: "Drug Substance",
      EquivalentFamily: "US6936612",
      PatentNumber: "A",
      CurrentAssignee: "WARNER LAMBERT",
      Status: "Granted",
      SPC: "Granted",
      PED: "No",
      EstimatedExpiry: "Feb 8, 2034",
      IndependentClaimsCoverageBrief:
        "Claims compound Palbociclib generically.",
      ProposedStrategy: "After Expiry",
    },
    {
      ActiveIngredient: "PALBOCICLIB",
      BrandName: "IBRANCE",
      TypeOfPatent: "Drug Substance",
      EquivalentFamily: "US6936612",
      PatentNumber: "A",
      CurrentAssignee: "WARNER LAMBERT",
      Status: "Granted",
      SPC: "Granted",
      PED: "No",
      EstimatedExpiry: "Feb 8, 2034",
      IndependentClaimsCoverageBrief:
        "Claims compound Palbociclib generically.",
      ProposedStrategy: "After Expiry",
    },
    {
      ActiveIngredient: "PALBOCICLIB",
      BrandName: "IBRANCE",
      TypeOfPatent: "Drug Substance",
      EquivalentFamily: "US6936612",
      PatentNumber: "A",
      CurrentAssignee: "WARNER LAMBERT",
      Status: "Granted",
      SPC: "Granted",
      PED: "No",
      EstimatedExpiry: "Feb 8, 2034",
      IndependentClaimsCoverageBrief:
        "Claims compound Palbociclib generically.",
      ProposedStrategy: "After Expiry",
    },
    {
      ActiveIngredient: "PALBOCICLIB",
      BrandName: "IBRANCE",
      TypeOfPatent: "Drug Substance",
      EquivalentFamily: "US6936612",
      PatentNumber: "A",
      CurrentAssignee: "WARNER LAMBERT",
      Status: "Granted",
      SPC: "Granted",
      PED: "No",
      EstimatedExpiry: "Feb 8, 2034",
      IndependentClaimsCoverageBrief:
        "Claims compound Palbociclib generically.",
      ProposedStrategy: "After Expiry",
    },
  ];

  const [sideBarMaximised, setSideBarMaximised] = useState(false);

  const sideBarButtonClicked = () => {
    setSideBarMaximised(!sideBarMaximised);
  };

  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);

  const showModal = (index: number) => {
    setSelectedRowIndex(index);
  };

  const closeModal = () => {
    setSelectedRowIndex(null);
    console.log("modal closed");
    
  };

  return (
    <div className="usa-drug-profile">
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
                      <div className="text-wrapper-31">USA</div>
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
                <div className={`div-10 ${tabNo == 4 ? 'tab-click' : ''}`} onClick={() => onTabClick(4)}>
                  <div className="group-15">
                    <div className="text-wrapper-29">US Litigation</div>
                  </div>
                </div>
                <div className={`div-10 ${tabNo == 5 ? 'tab-click' : ''}`} onClick={() => onTabClick(5)}>
                  <div className="group-16">
                    <div className="text-wrapper-29">
                      API Manufacturing Status
                    </div>
                  </div>
                </div>
                <div className={`div-10 ${tabNo == 6 ? 'tab-click' : ''}`} onClick={() => onTabClick(6)}>
                  <div className="group-17">
                    <div className="text-wrapper-29">US Launch</div>
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
                    <div className="regulatory-information-row">
                      <div className="key">
                        <div className="text-wrapper-4">
                        NDA Number
                        </div>
                      </div>
                      <div className="value">
                        <div className="text-wrapper-5">{regulatoryInfo[0]?.ndaNumber}</div>
                      </div>
                      <div className="key">
                        <div className="text-wrapper-6">Date of Approval</div>
                      </div>
                      <div className="value">
                        <div className="text-wrapper-5">{regulatoryInfo[0]?.dateOfApproval}</div>
                      </div>
                      <div className="key">
                        <div className="text-wrapper-4">
                        NCE Exclusivity
                        </div>
                      </div>
                      <div className="value">
                        <div className="text-wrapper-5">{renderTextWithTooltip(regulatoryInfo[0]?.nceExclusivity, "text")}</div>
                      </div>
                    </div>
                    <div className="regulatory-information-row">
                      <div className="key">
                        <div className="text-wrapper-6">GAIN Exclusivity</div>
                      </div>
                      <div className="value">
                        <p className="p">
                          {regulatoryInfo[0]?.gainExclusivity}
                        </p>
                      </div>
                      <div className="key">
                        <div className="text-wrapper-6">Orphan Exclusivity</div>
                      </div>
                      <div className="value">
                        <div className="text-wrapper-5">{regulatoryInfo[0]?.orphanExclusivity}</div>
                      </div>
                      <div className="key">
                        <div className="text-wrapper-6">
                          Pediatric Exclusivity
                        </div>
                      </div>
                      <div className="value">
                        <p className="p">
                          {regulatoryInfo[0]?.pediatricExclusivity}
                        </p>
                      </div>
                    </div>
                    <div className="regulatory-information-row">
                      <div className="key">
                        <p className="text-wrapper-7">
                        BLA Number
                        </p>
                      </div>
                      <div className="value">
                        <div className="text-wrapper-5">{regulatoryInfo[0]?.blaNumber}</div>
                      </div>
                      <div className="key">
                        <div className="text-wrapper-6">Approved Indication</div>
                      </div>
                      <div className="value">
                        <div className="text-wrapper-5">{renderTextWithTooltip(regulatoryInfo[0]?.approvedIndication, "text")}</div>
                      </div>
                      <div className="key">
                        <div className="text-wrapper-6">Latest Indication</div>
                      </div>
                      <div className="value">
                        <div className="text-wrapper-8">
                          {regulatoryInfo[0]?.latestIndication}
                        </div>
                      </div>
                    </div>
                    <div className="regulatory-information-row" style={{borderBottom: '1px solid #d5ddf4'}}>
                      <div className="key">
                        <div className="text-wrapper-6">Approved Indication Link</div>
                      </div>
                      <div className="value">
                        <div className="text-wrapper-5"><a href={regulatoryInfo[0]?.approvedIndicationLink} target="_blank" rel="noopener noreferrer">{renderTextWithTooltip(regulatoryInfo[0]?.approvedIndicationLink, "link")}</a></div>
                      </div>
                      <div className="key">
                        <div className="text-wrapper-6">Latest Indication Link</div>
                      </div>
                      <div className="value">
                        <div className="text-wrapper-5"><a href={regulatoryInfo[0]?.latestIndicationLink} target="_blank" rel="noopener noreferrer">{renderTextWithTooltip(regulatoryInfo[0]?.latestIndicationLink, "link")}</a></div>
                      </div>
                      <div className="key">
                        <div className="text-wrapper-6">Marketing Status</div>
                      </div>
                      <div className="value">
                        <div className="text-wrapper-5">{regulatoryInfo[0]?.markettingStatus}</div>
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
                              Dosage Form
                            </div>
                          </div>
                          {ipInfo.map((row: any, index: number) => (
                            <div className="element-9">
                              <div className="text-wrapper-10">
                                {row.dosageForm}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-8">
                            <div className="text-wrapper-9">Strength</div>
                          </div>
                          {ipInfo.map((row: any, index: any) => (
                            <div className="element-9">
                              <div className="text-wrapper-10">
                                {row.strength}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-10">
                            <div className="text-wrapper-9">
                              Equivalent Family
                            </div>
                          </div>
                          {ipInfo.map((row: any, index: number) => (
                            <div className="element-11">
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
                          <div className="element-14">
                            <div className="text-wrapper-9">OB Listed</div>
                          </div>
                          {ipInfo.map((row: any, index: any) => (
                            <div className="element-15">
                              <div className="text-wrapper-11">{row.obListed}</div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-14">
                            <div className="text-wrapper-9">Status</div>
                          </div>
                          {ipInfo.map((row: any, index: any) => (
                            <div className="element-15">
                              <div className="text-wrapper-11">{row.status}</div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-14">
                            <div className="text-wrapper-9">PTE</div>
                          </div>
                          {ipInfo.map((row: any, index: any) => (
                            <div className="element-15">
                              <div className="text-wrapper-11">{row.pet}</div>
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
                                {row.ped}
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
                                {renderTextWithTooltip(row.independentClaims, "text")}
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
                </div>
              </div>
              <div className="us-litigation-container" ref={usLitigation}>
                <div className="headline-wrapper">
                  <div className="headline">
                    <div className="group-8">
                      <div className="text-wrapper">US Litigation</div>
                    </div>
                  </div>
                </div>
                <div className="d-flex" style={{width: "100%"}}>
                <div className="d-flex flex-column w-50" style={{padding:'0px 10px 40px 20px'}} >
                <div className="div-9 w-100 round-top-border-left round-top-border-right us-litigation-headers-left d-flex align-items-center" style={{
                          backgroundColor: "#FEF4EB"
                        }}>
                    <div className="div-6" style={{ width: "25%" }}>
                      <div
                        className="element-29 w-100"
                        style={{
                          border:'none',
                          height:'auto'
                        }}
                      >
                        <div className="text-wrapper-9">F2F</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "25%" }}>
                      <div
                        className="element-31 w-100"
                        style={{
                          border:'none',
                          height:'auto'
                        }}
                      >
                        <div className="text-wrapper-9">Total number of ANDAs submitted</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "25%" }}>
                      <div
                        className="element-33 w-100"
                        style={{
                          border:'none',
                          height:'auto'
                        }}
                      >
                        <div className="text-wrapper-9">
                        Date of ANDA submission
                        </div>
                      </div>
                    </div>
                    <div className="div-8" style={{ width: "25%" }}>
                      <div
                        className="frame-wrapper w-100"
                        style={{
                          border:'none',
                          height:'auto'
                        }}
                      >
                        <div className="frame-2 w-100">
                          <div className="text-wrapper-22">
                            7.5 years/30 months expiration date
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {litigationAndaFilers?.map((row, index) => (
                    <div
                      className={`div-9 w-100 us-litigation d-flex align-items-center ${
                        index == litigationAndaFilers.length - 1
                          ? "round-border-left round-border-right"
                          : ""
                      }`} style={{minHeight:"80px"}}
                    >
                      <div className="div-6" style={{ width: "25%" }}>
                        <div
                          className={`element-30 w-100 ${
                            index == litigationAndaFilers.length - 1
                              ? "round-border-left"
                              : ""
                          }`} style={{border:'none', height:'auto'}}
                        >
                          <div className="text-wrapper-10">
                            {row.f2f}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "25%" }}>
                        <div className="element-34 w-100" style={{border:'none', height:'auto'}}>
                          <div className="text-wrapper-10">{row.numberOfANDAs}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "25%" }}>
                        <div className="element-34 w-100" style={{border:'none', height:'auto'}}>
                          <div className="text-wrapper-10">
                            {row.dateOfANDAsubmission}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "25%" }}>
                        <div
                          className={`element-41 w-100 ${
                            index == litigationAndaFilers.length - 1
                              ? "round-border-right"
                              : ""
                          }`} style={{border:'none', height:'auto'}}
                        >
                          <div className="text-wrapper-10">
                            {row.monthsExpirationDate}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="d-flex flex-column w-50" style={{padding:'0px 20px 40px 10px'}} >
                <div className="div-9 w-100 round-top-border-left round-top-border-right us-litigation-headers-right d-flex align-items-center" style={{
                          backgroundColor: "#FFF4D8", height:'60px'
                        }}>
                    <div className="div-6" style={{ width: "25%" }}>
                      <div
                        className="element-29 w-100"
                        style={{
                          border:'none',
                          height:'auto',
                          background:'none'
                        }}
                      >
                        <div className="text-wrapper-9">Suitability Petition</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "25%" }}>
                      <div
                        className="element-31 w-100"
                        style={{
                          border:'none',
                          height:'auto',
                          background:'none'
                        }}
                      >
                        <div className="text-wrapper-9">Docket ID</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "25%" }}>
                      <div
                        className="element-33 w-100"
                        style={{
                          border:'none',
                          height:'auto',
                          background:'none'
                        }}
                      >
                        <div className="text-wrapper-9">
                        Filed By
                        </div>
                      </div>
                    </div>
                    <div className="div-8" style={{ width: "25%" }}>
                      <div
                        className="frame-wrapper w-100"
                        style={{
                          border:'none',
                          height:'auto',
                          background:'none'
                        }}
                      >
                        <div className="frame-2 w-100">
                          <div className="text-wrapper-22">
                            Status
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {usPetition?.map((row, index) => (
                    <div
                      className={`div-9 w-100 us-litigation-right d-flex align-items-center ${
                        index == usPetition.length - 1
                          ? "round-border-left round-border-right"
                          : ""
                      }`}
                      style={{minHeight: "80px"}}
                    >
                      <div className="div-6" style={{ width: "25%" }}>
                        <div
                          className={`element-30 w-100 ${
                            index == usPetition.length - 1
                              ? "round-border-left"
                              : ""
                          }`} style={{border:'none', height:'auto'}}
                        >
                          <div className="text-wrapper-10">
                            {row.title}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "25%" }}>
                        <div className="element-34 w-100" style={{border:'none', height:'auto'}}>
                          <div className="text-wrapper-10">{row.docketID}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "25%" }}>
                        <div className="element-34 w-100" style={{border:'none', height:'auto'}}>
                          <div className="text-wrapper-10">
                            {row.filedBy}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "25%" }}>
                        <div
                          className={`element-41 w-100 ${
                            index == usPetition.length - 1
                              ? "round-border-right"
                              : ""
                          }`} style={{border:'none', height:'auto'}}
                        >
                          <div className="text-wrapper-10">
                            {row.status}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
                <div className="litigation-brief">
                  <div className="subheading">
                    <div className="text-wrapper-21">Litigation Summary</div>
                  </div>
                  <div className="div-9">
                    <div className="div-6" style={{ width: "12%", }}>
                      <div className="element-29 w-100" style={{backgroundColor: "#ebf0fe",
                          borderColor: "#d5ddf4"}}>
                        <div className="text-wrapper-9">Case Number</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "12%", }}>
                      <div className="element-31 w-100" style={{backgroundColor: "#ebf0fe",
                          borderColor: "#d5ddf4"}}>
                        <div className="text-wrapper-9">Nature of Suit</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "12%" }}>
                      <div className="element-31 w-100" style={{backgroundColor: "#ebf0fe",
                          borderColor: "#d5ddf4"}}>
                        <div className="text-wrapper-9">Filling Date</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "13%" }}>
                      <div className="element-33 w-100" style={{backgroundColor: "#ebf0fe",
                          borderColor: "#d5ddf4"}}>
                        <div className="text-wrapper-9">
                          Court with Jurisdiction
                        </div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "14.5%" }}>
                      <div className="element-35 w-100" style={{backgroundColor: "#ebf0fe",
                          borderColor: "#d5ddf4"}}>
                        <div className="text-wrapper-9">
                          Plaintiffs and Defendants
                        </div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "11%" }}>
                      <div className="element-37 w-100" style={{backgroundColor: "#ebf0fe",
                          borderColor: "#d5ddf4"}}>
                        <div className="text-wrapper-9">Decision</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "11%" }}>
                      <div className="element-39 w-100" style={{backgroundColor: "#ebf0fe",
                          borderColor: "#d5ddf4"}}>
                        <div className="text-wrapper-9">Status</div>
                      </div>
                    </div>
                    <div className="div-8" style={{ width: "14.5%" }}>
                      <div className="frame-wrapper w-100" style={{backgroundColor: "#ebf0fe",
                          borderColor: "#d5ddf4"}}>
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
                  {litigationSummary?.map((row, index) => (
                    <div className={`div-9 litigationSummaryRows ${
                      index == litigationSummary.length - 1
                        ? "round-border-left round-border-right"
                        : ""
                    }`} onClick={() => showModal(index)} key={index}>
                      <div className="div-6" style={{ width: "12%" }} onClick={() => showModal(index)}>
                        <div
                          className={`element-30 w-100`}
                        >
                          <div className="text-wrapper-10">
                          <a href="#" style={{ color: '#030229', textDecoration: 'underline' }}>{row.caseNumber}</a>
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "12%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">{row.natureOfSuit}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "12%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">{row.filingDate}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "13%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">
                            {row.courtJurisdiction}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "14.5%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">
                            {row.plaintiffsDefendants}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "11%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">{row.decision}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "11%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">{row.status}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "14.5%" }}>
                        <div
                          className={`element-41 w-100`}
                        >
                          <div className="text-wrapper-10" style={{color: '#9D00C6', fontWeight: 'bolder'}}>
      {row.petitionNumbers.split(',').map((petitionNumber: any, idx: any) => (
        <div key={idx}>{petitionNumber}</div>
      ))}
    </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {selectedRowIndex !== null && (
                    <LitigationModal show={selectedRowIndex !== null}
                    onClose={closeModal}
                    data={litigationSummary[selectedRowIndex]}>
                    </LitigationModal>
                  )}
                </div>
                {/* <div className="detail-description w-100">
                  <div className="subheading">
                    <div className="text-wrapper-21">Detailed description of Hearings of Litigation </div>
                  </div>
                  <div className="div-9 headerFields w-100">
                    <div className="div-6" style={{ width: "12.5%" }}>
                      <div
                        className="element-29 w-100"
                        style={{
                          backgroundColor: "#F5F1FF",
                          borderColor: "#F5F1FF",
                        }}
                      >
                        <div className="text-wrapper-9">Nature of suit</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "12.5%" }}>
                      <div
                        className="element-31 w-100"
                        style={{
                          backgroundColor: "#F5F1FF",
                          borderColor: "#F5F1FF",
                        }}
                      >
                        <div className="text-wrapper-9">Case Number</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "12.5%" }}>
                      <div
                        className="element-33 w-100"
                        style={{
                          backgroundColor: "#F5F1FF",
                          borderColor: "#F5F1FF",
                        }}
                      >
                        <div className="text-wrapper-9">
                        Date
                        </div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "12.5%" }}>
                      <div
                        className="element-35 w-100"
                        style={{
                          backgroundColor: "#F5F1FF",
                          borderColor: "#F5F1FF",
                        }}
                      >
                        <div className="text-wrapper-9">
                        Court with Jurisdiction
                        </div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "12.5%" }}>
                      <div
                        className="element-35 w-100"
                        style={{
                          backgroundColor: "#F5F1FF",
                          borderColor: "#F5F1FF",
                        }}
                      >
                        <div className="text-wrapper-9">Plaintiffs and Defendants</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "12.5%" }}>
                      <div
                        className="element-37 w-100"
                        style={{
                          backgroundColor: "#F5F1FF",
                          borderColor: "#F5F1FF",
                        }}
                      >
                        <div className="text-wrapper-9">Patent Number</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "12.5%" }}>
                      <div
                        className="element-39 w-100"
                        style={{
                          backgroundColor: "#F5F1FF",
                          borderColor: "#F5F1FF",
                        }}
                      >
                        <div className="text-wrapper-9">Filing Number</div>
                      </div>
                    </div>
                    <div className="div-8" style={{ width: "12.5%" }}>
                      <div
                        className="frame-wrapper w-100"
                        style={{
                          backgroundColor: "#F5F1FF",
                          borderColor: "#F5F1FF",
                        }}
                      >
                        <div className="frame-2 w-100">
                          <div className="text-wrapper-22">
                            Proceedings in Court
                          </div>
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
                          }`} style={{borderColor: '#F5F1FF'}}
                        >
                          <div className="text-wrapper-10">
                            {row.CaseNumber}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "12.5%" }}>
                        <div className="element-34 w-100" style={{borderColor: '#F5F1FF'}}>
                          <div className="text-wrapper-10">{row.Date}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "12.5%" }}>
                        <div className="element-34 w-100" style={{borderColor: '#F5F1FF'}}>
                          <div className="text-wrapper-10">
                            {row.CourtWithJurisdiction}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "12.5%" }}>
                        <div className="element-34 w-100" style={{borderColor: '#F5F1FF'}}>
                          <div className="text-wrapper-10">
                            {row.PlaintiffsAndDefendants}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "12.5%" }}>
                        <div className="element-34 w-100" style={{borderColor: '#F5F1FF'}}>
                          <div className="text-wrapper-10">
                            {row.PatentNumber}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "12.5%" }}>
                        <div className="element-34 w-100" style={{borderColor: '#F5F1FF'}}>
                          <div className="text-wrapper-10">{row.Summary}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "12.5%" }}>
                        <div className="element-34 w-100" style={{borderColor: '#F5F1FF'}}>
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
                          }`} style={{borderColor: '#F5F1FF'}}
                        >
                          <div className="text-wrapper-10">
                            {row.ProceedingsInCourt}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
              <div className="us-launch" ref={usLaunch}>
                <div className="headline-wrapper">
                  <div className="headline">
                    <div className="group-9">
                      <div className="text-wrapper">US Launch</div>
                    </div>
                  </div>
                </div>
                <div className="litigation-detail w-100">
                  <div className="div-9 w-100">
                    <div className="div-6" style={{ width: "16.7%" }}>
                      <div
                        className="element-29 w-100"
                        style={{
                          backgroundColor: "#ebf0fe",
                          borderColor: "#D5DDF4",
                        }}
                      >
                        <div className="text-wrapper-9">Active Ingredients</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "14.7%" }}>
                      <div
                        className="element-35 w-100"
                        style={{
                          backgroundColor: "#ebf0fe",
                          borderColor: "#D5DDF4",
                        }}
                      >
                        <div className="text-wrapper-9">Dosage Form</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "10%" }}>
                      <div
                        className="element-35 w-100"
                        style={{
                          backgroundColor: "#ebf0fe",
                          borderColor: "#D5DDF4",
                        }}
                      >
                        <div className="text-wrapper-9">Route</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "13.7%" }}>
                      <div
                        className="element-31 w-100"
                        style={{
                          backgroundColor: "#ebf0fe",
                          borderColor: "#D5DDF4",
                        }}
                      >
                        <div className="text-wrapper-9" style={{paddingTop: '0px'}}>Brand Name</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "11.7%" }}>
                      <div
                        className="element-37 w-100"
                        style={{
                          backgroundColor: "#ebf0fe",
                          borderColor: "#D5DDF4",
                        }}
                      >
                        <div className="text-wrapper-9">Manufacturer</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "17.6%" }}>
                      <div
                        className="element-33 w-100"
                        style={{
                          backgroundColor: "#ebf0fe",
                          borderColor: "#D5DDF4",
                        }}
                      >
                        <div className="text-wrapper-9">Strength</div>
                      </div>
                    </div>
                    <div className="div-8" style={{ width: "15.6%" }}>
                      <div
                        className="frame-wrapper w-100"
                        style={{
                          backgroundColor: "#ebf0fe",
                          borderColor: "#D5DDF4",
                        }}
                      >
                        <div className="frame-2 w-100">
                          <div className="text-wrapper-22">Marketing Status</div>
                        </div>
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
                            {row.ActiveIngredients}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "14.7%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">
                            {row.BrandNames}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "10%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">{row.Strengths}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "13.7%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">
                            {row.DosageForm}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "11.7%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">{row.Route}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "17.6%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">{row.Country}</div>
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
                          <div className="text-wrapper-10" style={{backgroundColor: "#DCFAF8", borderRadius:'20px', padding:'10px', textAlign: 'center'}}>{row.Marketers}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="api-manufacturing-status" ref={apiManufacturingRef}>
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
                          <div className="text-wrapper-9" style={{paddingTop: '0px'}}>Brand name</div>
                        </div>
                        {patentData.map((row, index) => (
                          <div
                            className={
                              index == patentData.length - 1
                                ? "element-5"
                                : "element-4"
                            }
                          >
                            <div className="text-wrapper-10" style={{paddingTop: '0px'}}>
                              {row.BrandName}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="column-scroll" style={{ width: "70%" }}>
                        <div className="div-6" style={{ width: "20%" }}>
                          <div className="element-6">
                            <div className="text-wrapper-9">DMF#</div>
                          </div>
                          {patentData.map((row, index) => (
                            <div className={`element-7 ${index === patentData.length-1 ? 'scroll-margin' : ''}`}>
                              <div className="text-wrapper-10">
                                {row.ActiveIngredient}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6" style={{ width: "20%" }}>
                          <div className="element-6">
                            <div className="text-wrapper-9">Status</div>
                          </div>
                          {patentData.map((row, index) => (
                            <div className="element-7">
                              <div className="text-wrapper-10">
                                {row.TypeOfPatent}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6" style={{ width: "20%" }}>
                          <div className="element-8">
                            <div className="text-wrapper-9">Type</div>
                          </div>
                          {patentData.map((row, index) => (
                            <div className="element-9">
                              <div className="text-wrapper-10">
                                {row.EquivalentFamily}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6" style={{ width: "20%" }}>
                          <div className="element-8">
                            <div className="text-wrapper-9">Submit Date</div>
                          </div>
                          {patentData.map((row, index) => (
                            <div className="element-9">
                              <div className="text-wrapper-10">
                                {row.PatentNumber}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6" style={{ width: "20%" }}>
                          <div className="element-10">
                            <div className="text-wrapper-9">Holder</div>
                          </div>
                          {patentData.map((row, index) => (
                            <div className="element-11">
                              <div className="text-wrapper-10">
                                {row.CurrentAssignee}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="div-7" style={{ width: "15%" }}>
                          <div className="element-12">
                            <div className="text-wrapper-9">Active Ingredient</div>
                          </div>
                          {patentData.map((row, index) => (
                            <div className="element-13">
                              <div className="text-wrapper-10">
                                {row.Status}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-14">
                            <div className="text-wrapper-9">Manufacturer Country</div>
                          </div>
                          {patentData.map((row, index) => (
                            <div className="element-15">
                              <div className="text-wrapper-10">{row.SPC}</div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-14">
                            <div className="text-wrapper-9">Active US DMF</div>
                          </div>
                          {patentData.map((row, index) => (
                            <div className="element-15">
                              <div className="text-wrapper-11">{row.PED}</div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-10">
                            <div className="text-wrapper-9">
                              Active Korean DMF
                            </div>
                          </div>
                          {patentData.map((row, index) => (
                            <div className="element-11">
                              <div className="text-wrapper-11">
                                {row.EstimatedExpiry}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-17">
                            <div className="text-wrapper-9">
                              Active Japanese DMF
                            </div>
                          </div>
                          {patentData.map((row, index) => (
                            <div className="element-18">
                              <div className="text-wrapper-10">
                                {row.IndependentClaimsCoverageBrief}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-17">
                            <div className="text-wrapper-9">
                              Active COS
                            </div>
                          </div>
                          {patentData.map((row, index) => (
                            <div className="element-18">
                              <div className="text-wrapper-10">
                                {row.IndependentClaimsCoverageBrief}
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
                        {patentData.map((row, index) => (
                          <div
                            className={`${
                              index == patentData.length - 1
                                ? "element-21"
                                : "element-20"
                            } w-100`}
                          >
                            <div className="text-wrapper-10">
                              {row.ProposedStrategy}
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
              <div className="clinical-trials" ref={clinicalTrialsRef}>
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
                        <div className="text-wrapper-9" style={{paddingTop: '0px'}}>Active Ingredients</div>
                      </div>
                      {patentData.map((row, index) => (
                        <div
                          className={
                            index == patentData.length - 1
                              ? "element-5"
                              : "element-4"
                          }
                        >
                          <div className="text-wrapper-10" style={{paddingTop: '0px'}}>{row.BrandName}</div>
                        </div>
                      ))}
                    </div>
                    <div className="column-scroll">
                      <div className="div-6">
                        <div className="element-6">
                          <div className="text-wrapper-9">Title</div>
                        </div>
                        {patentData.map((row, index) => (
                          <div className={`element-7 ${index === patentData.length-1 ? 'scroll-margin' : ''}`}>
                            <div className="text-wrapper-10">
                              {row.ActiveIngredient}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="div-6">
                        <div className="element-6">
                          <div className="text-wrapper-9">
                            Status
                          </div>
                        </div>
                        {patentData.map((row, index) => (
                          <div className="element-7">
                            <div className="text-wrapper-10">
                              {row.TypeOfPatent}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="div-6">
                        <div className="element-8">
                          <div className="text-wrapper-9">Study Results</div>
                        </div>
                        {patentData.map((row, index) => (
                          <div className="element-9">
                            <div className="text-wrapper-10">
                              {row.EquivalentFamily}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="div-6">
                        <div className="element-8">
                          <div className="text-wrapper-9">Conditions</div>
                        </div>
                        {patentData.map((row, index) => (
                          <div className="element-9">
                            <div className="text-wrapper-10">
                              {row.PatentNumber}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="div-6">
                        <div className="element-10">
                          <div className="text-wrapper-9">Interventions</div>
                        </div>
                        {patentData.map((row, index) => (
                          <div className="element-11">
                            <div className="text-wrapper-10">
                              {row.CurrentAssignee}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="div-7">
                        <div className="element-12">
                          <div className="text-wrapper-9">Outcome Measures</div>
                        </div>
                        {patentData.map((row, index) => (
                          <div className="element-13">
                            <div className="text-wrapper-10">{row.Status}</div>
                          </div>
                        ))}
                      </div>
                      <div className="div-6">
                        <div className="element-14">
                          <div className="text-wrapper-9">Sponsers/Collaborators</div>
                        </div>
                        {patentData.map((row, index) => (
                          <div className="element-15">
                            <div className="text-wrapper-10">{row.SPC}</div>
                          </div>
                        ))}
                      </div>
                      <div className="div-6">
                        <div className="element-14">
                          <div className="text-wrapper-9">Phases</div>
                        </div>
                        {patentData.map((row, index) => (
                          <div className="element-15">
                            <div className="text-wrapper-11">{row.PED}</div>
                          </div>
                        ))}
                      </div>
                      <div className="div-6">
                        <div className="element-10">
                          <div className="text-wrapper-9">
                            Study Type
                          </div>
                        </div>
                        {patentData.map((row, index) => (
                          <div className="element-11">
                            <div className="text-wrapper-11">
                              {row.EstimatedExpiry}
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
                      {patentData.map((row, index) => (
                        <div
                          className={`${
                            index == patentData.length - 1
                              ? "element-21"
                              : "element-20"
                          } w-100`}
                        >
                          <div className="text-wrapper-10">
                            {row.ProposedStrategy}
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
