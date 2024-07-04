
import xlsx from 'xlsx';
import mongoose from "mongoose";

const createCollectionAndInsertData = async (collectionName, data) => {
    const schema = new mongoose.Schema({}, { strict: false });
    const Model = mongoose.model(collectionName, schema, collectionName);
    await Model.insertMany(data);
    console.log(`Data imported successfully into collection: ${collectionName}`);
};

const importExcelDataForUS = async (buffer, req, res) => {
    try {
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
                await createCollectionAndInsertData("us_overview", jsonData);
            } else if (sheetName == "US Reg Info") {
                const rows = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
                jsonData = rows.reduce((result, row) => {
                    if (row[0] && row[1]) {
                        result[row[0]] = row[1];
                    }
                    return result;
                }, {});
                jsonData = [jsonData];
                await createCollectionAndInsertData("us_regInfo", jsonData);
            } else if (sheetName == "US Probability") {
                 jsonData = xlsx.utils.sheet_to_json(worksheet);
                await createCollectionAndInsertData("us_probability", jsonData);
            } else if (sheetName == "US IP") {
                 jsonData = xlsx.utils.sheet_to_json(worksheet);
                await createCollectionAndInsertData("us_ip", jsonData);
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
                await createCollectionAndInsertData("us_litigationSummary", jsonData);
            } else if (sheetName == "US Case Details") {
                 jsonData = xlsx.utils.sheet_to_json(worksheet);
                await createCollectionAndInsertData("us_caseDetails", jsonData);
            } else if (sheetName == "US ANDA Filers") {
                 jsonData = xlsx.utils.sheet_to_json(worksheet);
                await createCollectionAndInsertData("us_anda_filers", jsonData);
            } else if (sheetName == "US Petition") {
                 jsonData = xlsx.utils.sheet_to_json(worksheet);
                await createCollectionAndInsertData("us_petition", jsonData);
            } else {
                console.log("Not sheet present");
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
                await createCollectionAndInsertData("ep_overview", jsonData);
            } else if (sheetName == "EP Regulatory") {
                const rows = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
                jsonData = rows.reduce((result, row) => {
                    if (row[0] && row[1]) {
                        result[row[0]] = row[1];
                    }
                    return result;
                }, {});
                jsonData = [jsonData];
                await createCollectionAndInsertData("ep_regulatory", jsonData);
            } else if (sheetName == "EP Probability") {
                 jsonData = xlsx.utils.sheet_to_json(worksheet);
                await createCollectionAndInsertData("ep_probability", jsonData);
            } else if (sheetName == "EP IP") {
                 jsonData = xlsx.utils.sheet_to_json(worksheet);
                await createCollectionAndInsertData("ep_ip", jsonData);
            } else if (sheetName == "EP SPC") {
                jsonData = xlsx.utils.sheet_to_json(worksheet);
                await createCollectionAndInsertData("ep_spc", jsonData);
            } else {
                console.log("Not sheet present");
            }
        });
    } catch (error) {
        console.error('Error importing data:', error);
    }
};

export { importExcelDataForUS ,importExcelDataForEurope};