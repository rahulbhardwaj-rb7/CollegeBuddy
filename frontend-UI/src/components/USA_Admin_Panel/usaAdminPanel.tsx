import React, { useState } from "react";
import "./usaAdminPanel.css";
import { useNavigate } from "react-router-dom";

export const USAAdminPanel = () => {

  const navigate = useNavigate();
  const [tabNo, setTabNo] = useState(1);

  const onTabClick = (tab: any) => {
    setTabNo(tab);
  }

  const onLogOutClick = () => {
    navigate('/');
  }

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
      strength: "75mg",
      route: "Oral",
    },
    {
      brandName: "IBRANCE",
      activeIngredient: "PALBOCICLIB",
      company: "PFIZER INC",
      therapeuticClass: "Antineoplastics",
      dosageForm: "Tablet",
      strength: "100mg",
      route: "Oral",
    },
    {
      brandName: "IBRANCE",
      activeIngredient: "PALBOCICLIB",
      company: "PFIZER INC",
      therapeuticClass: "Antineoplastics",
      dosageForm: "Tablet",
      strength: "125mg",
      route: "Oral",
    },
  ];

  const [sideBarMaximised, setSideBarMaximised] = useState(true);

  const sideBarButtonClicked = () => {
    setSideBarMaximised(!sideBarMaximised);
  };

  return (
    <div className="usa-drug-profile">
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
          <div className="dashboard">
            <div className="dashboard-2">
              <div className="product-information">
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
                          <div className="table-label">Strength</div>
                        </th>
                        <th>
                          <div className="table-label">Route</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {drugs.map((drug: any, index: any) => (
                        <tr>
                          <td>
                            <div className="table-cell">
                              <div className="IBRANCE text-wrapper-3">
                                {drug.brandName}
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="table-cell">
                              <div className="IBRANCE text-wrapper-3">
                                {drug.activeIngredient}
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="table-cell">
                              <div className="IBRANCE text-wrapper-3">
                                {drug.company}
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="table-cell">
                              <div className="IBRANCE text-wrapper-3">
                                {drug.therapeuticClass}
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="table-cell">
                              <div className="IBRANCE text-wrapper-3">
                                {drug.dosageForm}
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="table-cell">
                              <div className="IBRANCE text-wrapper-3">
                                {drug.strength}
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="table-cell">
                              <div className="IBRANCE text-wrapper-3">
                                {drug.route}
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="regulatory-information">
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
                        NDA Number/ BLA Number
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
                        NCE Exclusivity
                        </div>
                      </div>
                      <div className="div-wrapper-2">
                        <div className="text-wrapper-5">Nov 9, 2026</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="GAIN-exclusivity">
                        <div className="text-wrapper-6">GAIN Exclusivity</div>
                      </div>
                      <div className="not-applicable">
                        <p className="p">
                          May 30, 2017; Treatment of spinal muscular atrophy
                          (SMA) in pediatric and adult patients.
                        </p>
                      </div>
                      <div className="div-wrapper-4">
                        <div className="text-wrapper-6">Orphan Exclusivity</div>
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
                      <div className="div-wrapper-7">
                        <div className="text-wrapper-6">Citizen Petition</div>
                      </div>
                      <div className="div-wrapper-6">
                        <div className="text-wrapper-5">None</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="intellectual-property-patents">
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
                              Dosage Form
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
                            <div className="text-wrapper-9">Strength</div>
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
                              Equivalent Family
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
                            <div className="text-wrapper-9">Patent Number</div>
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
                            <div className="text-wrapper-9">Current Assignee</div>
                          </div>
                          {patentData.map((row, index) => (
                            <div className="element-15">
                              <div className="text-wrapper-10">{row.SPC}</div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-14">
                            <div className="text-wrapper-9">OB Listed</div>
                          </div>
                          {patentData.map((row, index) => (
                            <div className="element-15">
                              <div className="text-wrapper-11">{row.PED}</div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-14">
                            <div className="text-wrapper-9">Status</div>
                          </div>
                          {patentData.map((row, index) => (
                            <div className="element-15">
                              <div className="text-wrapper-11">{row.PED}</div>
                            </div>
                          ))}
                        </div>
                        <div className="div-6">
                          <div className="element-14">
                            <div className="text-wrapper-9">PTE</div>
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
                </div>
              </div>
              <div className="us-litigation-container">
                <div className="headline-wrapper">
                  <div className="headline">
                    <div className="group-8">
                      <div className="text-wrapper">US Litigation</div>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
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
                  {litigationDetailData?.map((row, index) => (
                    <div
                      className={`div-9 w-100 us-litigation d-flex align-items-center ${
                        index == litigationDetailData.length - 1
                          ? "round-border-left round-border-right"
                          : ""
                      }`}
                    >
                      <div className="div-6" style={{ width: "25%" }}>
                        <div
                          className={`element-30 w-100 ${
                            index == litigationDetailData.length - 1
                              ? "round-border-left"
                              : ""
                          }`} style={{border:'none', height:'auto'}}
                        >
                          <div className="text-wrapper-10">
                            {row.CaseNumber}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "25%" }}>
                        <div className="element-34 w-100" style={{border:'none', height:'auto'}}>
                          <div className="text-wrapper-10">{row.Date}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "25%" }}>
                        <div className="element-34 w-100" style={{border:'none', height:'auto'}}>
                          <div className="text-wrapper-10">
                            {row.CourtWithJurisdiction}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "25%" }}>
                        <div
                          className={`element-41 w-100 ${
                            index == litigationDetailData.length - 1
                              ? "round-border-right"
                              : ""
                          }`} style={{border:'none', height:'auto'}}
                        >
                          <div className="text-wrapper-10">
                            {row.ProceedingsInCourt}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="d-flex flex-column w-50" style={{padding:'0px 20px 40px 10px'}} >
                <div className="div-9 w-100 round-top-border-left round-top-border-right us-litigation-headers-right d-flex align-items-center" style={{
                          backgroundColor: "#FFF4D8", height:'77px'
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
                  {litigationDetailData?.map((row, index) => (
                    <div
                      className={`div-9 w-100 us-litigation-right d-flex align-items-center ${
                        index == litigationDetailData.length - 1
                          ? "round-border-left round-border-right"
                          : ""
                      }`}
                    >
                      <div className="div-6" style={{ width: "25%" }}>
                        <div
                          className={`element-30 w-100 ${
                            index == litigationDetailData.length - 1
                              ? "round-border-left"
                              : ""
                          }`} style={{border:'none', height:'auto'}}
                        >
                          <div className="text-wrapper-10">
                            {row.CaseNumber}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "25%" }}>
                        <div className="element-34 w-100" style={{border:'none', height:'auto'}}>
                          <div className="text-wrapper-10">{row.Date}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "25%" }}>
                        <div className="element-34 w-100" style={{border:'none', height:'auto'}}>
                          <div className="text-wrapper-10">
                            {row.CourtWithJurisdiction}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "25%" }}>
                        <div
                          className={`element-41 w-100 ${
                            index == litigationDetailData.length - 1
                              ? "round-border-right"
                              : ""
                          }`} style={{border:'none', height:'auto'}}
                        >
                          <div className="text-wrapper-10">
                            {row.ProceedingsInCourt}
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
                    <div className="div-6" style={{ width: "14.7%", }}>
                      <div className="element-29 w-100" style={{backgroundColor: "#ebf0fe",
                          borderColor: "#d5ddf4"}}>
                        <div className="text-wrapper-9">Case Number</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "13.7%" }}>
                      <div className="element-31 w-100" style={{backgroundColor: "#ebf0fe",
                          borderColor: "#d5ddf4"}}>
                        <div className="text-wrapper-9">Date</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "14.7%" }}>
                      <div className="element-33 w-100" style={{backgroundColor: "#ebf0fe",
                          borderColor: "#d5ddf4"}}>
                        <div className="text-wrapper-9">
                          Court with Jurisdiction
                        </div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "17.6%" }}>
                      <div className="element-35 w-100" style={{backgroundColor: "#ebf0fe",
                          borderColor: "#d5ddf4"}}>
                        <div className="text-wrapper-9">
                          Plaintiffs and Defendants
                        </div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "10.8%" }}>
                      <div className="element-37 w-100" style={{backgroundColor: "#ebf0fe",
                          borderColor: "#d5ddf4"}}>
                        <div className="text-wrapper-9">Decision</div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "10.8%" }}>
                      <div className="element-39 w-100" style={{backgroundColor: "#ebf0fe",
                          borderColor: "#d5ddf4"}}>
                        <div className="text-wrapper-9">Status</div>
                      </div>
                    </div>
                    <div className="div-8" style={{ width: "17.7%" }}>
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
                  {litigationBriefData?.map((row, index) => (
                    <div className="div-9 ">
                      <div className="div-6" style={{ width: "14.7%" }}>
                        <div
                          className={`element-30 w-100 ${
                            index == litigationBriefData.length - 1
                              ? "round-border-left"
                              : ""
                          }`} style={{borderColor: '#d5ddf4'}}
                        >
                          <div className="text-wrapper-10">
                            {row.CaseNumber}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "13.7%" }}>
                        <div className="element-34 w-100" style={{borderColor: '#d5ddf4'}}>
                          <div className="text-wrapper-10">{row.Date}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "14.7%" }}>
                        <div className="element-34 w-100" style={{borderColor: '#d5ddf4'}}>
                          <div className="text-wrapper-10">
                            {row.CourtWithJurisdiction}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "17.6%" }}>
                        <div className="element-34 w-100" style={{borderColor: '#d5ddf4'}}>
                          <div className="text-wrapper-10">
                            {row.PlaintiffsAndDefendants}
                          </div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "10.8%" }}>
                        <div className="element-34 w-100" style={{borderColor: '#d5ddf4'}}>
                          <div className="text-wrapper-10">{row.Decision}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "10.8%" }}>
                        <div className="element-34 w-100" style={{borderColor: '#d5ddf4'}}>
                          <div className="text-wrapper-10">{row.Status}</div>
                        </div>
                      </div>
                      <div className="div-6" style={{ width: "17.7%" }}>
                        <div
                          className={`element-41 w-100 ${
                            index == litigationBriefData.length - 1
                              ? "round-border-right"
                              : ""
                          }`} style={{borderColor: '#d5ddf4'}}
                        >
                          <div className="text-wrapper-10" style={{color: '#9D00C6',
    fontWeight: 'bolder'}}>
                            {row.PatentNumbers}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="detail-description w-100">
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
                </div>
              </div>
              <div className="us-launch">
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
              <div className="api-manufacturing-status">
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
              <div className="clinical-trials">
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
            <div className="search-term-sub-menu">
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
                      <div className="text-wrapper-31">USA</div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
