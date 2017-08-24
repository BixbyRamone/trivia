module.exports = function(sequelize, DataTypes) {

  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });
  var Post = sequelize.define("High_score", {
    title: {
      type: DataTypes.INTEGER,
      allowNull: false,
     
    }
  },
  {
    classMethods: {
      associate: function(models){
        Post.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  }
  
  );
  return Post;
};


// module.exports = function(sequelize, DataTypes) {
//   var Company = sequelize.define('Company', {
//     id: {
//       type: DataTypes.INTEGER(3),
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//       comment: "Primary and auto incremented key of the table"
//     },
//     companyName: {
//       field: "company_name",
//       type: DataTypes.STRING(255),
//       allowNull: false,
//       comment: "Company Name"
//     }
// },
// {
//     classMethods:{
//       associate:function(models){
//         Company.hasMany(models.Location);
//       }
//     },
//   });
  
//   return Company;
// };