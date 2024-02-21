// Get the submit button and input task field
const submit = document.querySelector('#submit');
const newTask = document.querySelector('#newTask');

// Disable the submit button by default
submit.disabled = true;

// Listen for input to be typed into the input field
newTask.addEventListener('input', () => {
  // Enable/disable the submit button based on the input field's value
  submit.disabled = newTask.value.trim() === '';
});

// Listen for submission of form
document.querySelector('#taskForm').addEventListener('submit', (event) => {
  // Find the task the user just submitted
  const task = newTask.value.trim();

  // Create a list item for the new task
  const listItem = document.createElement('li');
  listItem.textContent = task;

  // Add new element to our unordered list
  document.querySelector('#tasks').appendChild(listItem);

  // Clear the input field
  newTask.value = '';

  // Disable the submit button
  submit.disabled = true;

  // Prevent the default submission of the form
  event.preventDefault();
});