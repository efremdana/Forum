import {Model, DataTypes} from 'sequelize';
import sequelize from '../db.js';
class Article extends Model {}

Article.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
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