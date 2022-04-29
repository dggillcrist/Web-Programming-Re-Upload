require('dotenv').config();
const mongoose = require('mongoose');

exports.connect = function(where){
    let uri = process.env.DB_URI; //production DB
    if(where==='test') uri = process.env.TEST_DB_URI; //Test DB
    if(process.env.CI) uri = 'mongodb://adm:secret@localhost:27017';

    mongoose.connect(uri,function(err){
        if(err) console.log(err);
    });
}

exports.disconnect = async function(){
    await mongoose.connection.close();
}



/*
const { MongoClient } = require("mongodb");

async function main()
{
  const uri = "mongodb+srv://dggillcrist:GuntherBear12@cluster0.vqdv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

  const client = new MongoClient(uri);

  try
  {
    await client.connect();
  }
  catch(e)
  {
    console.error(e);
  }
  finally
  {
    await client.close();
  }

  main().catch(console.error);
  

}
*/