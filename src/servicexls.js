    

const ExcelJS = require('exceljs');

module.exports = async function geraxls(dados,quantidade){
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('My Sheet');
        
   worksheet.addRow(['empresa'])
   worksheet.addRow(['funcionario'])
   worksheet.addRow(['periodo'])
   
   worksheet.addRow(['data','entrada','saida','entrada','saida','total','hrnormais','hr50','hr100','noturnas','faltas','justificativa'])
    for (let i = 0; i < quantidade; i++) {
        
        worksheet.addRow([dados[0][i],dados[1][i],dados[2][i],dados[3][i],dados[4][i],dados[5][i],dados[6][i],dados[7][i],dados[8][i],dados[9][i],dados[10][i],dados[11][i]]);     
        
        
    }
   
  
   await workbook.xlsx.writeFile('../filename.xlsx')
  
} 




