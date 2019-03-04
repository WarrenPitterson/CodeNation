const Sql = require('./queries');

const sql = new Sql(); 

sql.connect();
sql.select("Name, date_of_birth, gender", "employee_detail");
// sql.update("employee_detail", "Name", "Warren");
// sql.insert("employee_detail", "2222", "Warren", "08/07/1989", "M");
sql.end();