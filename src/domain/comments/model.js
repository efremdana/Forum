import {Model, DataTypes} from 'sequelize';
import sequelize from '../db.js';

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        article_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {sequelize},
)

export default Comment;