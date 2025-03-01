let todoList = [];
function add_todo()
{
  let input = document.querySelector('.search');
  input = input.value; 
  todoList.push(input);
  console.log(todoList);
}