
import xlsx from 'xlsx';
import mongoose from "mongoose";

const createCollectionAndInsertData = async (collectionName, data) => {
    const schema = new mongoose.Schema({}, { strict: false });
    const Model = mongoose.model(collectionName, schema, collectionName);
    await Model.insertMany(data);
    console.log(`Data imported successfully into collection: ${collectionName}`);
};

const importExcelDataForUS = async (filePath, req, res) => {
    try {
        const workbook = xlsx.readFile(filePath);

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
                await createCollectionAndInsertData("USOverview", jsonData);
            } else if (sheetName == "US Reg Info") {
                const rows = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
                jsonData = rows.reduce((result, row) => {
                    if (row[0] && row[1]) {
                        result[row[0]] = row[1];
                    }
                    return result;
                }, {});
                jsonData = [jsonData];
                await createCollectionAndInsertData("USRegInfo", jsonData);
            } else if (sheetName == "US Probability") {
                 jsonData = xlsx.utils.sheet_to_json(worksheet);
                await createCollectionAndInsertData("USProbability", jsonData);
            } else if (sheetName == "US IP") {
                 jsonData = xlsx.utils.sheet_to_json(worksheet);
                await createCollectionAndInsertData("USIP", jsonData);
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
                await createCollectionAndInsertData("USLitigationSummary", jsonData);
            } else if (sheetName == "US Case Details") {
                 jsonData = xlsx.utils.sheet_to_json(worksheet);
                await createCollectionAndInsertData("USCaseDetails", jsonData);
            } else if (sheetName == "US ANDA Filers") {
                 jsonData = xlsx.utils.sheet_to_json(worksheet);
                await createCollectionAndInsertData("USANDAFilers", jsonData);
            } else if (sheetName == "US Petition") {
                 jsonData = xlsx.utils.sheet_to_json(worksheet);
                await createCollectionAndInsertData("USPetition", jsonData);
            } else {
                console.log("hero");
            }
        });
    } catch (error) {
        console.error('Error importing data:', error);
    }
};

export { importExcelDataForUS };