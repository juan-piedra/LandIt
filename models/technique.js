const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Technique extends Model {}


Technique.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },  
      name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.STRING,
          },
          // style_id: {
          //   type: DataTypes.INTEGER,
          //   references: {
          //     model: 'style',
          //     key: 'id',
          //   },
          // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'technique',
    }
);

module.exports = Technique;