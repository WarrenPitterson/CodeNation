const mysql = require('mysql');

class SQL {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'employeedb'
        });
    }

    //Connection details 

    connect() {
        this.connection.connect()
    }

    select(column, table) {
        this.connection.query(`SELECT ${column} FROM ${table}`, function (error, results, fields) {
            if (error) throw error;
            console.log(results);
          });
        }

    delete(column, table) {
        this.connection.query(`DELETE FROM ${table} WHERE ${column} = 'Rachael'`, function (error, results,) {
            if (error) throw error;
            console.log(results);
        });
    }

    update(table, column, newColumn) {
        this.connection.query(`UPDATE ${table} SET ${column} = "${newColumn}" WHERE ${column} = 'Tanya'`, function (error, results) {
            if (error) throw error;
            console.log(results);
        });
    }

    insert(table, Employee_ID, Name, DOB, Gender) {
        this.connection.query(`INSERT INTO ${table} (Employee_ID, Name, date_of_birth, gender) VALUES ("${Employee_ID}", "${Name}", "${DOB}", "${Gender}")`, function (error, results) {
            if (error) throw error;
            console.log(results);
        });
    }

    end() {
        this.connection.end()
         }
    }

    module.exports = SQL;