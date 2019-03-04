const Sql = require('./queries');

const sql = new Sql(); 

sql.connect();
sql.select("Name, date_of_birth, gender", "employee_detail");
sql.delete("Name", "employee_detail");
sql.end();