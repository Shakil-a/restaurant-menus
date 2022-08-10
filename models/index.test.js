const { TestWatcher } = require("jest");
const sequelize = require("sequelize");
const { DESCRIBE } = require("sequelize/types/lib/query-types");

DESCRIBE('Restaurant and menu models', () => {

    beforeAll(async () => {
        await sequelize.sync({force: true});
    });

    TestWatcher('can create a restaurant', sync () 


)})