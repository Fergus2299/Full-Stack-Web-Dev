// export function - which makes the table if it doesn't already exist
// This is what's brilliant about an ORM
module.exports =  (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
        commentBody: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Comments;
};
