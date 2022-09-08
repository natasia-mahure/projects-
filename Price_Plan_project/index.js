import * as sqlite from 'sqlite';
import express from 'express';
import sqlite3 from 'sqlite3';

const app = express();

const  db = await  sqlite.open({
    filename:  './data_plan.db',
    driver:  sqlite3.Database
});

console.log('db initialized');

// await db.migrate();
app.post('/api/phonebill/', function(req, res){
    console.log(req.body);
    res.json({
        status : 'successsssss'
    })
});

app.get('api/price_plans', async function(req, res){
    const price_plans = await db.all(`select from price_plan`);
    res.json({
        price_plans
    })
});

console.log("done");

const listner = app.listen(process.env.PORT || 3000, ()=> {
    console.log(`Pric plan API started on port ${listner.address().port}`);
})