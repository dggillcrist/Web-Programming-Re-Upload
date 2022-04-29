/*const { readAll } = require('../model/indexDAO');
const dao = require('../model/indexDAO');

let hagred = {"txt_id":1,"txt_name":"Hagred", "mile": "500,000", "hundred": "1100", "maxDL": "31500", "pushups": "900", "timeline": "600 Years", "caloricGoal": "9000"};



test('Testing ReadAll',function()
{
    let plans = dao.readAll();
    expect(plans.length).toBeGreaterThanOrEqual(0);
});

test('Test Create',function()
{
   
    dao.create(hagred);
    expect(dao.readAll()).toContain(hagred);
});

test('Test Update',function()
{
    let newPlan = {}; //empty obj
    newPlan.txt_id = 1;
    newPlan.txt_name = "Haakon";
    newPlan.mile = "200";
    newPlan.hundred = "30";
    newPlan.maxDL = "20";
    newPlan.pushups = "20";
    newPlan.timeline = "20";
    newPlan.caloricGoal = "20";
    dao.update(newPlan)
    expect(dao.readAll()).toContain(newPlan);
});

test('Test Delete',function()
{
   
    dao.del(hagred.txt_id);
    expect(dao.readAll()).not.toContain(hagred);
    
});

test('Test Read',function()
{
    dao.read(1);
    expect(1).not.toContain(hagred);
    
});




*/