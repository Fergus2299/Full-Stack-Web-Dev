module.exports =  (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // we need to hash a password
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    // creating foreign key to posts
    Users.associate = (models) => {
        Users.hasMany(models.Posts, {
            onDelete: "cascade",
        });
    };
    return Users;
};
