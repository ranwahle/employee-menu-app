const getClient = require('./postgres-client')


async function getEmployees() {
    const client = getClient();
    await client.connect()
    await createEmployeeTableIfNotExist(client)
    const res = await
        client.query('SELECT * from employee')
    //console.log(res.rows[0].message) // Hello world!
    await client.end()
    return res.rows.map(emp => employeeMapper(emp));
}

async function createEmployeeTableIfNotExist(client) {
    const res = await client.query(`CREATE TABLE IF NOT EXISTS  employee 
(ID SERIAL PRIMARY KEY,
 FirstName Varchar(30), LastName Varchar(40), SSN Numeric)
`)

    return res;
}

async function addEmployee(employee) {
    const client = getClient();
    try {
        await client.connect();
        await createEmployeeTableIfNotExist(client)
        const res = await client.query(`Insert into employee (FirstName, LastName, SSN) 
    values ($1, $2, $3)`, [
            employee.firstName,
            employee.lastName,
            employee.ssn])
        await client.end()
        // await client.disconnect()

        return res;
    } catch (err) {
        return {message: 'Error connecting to DB', details: err}
    }

}

function employeeMapper(employee) {
    return {
        id: employee.id,
        firstName: employee.firstname,
        lastName: employee.lastname,
        ssn: employee.ssn
    }
}

async function getEmployee(id) {
    const client = getClient();
    await client.connect();
    await createEmployeeTableIfNotExist(client)
    const res = await client.query('Select * from employee where id = $1', [id]);
    await client.end();

    return res.rows.length ? employeeMapper(res.rows[0]) : null;
}

async function updateEmployee(employee) {
    const client = getClient();
    await client.connect();
    await createEmployeeTableIfNotExist(client)
    const res = await client.query('UPDATE employee set FirstName = $1, LastName = $2, SSN = $3 where id=$4'
        , [employee.firstName, employee.lastName, employee.ssn, employee.id]);

    await client.end();

    return res;
}

async function deleteEmployee(employeeId) {
    const client = getClient();
    await client.connect();
    await createEmployeeTableIfNotExist(client)
    const res = await client.query('DELETE from employee where id = $1', [employeeId]);

    await client.end();

    return res;
}

module.exports = {
    addEmployee: addEmployee,
    getEmployees: getEmployees,
    getEmployee: getEmployee,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee
}