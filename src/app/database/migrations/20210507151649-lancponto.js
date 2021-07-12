'use strict';
const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tblancponto', {
      id: {
        type: sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
        
      },
      idfunc: {
        type: sequelize.INTEGER,
        allowNull:false,
            
      },
      data:{
        type: sequelize.DATE,
        allowNull: false
      },
      entrada:{
        type: sequelize.TIME,
        allowNull: false
      },
    
    entradaintervalo:{
      type: sequelize.TIME,
      allowNull: false
    },
    saidaintervalo:{
      type: sequelize.TIME,
      allowNull: false
    },
    saida:{
      type: sequelize.TIME,
      allowNull: false
    },
    hrtrabalhada:{
      type: sequelize.TIME,
      allowNull: false
    },
    hrnormal:{
      type: sequelize.TIME,
      allowNull: false
    },
    hr50:{
      type: sequelize.TIME,
      allowNull: false
    },
    hr100:{
      type: sequelize.TIME,
      allowNull: false
    },
    hrnoturna:{
      type: sequelize.TIME,
      allowNull: false
    },
    falta:{
      type: sequelize.TIME,
      allowNull: false
    },
    justificativa:{
      type: sequelize.INTEGER,
      allowNull: false
    },
    competencia:{
      type: sequelize.STRING,
      allowNull: false
    },
    created_at:{
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
    await queryInterface.dropTable('tblancponto');
    
  }
};
