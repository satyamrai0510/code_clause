// Fetch the table body
const tableBody = document.querySelector('#task-list tbody');

// Fetch the sort by select element and filter input element
const sortBySelect = document.querySelector('#sort-by');
const filterInput = document.querySelector('#filter');

// Function to add a new task to the table
function addTask(taskName, dueDate, priority) {
  // Create a new row
  const newRow = document.createElement('tr');

  // Create the columns for the row
  const taskNameCol = document.createElement('td');
  const dueDateCol = document.createElement('td');
  const priorityCol = document.createElement('td');
  const actionCol = document.createElement('td');

  // Add the task name, due date, and priority to their respective columns
  taskNameCol.textContent = taskName;
  dueDateCol.textContent = dueDate;
  priorityCol.textContent = priority;

  // Add a delete button to the action column
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  actionCol.appendChild(deleteButton);

  // Add a click event listener to the delete button to remove the task from the table
  deleteButton.addEventListener('click', () => {
    newRow.remove();
  });

  // Append the columns to the new row
  newRow.appendChild(taskNameCol);
  newRow.appendChild(dueDateCol);
  newRow.appendChild(priorityCol);
  newRow.appendChild(actionCol);

  // Append the new row to the table body
  tableBody.appendChild(newRow);
}

// Add an event listener to the form submit button
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the form data
  const taskName = document.querySelector('#task-name').value;
  const dueDate = document.querySelector('#due-date').value;
  const priority = document.querySelector('#priority').value;

  // Add the task to the table
  addTask(taskName, dueDate, priority);

  // Reset the form
  event.target.reset();
});

// Function to sort the table based on the selected option
function sortTable(option) {
  const rows = Array.from(tableBody.querySelectorAll('tr'));
  const sortDirection = option.endsWith('asc') ? 1 : -1;

  rows.sort((rowA, rowB) => {
    let a, b;
    
    if (option.startsWith('date')) {
      a = new Date(rowA.querySelector('td:nth-child(2)').textContent);
      b = new Date(rowB.querySelector('td:nth-child(2)').textContent);
    } else if (option.startsWith('priority')) {
      a = rowA.querySelector('td:nth-child(3)').textContent;
      b = rowB.querySelector('td:nth-child(3)').textContent;
    }

    if (option.startsWith('date')) {
      if (a < b) {
        return -1 * sortDirection;
      } else if (a > b) {
        return 1 * sortDirection;
      } else {
        return 0;
      }
    } else if (option.startsWith('priority')) {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      if (priorityOrder[a] < priorityOrder[b]) {
        return -1 * sortDirection;
      } else if (priorityOrder[a] > priorityOrder[b]) {
        return 1 * sortDirection;
      } else {
        return 0;
      }
    }
  });

  rows.forEach((row) => {
    tableBody.appendChild(row);
  });
}

// Add an event listener to the sort by select element
sortBySelect.addEventListener('change', () => {
  sortTable(sortBySelect.value);
}); 

// Function to filter the table based on the search input
function filterTable(searchTerm) {
  const rows = Array.from(tableBody.querySelectorAll('tr'));

  rows.forEach((row) => {
    const taskName = row.querySelector('td:first-child').textContent.toLowerCase();
    const priority = row.querySelector('td:nth-child(3)').textContent.toLowerCase();

    if (taskName.includes(searchTerm.toLowerCase()) || priority.includes(searchTerm.toLowerCase())) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// filter the table when the input is changed
filterInput.addEventListener('input', () => {
    const filterValue = filterInput.value.toLowerCase();
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    
    rows.forEach((row) => {
        const taskName = row.querySelector('td:nth-child(1)').textContent.toLowerCase();
        
        if (taskName.includes(filterValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});


