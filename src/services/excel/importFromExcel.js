import * as XLSX from 'xlsx';

export default importFromExcel = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        console.log(json);
    };
   const value = reader.readAsBinaryString(file);
    console.log(value);
}