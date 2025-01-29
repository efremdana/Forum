import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('Forum', 'postgres', 'farveh8', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

export default sequelize;