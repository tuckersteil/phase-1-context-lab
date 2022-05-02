function createEmployeeRecord(employee){
    let obj = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj
}

function createEmployeeRecords(employee){
    return employee.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp){
    let [date, time] = dateStamp.split(' ')
    let newObj = {
        type: "TimeIn",
        hour: parseInt(time),
        date: date
    }
     this.timeInEvents.push(newObj)
     return this
}

function createTimeOutEvent(dateStamp){
    let [date, time] = dateStamp.split(' ')
    let newObj = {
        type: "TimeOut",
        hour: parseInt(time),
        date: date
    }
     this.timeOutEvents.push(newObj)
     return this
}

function hoursWorkedOnDate(dateStamp){
    const timeIn = this.timeInEvents.find(event => event.date === dateStamp)
    const timeOut = this.timeOutEvents.find(event => event.date === dateStamp)
    return (timeOut.hour - timeIn.hour)/100
}



function wagesEarnedOnDate(dateStamp){
    const hours = hoursWorkedOnDate.call(this, dateStamp)
    return this.payPerHour * hours
}

function calculatePayroll(employeeRecords){
    return employeeRecords.map(employee => allWagesFor.call(employee)).reduce((currentValue, total) => currentValue + total)
}

function findEmployeeByFirstName(employees, firstNameString){
    return employees.find(emp => emp.firstName === firstNameString)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

