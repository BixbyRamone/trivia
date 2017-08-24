module.exports = function(sequelize, DataTypes) {

  var User = sequelize.define("User", {

    name: {
    	type: DataTypes.STRING,
    	notNull: true
    },

    email: {
    	type: DataTypes.STRING,
    	isEmail: true
    },

    password: {
    	type: DataTypes.STRING,
    	notNull: true

    }


  });
  return User;
};
