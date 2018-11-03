const getClient = require('./postgres-client')



async function getEmployees() {
    const client  = getClient();
    await client.connect()

    const res = await
        client.query('SELECT * from employee')
    //console.log(res.rows[0].message) // Hello world!
    await client.end()
    return res.rows;
}

async function addEmployee(employee) {
    const client  = getClient();
    await client.connect();
    // console.log("connected")
    const res = await client.query(`Insert into employee (FirstName, LastName, SSN) 
    values ($1, $2, $3)`,[
    employee.firstName,
    employee.lastName,
    employee.ssn])
    await client.end()
    // await client.disconnect()

    return res;

}

addEmployee({firstName: 'Ran', lastName: 'Wahle', ssn: 2}).then(() => {
     getEmployees().then(res => console.log('employees', res))
}, () => {
    getEmployees().then(res => console.log('employees', res))
})

module.exports = {
    addEmployee: addEmployee,
    getEmployees: getEmployees
}