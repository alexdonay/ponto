'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
   await queryInterface.createTable('tbempresas',
    { 
      id: {
      type: sequelize.INTEGER,
      allowNull:false,
      autoIncrement: true,
      primaryKey: true
      
    },
    razao_social:{
      type: sequelize.STRING,
      allowNull: false
    },
    cnpj:{
      type: sequelize.STRING,
      allowNull: false
    },
    created_at: {
      type: sequelize.DATE,
      allowNull:false
    },
    updated_at: {
      type: sequelize.DATE,
      allowNull:false
    }
    
   
    });
   
   
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('tbempresas');
     
  }
};
