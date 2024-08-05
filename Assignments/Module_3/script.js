// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // Create an array to hold employee data
  const employees = [];

  let keepGoing = true;

  // Loop until the user chooses to stop
  while (keepGoing) {
    // Get user input for an employee
    const firstName = prompt('Enter first name:');
    const lastName = prompt('Enter last name:');
    let salary = prompt('Enter salary:');

    // If salary is not a number set it to zero
    if (isNaN(salary)) {
      salary = 0;
    }

    // Create an employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      // Convert the salary to a float
      salary: parseFloat(salary)
    };

    // Add the employee object to the end of the employees array
    employees.push(employee);

    // Ask the user if they want to continue adding employees
    keepGoing = confirm('Do you want to add another employee?');
  }

  // Return the employee data
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let totalSalary = 0;
  const numEmployees = employeesArray.length;

  for (const employee of employeesArray) {
    totalSalary += employee.salary;
  }

  // Calculate the average salary
  const averageSalary = totalSalary / numEmployees;
  console.log(`The average employee salary between our ${numEmployees} employee(s) is $${averageSalary.toFixed(2)}`)
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomEmployee =
    employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(
    `Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);