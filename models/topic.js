module.exports = (sequelize, DataTypes) => {
    const newTopic = sequelize.define("userSerial", {
        user_id:{
            type: DataTypes.STRING(10),
            allowNull: false
        },
        serial:{
            type: DataTypes.STRING(20),
            allowNull: false
        },
    },{
        timestamps: false
    });
    return newTopic;
};