const sequelize = require('../config/connection');
const { Style, Technique, User } = require('../models');

const styleData = require('./style.json');
const techniqueData = require('./technique.json');
const userData = require('./user.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    await Technique.bulkCreate(techniqueData, {
        individualHooks: true,
        returning: true,
      });
    await Style.bulkCreate(styleData, {
        individualHooks: true,
        returning: true,
      });
        
  
    process.exit(0);
  };
  
  seedDatabase();
