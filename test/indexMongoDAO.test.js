const dbcon = require('../mongodbconnect');
const dao = require('../model/indexMongoDAO');

beforeAll(function(){
    dbcon.connect('test');
});
afterAll(async function(){
    await dao.deleteAll();
    dbcon.disconnect();
});
beforeEach(async function(){
    await dao.deleteAll();
});

test('Create test',async function()
{
    let newPlan= {txt_name:'Test',mile:'12',
                  hundred:'20',hundred:'20',maxDL:'20',pushups:'2 weeks',caloricGoal:'600',};
    let created = await dao.create(newPlan);
    let found = await dao.read(created._id);
    expect(created.txt_name).toBe(found.txt_name); //assertion
});

test('Testing readAll', async function()
{
    let newPlan= {txt_name:'Test',mile:'12',
    hundred:'20',hundred:'20',maxDL:'20',pushups:'2 weeks',caloricGoal:'600',};
    await dao.create(newPlan);
    let plans = await dao.readAll();
    expect(plans[0].txt_name).toBe(newPlan.txt_name);
});

test('Testing deleteAll', async function()
{
    let newPlan= {txt_name:'Test',mile:'12',
    hundred:'20',hundred:'20',maxDL:'20',pushups:'2 weeks',caloricGoal:'600',};
    await dao.create(newPlan);
    let plans = await dao.readAll();
    let id = plans[0]._id;
    await dao.deleteAll();
    let newPlans = await dao.readAll();
    expect(newPlans[0]).toBe(undefined);
});

test('Testing del', async function()
{
    let newPlan= {txt_name:'Test',mile:'12',
    hundred:'20',hundred:'20',maxDL:'20',pushups:'2 weeks',caloricGoal:'600',};
    await dao.create(newPlan);
    let plans = await dao.readAll();
    let id = plans[0]._id;
    await dao.del(id);
    let newPlans = await dao.readAll();
    expect(newPlans[0]).toBe(undefined);
});

test('Testing update', async function()
{
    let newPlan= {txt_name:'Test',mile:'12',
    hundred:'20',hundred:'20',maxDL:'20',pushups:'2 weeks',caloricGoal:'600',};
    let newerPlan= {txt_name:'TestUpdate',mile:'120',
    hundred:'200',hundred:'200',maxDL:'200',pushups:'20 weeks',caloricGoal:'6000',};
    await dao.create(newPlan);
    let plans = await dao.readAll();
    let id = plans[0]._id;
    newerPlan._id = id;
    let updated = await dao.update(newerPlan);
    let found = await dao.read(updated._id);
    let newPlans = await dao.readAll();

    expect(newPlans[0].txt_name).toBe(found.txt_name);
});