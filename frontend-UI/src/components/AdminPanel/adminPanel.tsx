import React, { useEffect, useRef, useState } from "react";
import "./adminPanel.css";
import { useNavigate } from "react-router-dom";

export const AdminPanel = () => {

  const [showSCP, setShowSCP] = useState(false);

  const navigate = useNavigate();
  const [tabNo, setTabNo] = useState(1);

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

  // Scroll function to scroll a given ref into view
  const scrollIntoView = (ref: React.RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

  const manufacturingStatusData: any[] = [
    {
      BrandName: "Ibrance",
      DMF: "32273",
      STATUS: "A",
      TYPE: "II",
      SUBMIT_DATE: "23/03/2018",
      HOLDER: "HETERO LABS LTD",
      ActiveIngredient: "PALBOCICLIB",
      ActiveUSDM: "INDIA",
      ActiveUSDMF: "Y",
      ActiveKoreanDMF: "-",
      ActiveJapaneseDMF: "-",
      ActiveCOS: "-",
      GDUFAFeesPayment: "03/04/2018",
    },
    {
      BrandName: "Ibrance",
      DMF: "32294",
      STATUS: "A",
      TYPE: "II",
      SUBMIT_DATE: "21/12/2017",
      HOLDER: "MYLAN LABORATORIES LTD",
      ActiveIngredient: "PALBOCICLIB",
      ActiveUSDM: "INDIA",
      ActiveUSDMF: "Y",
      ActiveKoreanDMF: "-",
      ActiveJapaneseDMF: "-",
      ActiveCOS: "-",
      GDUFAFeesPayment: "03/04/2018",
    },
    {
      BrandName: "Ibrance",
      DMF: "32294",
      STATUS: "A",
      TYPE: "II",
      SUBMIT_DATE: "21/12/2017",
      HOLDER: "MYLAN LABORATORIES LTD",
      ActiveIngredient: "PALBOCICLIB",
      ActiveUSDM: "INDIA",
      ActiveUSDMF: "Y",
      ActiveKoreanDMF: "-",
      ActiveJapaneseDMF: "-",
      ActiveCOS: "-",
      GDUFAFeesPayment: "03/04/2018",
    },
    {
      BrandName: "Ibrance",
      DMF: "32294",
      STATUS: "A",
      TYPE: "II",
      SUBMIT_DATE: "21/12/2017",
      HOLDER: "MYLAN LABORATORIES LTD",
      ActiveIngredient: "PALBOCICLIB",
      ActiveUSDM: "INDIA",
      ActiveUSDMF: "Y",
      ActiveKoreanDMF: "-",
      ActiveJapaneseDMF: "-",
      ActiveCOS: "-",
      GDUFAFeesPayment: "03/04/2018",
    },
    {
      BrandName: "Ibrance",
      DMF: "32294",
      STATUS: "A",
      TYPE: "II",
      SUBMIT_DATE: "21/12/2017",
      HOLDER: "MYLAN LABORATORIES LTD",
      ActiveIngredient: "PALBOCICLIB",
      ActiveUSDM: "INDIA",
      ActiveUSDMF: "Y",
      ActiveKoreanDMF: "-",
      ActiveJapaneseDMF: "-",
      ActiveCOS: "-",
      GDUFAFeesPayment: "03/04/2018",
    },
    {
      BrandName: "Ibrance",
      DMF: "32294",
      STATUS: "A",
      TYPE: "II",
      SUBMIT_DATE: "21/12/2017",
      HOLDER: "MYLAN LABORATORIES LTD",
      ActiveIngredient: "PALBOCICLIB",
      ActiveUSDM: "INDIA",
      ActiveUSDMF: "Y",
      ActiveKoreanDMF: "-",
      ActiveJapaneseDMF: "-",
      ActiveCOS: "-",
      GDUFAFeesPayment: "03/04/2018",
    },
    {
      BrandName: "Ibrance",
      DMF: "32294",
      STATUS: "A",
      TYPE: "II",
      SUBMIT_DATE: "21/12/2017",
      HOLDER: "MYLAN LABORATORIES LTD",
      ActiveIngredient: "PALBOCICLIB",
      ActiveUSDM: "INDIA",
      ActiveUSDMF: "Y",
      ActiveKoreanDMF: "-",
      ActiveJapaneseDMF: "-",
      ActiveCOS: "-",
      GDUFAFeesPayment: "03/04/2018",
    },
    {
      BrandName: "Ibrance",
      DMF: "32646",
      STATUS: "A",
      TYPE: "II",
      SUBMIT_DATE: "28/03/2018",
      HOLDER: "BIOPHORE INDIA PHARMACEUTICALS PVT LTD",
      ActiveIngredient: "ALBOCICLIB (NON-STERILE DRUG SUBSTANCE)",
      ActiveUSDM: "INDIA",
      ActiveUSDMF: "Y",
      ActiveKoreanDMF: "-",
      ActiveJapaneseDMF: "-",
      ActiveCOS: "-",
      GDUFAFeesPayment: "03/04/2018",
    },
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

  const litigationDetailData: any[] = [
    {
      CaseNumber: "Patent - Abbreviated New Drug Application(ANDA)",
      Date: "1:21-cv-01567",
      CourtWithJurisdiction: "-",
      PlaintiffsAndDefendants: "Delaware District Court",
      PatentNumber: "Eli Lilly & Co v. MSN LABORATORIES PVT., LTD.",
      Summary: "US6936612",
      FilingNumber: "-",
      ProceedingsInCourt:
        "Stipulation and Order to Consolidate C.A. No. 23-1277 JLH with C.A. No. 22-1114 JLH. Signed by Judge Jennifer L. Hall on 1/17/2024. Associated Cases: 1:22-cv-01114-JLH, 1:23-cv-01277-JLH",
    },
    {
      CaseNumber: "Patent - Abbreviated New Drug Application(ANDA)",
      Date: "-",
      CourtWithJurisdiction: "January 17, 2024",
      PlaintiffsAndDefendants: "-",
      PatentNumber: "-",
      Summary: "-",
      FilingNumber: "-",
      ProceedingsInCourt:
        "Case Reassigned to Judge Jennifer L. Hall. - Associated Cases: 1:22-cv-01114-JLH, 1:22-cv-01115-JLH, 1:23-cv-01277-JLH",
    },
  ];

  const litigationBriefData: any[] = [
    {
      CaseNumber: "1:21-cv-00284",
      Date: "Feb 24, 2021",
      CourtWithJurisdiction: "Delaware District Court",
      PlaintiffsAndDefendants: "Pfizer Inc. v. Synthon Pharmaceuticals, Inc.",
      Decision: "",
      Status: "Closed",
      PatentNumbers: "US6936612",
    },
  ];

  const patentLastData: any[] = [
    {
      BrandName: "IBRANCE",
      ActiveIngredient: "PALBOCICLIB",
      Country: "AT",
      Status: "Granted",
      Expiry: "Jan 10, 2028",
    },
    {
      BrandName: "IBRANCE",
      ActiveIngredient: "PALBOCICLIB",
      Country: "AT",
      Status: "Granted",
      Expiry: "Jan 10, 2028",
    },
    {
      BrandName: "IBRANCE",
      ActiveIngredient: "PALBOCICLIB",
      Country: "AT",
      Status: "Granted",
      Expiry: "Jan 10, 2028",
    },
    {
      BrandName: "IBRANCE",
      ActiveIngredient: "PALBOCICLIB",
      Country: "AT",
      Status: "Granted",
      Expiry: "Jan 10, 2028",
    },
    {
      BrandName: "IBRANCE",
      ActiveIngredient: "PALBOCICLIB",
      Country: "AT",
      Status: "Granted",
      Expiry: "Jan 10, 2028",
    },
    {
      BrandName: "IBRANCE",
      ActiveIngredient: "PALBOCICLIB",
      Country: "AT",
      Status: "Granted",
      Expiry: "Jan 10, 2028",
    },
    {
      BrandName: "IBRANCE",
      ActiveIngredient: "PALBOCICLIB",
      Country: "AT",
      Status: "Granted",
      Expiry: "Jan 10, 2028",
    },
    {
      BrandName: "IBRANCE",
      ActiveIngredient: "PALBOCICLIB",
      Country: "AT",
      Status: "Granted",
      Expiry: "Jan 10, 2028",
    },
    {
      BrandName: "IBRANCE",
      ActiveIngredient: "PALBOCICLIB",
      Country: "BE",
      Status: "Granted",
      Expiry: "Jan 10, 2028",
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

  const drugs: any[] = [
    {
      brandName: "IBRANCE",
      activeIngredient: "PALBOCICLIB",
      company: "PFIZER INC",
      therapeuticClass: "Antineoplastics",
      dosageForm: "Tablet",
      strengths: [
        { strength: "75mg", route: "Oral" },
        { strength: "100mg", route: "Oral" },
        { strength: "125mg", route: "Oral" }
      ]
    }
  ];
  

  const [sideBarMaximised, setSideBarMaximised] = useState(false);

  const sideBarButtonClicked = () => {
    setSideBarMaximised(!sideBarMaximised);
  };

  return (
    <div className="europe-drug-profile">
      <div className="div_1">
        <div className="overlap">
        <div className="dashboard-links">
            <div className="drugs-selected" onClick={sideBarButtonClicked}>
              <img
                className="img-2"
                alt="Drugs"
                src="../src/assets/vectors/Vector14_x2.svg"
              />
              <div className="text-wrapper-35">Drugs</div>
            </div>
            <div className="home">
              <img
                className="img-2"
                alt="Home"
                src="../src/assets/vectors/Vector48_x2.svg"
              />
              <div className="text-wrapper-36">Home</div>
            </div>
            <div className="history">
              <img
                className="img-2"
                alt="History"
                src="../src/assets/vectors/Vector244_x2.svg"
              />
              <div className="text-wrapper-36">History</div>
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
          <div style={{width:'-webkit-fill-available', display: 'flex', flexDirection: 'column'}}>
          <div className="search-term-sub-menu">
              <div className="search-term">
                <div className="search-term-region">
                  <div className="heading-4">
                    <div className="text-wrapper-30">Paracetamol</div>
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
                    <img
                      className="arrow-down"
                      alt="Arrow down"
                      src="../src/assets/vectors/Xmlid22228_x2.svg"
                    />
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
              <div className="div-2" ref={productKeyInsights}>
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
      {drugs.map((drug, index) => (
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
              <div className="IBRANCE text-wrapper-3">
                {drug.dosageForm}
              </div>
            </div>
          </td>
          <td className="product-info-table-cell">
            <div className="table-cell">
              {drug.strengths.map((strengthObj: any, idx: number) => (
                <div key={idx} className={`IBRANCE text-wrapper-3 ${(idx !== 0 && idx !== drug.strengths.length-1) ? 'strength-route-margin' : ''}`}>
                  {strengthObj.strength}
                </div>
              ))}
            </div>
          </td>
          <td className="product-info-table-cell">
            <div className="table-cell">
              {drug.strengths.map((strengthObj: any, idx: number) => (
                <div key={idx} className={`IBRANCE text-wrapper-3 ${(idx !== 0 && idx !== drug.strengths.length-1) ? 'strength-route-margin' : ''}`}>
                  {strengthObj.route}
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
              <div className="div-2" ref={regulatoryInformation}>
                <div className="headline-wrapper">
                  <div className="headline">
                    <div className="group-2">
                      <div className="text-wrapper">Regulatory Information</div>
                    </div>
                  </div>
                </div>
                <div className="table-head-content">
                  <div className="div-3">
                    <div className="row">
                      <div className="NDA-number">
                        <div className="text-wrapper-4">
                          Agency Product Number
                        </div>
                      </div>
                      <div className="div-wrapper-2">
                        <div className="text-wrapper-5">EMEA/H/C/003853</div>
                      </div>
                      <div className="div-wrapper-3">
                        <div className="text-wrapper-6">Date of Approval</div>
                      </div>
                      <div className="div-wrapper-2">
                        <div className="text-wrapper-5">Nov 9, 2016</div>
                      </div>
                      <div className="div-wrapper-3">
                        <div className="text-wrapper-4">
                          Data + Marketing Exclusivity
                        </div>
                      </div>
                      <div className="div-wrapper-2">
                        <div className="text-wrapper-5">Nov 9, 2026</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="GAIN-exclusivity">
                        <div className="text-wrapper-6">Orphan Exclusivity</div>
                      </div>
                      <div className="not-applicable">
                        <p className="p">
                          May 30, 2017; Treatment of spinal muscular atrophy
                          (SMA) in pediatric and adult patients.
                        </p>
                      </div>
                      <div className="div-wrapper-4">
                        <div className="text-wrapper-6">SPC</div>
                      </div>
                      <div className="not-applicable">
                        <div className="text-wrapper-5">Granted</div>
                      </div>
                      <div className="div-wrapper-4">
                        <div className="text-wrapper-6">
                          Pediatric Exclusivity
                        </div>
                      </div>
                      <div className="not-applicable">
                        <p className="p">
                          Yes <br />
                          Date of completion of the paediatric investigation
                          plan by August 2017
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="div-wrapper-therapy">
                        <p className="text-wrapper-7">
                          Therapy Area/ Mechanism of action
                        </p>
                      </div>
                      <div className="div-wrapper-6">
                        <div className="text-wrapper-5">Breast cancer</div>
                      </div>
                      <div className="div-wrapper-7">
                        <div className="text-wrapper-6">BCS Class</div>
                      </div>
                      <div className="div-wrapper-6">
                        <div className="text-wrapper-5">Class II</div>
                      </div>
                      <div className="div-wrapper-7">
                        <div className="text-wrapper-6">Label</div>
                      </div>
                      <div className="div-wrapper-6">
                        <div className="text-wrapper-8">
                          Latest indication PDF attach
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="div-wrapper-submission">
                        <div className="text-wrapper-6">Submission</div>
                      </div>
                      <div className="div-wrapper-6">
                        <div className="text-wrapper-5">Centralized</div>
                      </div>
                      <div className="div-wrapper-7">
                        <div className="text-wrapper-6">Review Priority</div>
                      </div>
                      <div className="div-wrapper-6">
                        <div className="text-wrapper-5">PRIORITY</div>
                      </div>
                      <div className="div-wrapper-7">
                        <div className="text-wrapper-6">Marketing Status</div>
                      </div>
                      <div className="div-wrapper-6">
                        <div className="text-wrapper-5">Prescription</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="div-wrapper-submission">
                        <div className="text-wrapper-6">Specific Technology if any</div>
                      </div>
                      <div className="div-wrapper-6">
                        <div className="text-wrapper-5">None</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-4" ref={intellectualPropertyPatents}>
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
                          <div className="text-wrapper-9">Brand name</div>
                        </div>
                        {patentData.map((row, index) => (
                          <div
                            className={
                              index == patentData.length - 1
                                ? "element-5"
                                : "element-4"
                            }
                          >
                            <div className="text-wrapper-10">
                              {row.BrandName}
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
                            <div className="text-wrapper-9">Type of patent</div>
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
                            <div className="text-wrapper-9">
                              Equivalent Family
                            </div>
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
                            <div className="text-wrapper-9">Patent number</div>
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
                            <div className="text-wrapper-9">
                              Current Assignee
                            </div>
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
                            <div className="text-wrapper-9">Status</div>
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
                            <div className="text-wrapper-9">SPC</div>
                          </div>
                          {patentData.map((row, index) => (
                            <div className="element-15">
                              <div className="text-wrapper-10">{row.SPC}</div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-14">
                            <div className="text-wrapper-9">PED</div>
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
                              Estimated expiry&nbsp;&nbsp;
                              <br />
                              (inc. PTE PED)
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
                              Independent claims coverage brief
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
                  <div className="summary-perception">
                  <div className="div-5">
                  <div className="content">
                        <div className="text-wrapper" style={{position: 'relative', color:'black'}}>Launch Probability</div>
                    </div>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="logo_container" style={{display:'flex'}}>
                                    <span style={{fontSize:'2.3rem', fontWeight:'700', fontStyle:'normal'}}>60</span>
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
                            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
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
                          <p className="span-wrapper">
                            <span className="text-wrapper-16">
                              The brand drug&#39;s exclusive marketing rights
                              prevents generics from launching until November 9,
                              2026. <br />
                            </span>
                          </p>
                          <p className="span-wrapper">
                            <span className="text-wrapper-16">
                              Companies can begin selling generic versions of
                              the drug after January 10, 2028, after the product
                              patent EP&#39;124 expires (including any
                              Supplementary Protection Certificate, which might
                              be extended by 6 months if a Pediatric Extension
                              of Data is granted). The generic versions must
                              have a different composition as in EP&#39;565 and
                              use a crystalline form other than A covered in
                              EP&#39; 916, EP&#39;475, both of which cannot
                              infringe on the original patent. <br />
                            </span>
                          </p>
                          <p className="span-wrapper">
                            <span className="text-wrapper-16">
                              Companies can start selling generic versions of
                              the drug with same crystalline form and
                              composition after the composition patent
                              EP&#39;565 expires on May 24, 2036.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {showSCP && (
                    <div className="div-3">
                    <div className="div-9 w-100 property-patents-second-table">
                      <div className="brand-name">
                        <div className="group-4">
                          <div className="text-wrapper-17">Brand name</div>
                        </div>
                      </div>
                      <div className="active-ingredient">
                        <div className="group-5">
                          <div className="text-wrapper-18">
                            Active ingredient
                          </div>
                        </div>
                      </div>
                      <div className="Country">
                        <div className="group-5">
                          <div className="text-wrapper-18">COUNTRY</div>
                        </div>
                      </div>
                      <div className="ep">
                        <div className="title">
                          <div className="group-6">
                            <div className="text-wrapper-19">EP1470124</div>
                          </div>
                        </div>
                        <div className="status">
                          <div className="group-7">
                            <div className="text-wrapper-20">Status</div>
                          </div>
                        </div>
                        <div className="expiry">
                          <div className="group-7">
                            <div className="text-wrapper-20">Expiry</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {patentLastData.map((row, index) => (
                      <div className="div-9 w-100">
                        <div
                          className={`element-23 ${
                            index == patentLastData.length - 1
                              ? "round-border-left"
                              : ""
                          }`}
                        >
                          <div className="text-wrapper-10">IBRANCE</div>
                        </div>
                        <div className="element-24">
                          <div className="text-wrapper-10">PALBOCICLIB</div>
                        </div>
                        <div className="element-25" style={{ width: "20%" }}>
                          <div className="text-wrapper-10">AT</div>
                        </div>
                        <div className="element-25" style={{ width: "20%" }}>
                          <div className="text-wrapper-10">Granted</div>
                        </div>
                        <div
                          className={`element-26 ${
                            index == patentLastData.length - 1
                              ? "round-border-right"
                              : ""
                          }`}
                        >
                          <div className="text-wrapper-10">Jan 10, 2028</div>
                        </div>
                      </div>
                    ))}
                  </div>
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
                            {row.ActiveIngredients}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "13.7%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">
                            {row.BrandNames}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "17.6%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">{row.Strengths}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "14.7%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">
                            {row.DosageForm}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "10%" }}>
                        <div className="element-34 w-100">
                          <div className="text-wrapper-10">{row.Route}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "11.7%" }}>
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
                          <div className="text-wrapper-10">{row.Marketers}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
                        {patentData.map((row, index) => (
                          <div
                            className={
                              index == patentData.length - 1
                                ? "element-5"
                                : "element-4"
                            }
                          >
                            <div className="text-wrapper-10">
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
                            <div className="text-wrapper-9">Status</div>
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
                            <div className="text-wrapper-9">SPC</div>
                          </div>
                          {patentData.map((row, index) => (
                            <div className="element-15">
                              <div className="text-wrapper-10">{row.SPC}</div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-14">
                            <div className="text-wrapper-9">PED</div>
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
                              Estimated expiry&nbsp;&nbsp;
                              <br />
                              (inc. PTE PED)
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
                              Independent claims coverage brief
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
                      {patentData.map((row, index) => (
                        <div
                          className={
                            index == patentData.length - 1
                              ? "element-5"
                              : "element-4"
                          }
                        >
                          <div className="text-wrapper-10">{row.BrandName}</div>
                        </div>
                      ))}
                    </div>
                    <div className="column-scroll">
                      <div className="div-6">
                        <div className="element-6">
                          <div className="text-wrapper-9">EudraCT Number</div>
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
                            National Competent Authority
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
                          <div className="text-wrapper-9">Trial Status</div>
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
                          <div className="text-wrapper-9">Patent number</div>
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
                          <div className="text-wrapper-9">Current Assignee</div>
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
                          <div className="text-wrapper-9">Status</div>
                        </div>
                        {patentData.map((row, index) => (
                          <div className="element-13">
                            <div className="text-wrapper-10">{row.Status}</div>
                          </div>
                        ))}
                      </div>
                      <div className="div-6">
                        <div className="element-14">
                          <div className="text-wrapper-9">SPC</div>
                        </div>
                        {patentData.map((row, index) => (
                          <div className="element-15">
                            <div className="text-wrapper-10">{row.SPC}</div>
                          </div>
                        ))}
                      </div>
                      <div className="div-6">
                        <div className="element-14">
                          <div className="text-wrapper-9">PED</div>
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
                            Estimated expiry&nbsp;&nbsp;
                            <br />
                            (inc. PTE PED)
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
                            Independent claims coverage brief
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
