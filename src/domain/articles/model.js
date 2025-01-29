import {Model, DataTypes} from 'sequelize';
import sequelize from '../db.js';

class Comment extends Model {
    declare id: number;
    declare text: string;
    declare article_id: number;
}

Comment.init(
    {
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