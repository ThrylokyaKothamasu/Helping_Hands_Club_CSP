const oracledb = require("oracledb");
// Set database connection details
const dbConfig = {
  user: "system",
  password: "system",
  connectString: "localhost:/orcl",
};

const Query = async (sql) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql);
    await connection.commit();
    return result;
  } catch (error) {
    return (error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
};

const Result = async (...Parameters) => {
  
  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
    try{
      Details = eval(`(${Parameters[2]})`);
    } catch(err){}
 switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.s_no}','${Details.name}','${Details.contact_no}','${Details.charity_name}','${Details.amount}','${Details.dd}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set s_no = '${Parameters[3].s_no}', name = '${Parameters[3].name}', contact_no = '${Parameters[3].contact_no}', charity_name = '${Parameters[3].charity_name}', amount = '${Parameters[3].amount}', dd = '${Parameters[3].dd}' where s_no = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where s_no = '${Details}'`;
      break;
    case "Read":
        Sql = `select * from ${Parameters[0]}`;
        if(Details != "All"){
          Sql = `select * from ${Parameters[0]} where s_no = '${Details}'`;
        }
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};
module.exports = Result;