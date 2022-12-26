module.exports = (sequelize, DataTypes) => {
    const newUser = sequelize.define("userInformation", {
        id:{
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true
        },
        password:{
            type: DataTypes.STRING(20),
            allowNull: false
        }
    },{
        timestamps: false
    });
    return newUser;
};