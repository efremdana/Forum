import {Sequelize, Model, DataTypes} from 'sequelize';
import sequelize from '../db.js';
class Article extends Model {
    declare id: number;
    declare name: string;
    declare text: string;
}

Article.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING
        },
    },
    { sequelize }
)

export default Article;