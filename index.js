const fs = require('fs').promises;

const appendDataToFile = async (fileName, data, lineSplitter, phraseSplitter) => {
    try {
        const lines = data.map(line => line.join(phraseSplitter));
        const dataString = lines.join(lineSplitter);
        await fs.appendFile(fileName, dataString, 'utf8');
        return 'Data added to file successfully';
    } catch (err) {
        throw err;
    }
};


const getFileDataToArray = async (fileName, lineSplitter, phraseSplitter) => {
    let arrayDatos = [];
    try {
        const data = await readFromFile(fileName);
        const datos = data.split(lineSplitter);
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
    appendDataToFile,
    getFileDataToArray
};
