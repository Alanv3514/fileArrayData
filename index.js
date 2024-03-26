const fs = require('fs').promises;

const readFromFile = async (file, coding) => {
    try {
        const data = await fs.readFile(file, coding);
        return data;
    } catch (err) {
        throw err;
    }
};

const appendArrayDataToFile = async (fileName, data,lineBreak, phraseSplitter,coding) => {
    try {
        const dataString = data.join(phraseSplitter)+lineBreak;
        await fs.appendFile(fileName, dataString, coding);
        return 'Data added to file successfully';
    } catch (err) {
        throw err;
    }
};
const appendMatrixDataToFile = async (fileName, data, lineBreak, phraseSplitter,coding) => {
    try {
        const lines = data.map(line => line.join(phraseSplitter));
        const dataString = lines.join(lineBreak);
        await fs.appendFile(fileName, dataString, coding);
        return 'Data added to file successfully';
    } catch (err) {
        throw err;
    }
};

const getFileDataToArray = async (fileName, lineBreak, phraseSplitter,coding) => {
    let arrayDatos = [];
    try {
        const data = await readFromFile(fileName,coding);
        const datos = data.split(lineBreak);
        datos.forEach(d => {
            arrayDatos.push(d.split(phraseSplitter));
        });
        return arrayDatos;
    } catch (err) {
        console.error(err);
        return [];
    }
}


module.exports = {
    appendArrayDataToFile,
    appendMatrixDataToFile,
    getFileDataToArray
};
