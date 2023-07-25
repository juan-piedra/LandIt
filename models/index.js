const User = require('./User1');
const Technique = require('./technique');
const Style = require('./Style1');

// User.hasMany(Style, {
//   foreignKey: 'style_id',
//   onDelete: 'CASCADE',
// });

// Style.belongsToMany(User, {
//   through: User,
// });

// Style.hasMany(Technique, {
//     foreignKey: 'technique_id',
//     onDelete: 'CASCADE',
//   });

// Technique.belongsToMany(Style, {
//     through: Technique, 
//     foreignKey: 'style_id',
// })

module.exports = {User, Technique, Style};
