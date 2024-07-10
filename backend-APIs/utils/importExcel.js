
import xlsx from 'xlsx';
import mongoose from "mongoose";
import UsProbabilityModel from '../models/us_probability.js';
import usLitigationSummaryModel from '../models/us_litigation_summary.js';
import UsOverviewModel from '../models/us_overview.js';
import UsIPModel from '../models/us_ip.js';
import UsCaseDetailsModel from '../models/us_case_details.js';
import UsAndaFilersModel from '../models/us_anda_filers.js';
import UsPetitionModel from '../models/us_petition.js';
import EpOverviewModel from '../models/ep_overview.js';
import EpRegulatoryModel from '../models/ep_regulatory.js';
import EpProbabilityModel from '../models/ep_probability.js';
import EpIpModel from '../models/ep_ip.js';
import EpSpcModel from '../models/ep_spc.js';
import { json } from 'express';
import UsRegulatoryModel from '../models/us_regulatory.js';

const importExcelDataForUS = async (buffer, req, res) => {
    try {
        let ndaNumber;
        const workbook = xlsx.read(buffer, { type: 'buffer' });

        workbook.SheetNames.forEach(async (sheetName) => {
            let jsonData;
            const worksheet = workbook.Sheets[sheetName];
            if (sheetName == "US Overview") {
                const rows = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
                jsonData = rows.reduce((result, row) => {
                    if (row[0] && row[1]) {
                        result[row[0]] = row[1];
                    }
                    return result;
                }, {});

                jsonData = [jsonData];
                ndaNumber = jsonData[0]['NDA Number'];
                jsonData = jsonData.map((row) => {
                    return {
                        ndaNumber: row['NDA Number'],
                        brandName: row['Brand Name'],
                        activeIngredient: row['Active Ingredient '],
                        dosageForm: row['Dosage Form'],
                        route: row['Route'],
                        strength: row['Strength'],
                        company: row['Company'],
                        therapeuticClass: row['Therapeutic Class'],
                        therapyArea: row['Therapy Area/ Mechanism of action'],
                        generisized: row['Generisized'],
                        numberOfGenericsForFilers: row['Number of Generics - Filers'],
                        numberOfGenericsForLaunch: row['Number of Generics - Launch'],
                        submission: row['Submission'],
                        reviewPriority: row['Review Priority'],
                        sales: row['Sales'],
                        bcsClass: row['BCS Class'],
                        specificTechnology: row['Specific Technology'],
                        isValid: true,
                    };
                })
                await UsOverviewModel.insertMany(jsonData);
            } else if (sheetName == "US Regulatory") {
                const rows = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
                jsonData = rows.reduce((result, row) => {
                    if (row[0] && row[1]) {
                        result[row[0]] = row[1];
                    }
                    return result;
                }, {});
                jsonData = [jsonData];
                jsonData = jsonData.map((row) => {
                    return {
                        ndaNumber: row['NDA Number'],
                        dateOfApproval: row['Date of Approval'],
                        blaNumber: row['BLA Number'],
                        markettingStatus: row['Marketting Status'],
                        approvedIndication: row['Approved Indication '],
                        approvedIndicationLink: row['Approved Indication Link'],
                        latestIndication: row['Latest Indication '],
                        latestIndicationLink: row['Latest Indication Link'],
                        nceExclusivity: row['NCE Exclusivity'],
                        gainExclusivity: row['GAIN Exclusivity'],
                        orphanExclusivity: row['Orphan Exclusivity'],
                        pediatricExclusivity: row['Pediatric Exclusivity'],
                        isValid: true,
                    };
                })
                await UsRegulatoryModel.insertMany(jsonData);
            } else if (sheetName == "US Probability") {
                const rows = xlsx.utils.sheet_to_json(worksheet);
                jsonData = rows.map((row) => {
                    return {
                        ndaNumber: row['NDA Number'],
                        brandName: row['Brand name'],
                        activeIngredient: row['Active Ingredient '],
                        launchProbability: row['Launch Probability (%)'],
                        launchPerceptions: row['Launch Perceptions'],
                        isValid: true,
                    };
                })
                await UsProbabilityModel.insertMany(jsonData);
            } else if (sheetName == "US IP") {
                const rows = xlsx.utils.sheet_to_json(worksheet);
                jsonData = rows.map((row) => {
                    return {
                        ndaNumber: row['NDA Number'],
                        brandName: row['Brand Name'],
                        activeIngredient: row['Active Ingredient'],
                        typeOfPatent: row['Type of Patent'],
                        dosageForm: row['Dosage Form'],
                        strength: row['Strength'],
                        equivalentFamily: row['Equivalent Family'],
                        patentNumber: row['Patent Number'],
                        currentAssignee: row['Current Assignee'],
                        obListed: row['OB Listed'],
                        status: row['Status'],
                        pet: row['PTE'],
                        ped: row['PED'],
                        terminalDisclaimer: row['Terminal Disclaimer'],
                        estimatedExpiry: row['Estimated Expiry \n(inc. PTE PED)'],
                        independentClaims: row['Independent claims coverage brief'],
                        proposedStrategyForPARA: row['Proposed strategy for PARA IV scenario'],
                        isValid: true,
                    };
                })
                await UsIPModel.insertMany(jsonData);
            } else if (sheetName == "US Litigation Summary") {
                jsonData = xlsx.utils.sheet_to_json(worksheet);
                jsonData = jsonData.map(record => {
                    const petitionNumbers = Object.keys(record)
                        .filter(key => key.startsWith('US') && record[key] === 'Yes')
                        .join(',');

                    if (petitionNumbers) {
                        record['Petition Numbers'] = petitionNumbers;
                    }
                    return record;
                });
                jsonData = jsonData.map((row) => {
                    return {
                        ndaNumber: ndaNumber,
                        caseNumber: row['Case Number'],
                        filingDate: row['Filing Date of case '],
                        courtJurisdiction: row['Court with Jurisdiction'],
                        plaintiffsDefendants: row['Plaintiffs and Defendants'],
                        natureOfSuit: row['Nature of Suit'],
                        decision: row['Decision'],
                        status: row['Status'],
                        petitionNumbers: row['Petition Numbers'],
                        isValid: true,
                    };
                })
                await usLitigationSummaryModel.insertMany(jsonData);
            } else if (sheetName == "US Case Details") {
                const rows = xlsx.utils.sheet_to_json(worksheet);
                jsonData = rows.map((row) => {
                    return {
                        ndaNumber: ndaNumber,
                        caseNumber: row['Case Number'],
                        dateOfProceedings: row['Date of Proceedings'],
                        filingNumber: row['Filing Number '],
                        proceedingsInCourt: row['Proceedings in Court'],
                        isValid: true,
                    };
                })
                await UsCaseDetailsModel.insertMany(jsonData);
            } else if (sheetName == "US ANDA Filers") {
                const rows = xlsx.utils.sheet_to_json(worksheet);
                jsonData = rows.map((row) => {
                    return {
                        ndaNumber: ndaNumber,
                        numberOfANDAs: row['Total number of ANDAs submitted'],
                        dateOfANDAsubmission: row['Date of ANDA submission'],
                        strength: row['Strength'],
                        dosageForm: row['Dosage Form'],
                        f2f: row['F2F'],
                        monthsExpirationDate: row['7.5 years/ 30 months expiration date'],
                        updatedOn: row['Updated On'],
                        isValid: true,
                    };
                });
                await UsAndaFilersModel.insertMany(jsonData);
            } else if (sheetName == "US Petition") {
                const rows = xlsx.utils.sheet_to_json(worksheet);
                jsonData = rows.map((row) => {
                    return {
                        ndaNumber: ndaNumber,
                        title: row['Title'],
                        docketID: row['Docket ID'],
                        filedBy: row['Filed by'],
                        status: row['Status'],
                        isValid: true,
                    };
                });
                await UsPetitionModel.insertMany(jsonData);
            } else {
                console.log("Sheet not available");
            }
        });
    } catch (error) {
        console.error('Error importing data:', error);
    }
};
const importExcelDataForEurope = async (buffer, req, res) => {
    try {
        const workbook = xlsx.read(buffer, { type: 'buffer' });

        workbook.SheetNames.forEach(async (sheetName) => {
            let jsonData;
            const worksheet = workbook.Sheets[sheetName];
            if (sheetName == "EP Overview") {
                const rows = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
                jsonData = rows.reduce((result, row) => {
                    if (row[0] && row[1]) {
                        result[row[0]] = row[1];
                    }
                    return result;
                }, {});
                jsonData = [jsonData];
                jsonData = jsonData.map((row) => {
                    return {
                        agencyProductNumber: row['Agency Product Number'],
                        brandName: row['Brand Name'],
                        activeIngredient: row['Active Ingredient '],
                        dosageForm: row['Dosage Form'],
                        route: row['Route'],
                        strength: row['Strength'],
                        company: row['Company'],
                        therapeuticClass: row['Therapeutic Class'],
                        therapyArea: row['Therapy Area/ Mechanism of action'],
                        generisized: row['Generisized'],
                        numberOfGenerics: row['Number of Generics'],
                        submission: row['Submission'],
                        reviewPriority: row['Review Priority'],
                        sales: row['Sales'],
                        bcsClass: row['BCS Class'],
                        specificTechnology: row['Specific Technology'],
                        isValid: true,
                    };
                })
                await EpOverviewModel.insertMany(jsonData);
            } else if (sheetName == "EP Regulatory") {
                const rows = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
                jsonData = rows.reduce((result, row) => {
                    if (row[0] && row[1]) {
                        result[row[0]] = row[1];
                    }
                    return result;
                }, {});
                jsonData = [jsonData];
                jsonData = jsonData.map((row) => {
                    return {
                        agencyProductNumber: row['Agency Product Number'],
                        dateOfApproval: row['Date of Approval'],
                        blaNumber: row['BLA Number'],
                        markettingStatus: row['Marketting Status'],
                        latestIndication: row['Latest Indication'],
                        markettingExclusivity: row['Data+Marketting Exclusivity'],
                        orphanDesignated: row['Orphan Designated'],
                        pediatricExclusivity: row['Pediatric Exclusivity'],
                        isValid: true,
                    };
                })
                await EpRegulatoryModel.insertMany(jsonData);
            } else if (sheetName == "EP Probability") {
                const rows = xlsx.utils.sheet_to_json(worksheet);
                jsonData = rows.map((row) => {
                    return {
                        agencyProductNumber: row['Agency Product Number'],
                        brandName: row['Brand Name'],
                        activeIngredient: row['Active Ingredient'],
                        launchProbability: row['Launch Probability (%)'],
                        launchPerceptions: row['Launch Perceptions'],
                        isValid: true,
                        isValid: true,
                    };
                })
                await EpProbabilityModel.insertMany(jsonData);
            } else if (sheetName == "EP IP") {
                const rows = xlsx.utils.sheet_to_json(worksheet);
                jsonData = rows.map((row) => {
                    return {
                        agencyProductNumber: row['Agency Product Number'],
                        brandName: row['Brand Name'],
                        activeIngredient: row['Active Ingredient'],
                        typeOfPatent: row['Type of Patent'],
                        equivalentFamily: row['Equivalent Family'],
                        patentNumber: row['Patent Number'],
                        currentAssignee: row['Current Assignee'],
                        status: row['Status'],
                        spc: row['SPC'],
                        ped: row['PED'],
                        estimatedExpiry: row['Estimated Expiry\nIncl SPC and PED'],
                        ifGranted: row['If Granted'],
                        IndependentClaims: row['Independent claims coverage brief'],
                        proposedStrategyForPARA: row['Proposed strategy for PARA IV scenario'],
                        isValid: true,
                    };
                })
                await EpIpModel.insertMany(jsonData);
            } else if (sheetName == "EP SPC") {
                const rows = xlsx.utils.sheet_to_json(worksheet);
                jsonData = rows.map((row) => {
                    return {
                        agencyProductNumber: row['APN'],
                        patent: row['Patent'],
                        country: row['Country'],
                        status: row['Status '],
                        expiry: row['Expiry'],
                        isValid: true,
                    };
                })

                await EpSpcModel.insertMany(jsonData);
            } else {
                console.log("Sheet not available");
            }
        });
    } catch (error) {
        console.error('Error importing data:', error);
    }
};
const bulkUploadDataForUS = async (buffer) => {
    try {
        console.log("work started", new Date());
        setTimeout(async () => {
            try {
                if (buffer) {
                    console.log('Work done');
                }
            } catch (error) {
                console.error('Error processing file:', error);
            }
        }, 5000);
    } catch (error) {
        console.error('Error importing data:', error);
    }
};

export { importExcelDataForUS, importExcelDataForEurope, bulkUploadDataForUS };