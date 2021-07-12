'use strict';
const sequelize = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    queryInterface.changeColumn('tbfuncionarios', 'idempresa', {
        
        type: sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'tbempresas',
          key: 'id'
        }
    })
  }, 
  

  down: async (queryInterface, Sequelize) => {
  
    queryInterface.changeColumn('tbfuncionarios', 'idempresa', {
      type: sequelize.INTEGER,
      allowNull: false
    });
   
  },
  
};
