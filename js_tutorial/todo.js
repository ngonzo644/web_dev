let todoList = [];
function add_todo_1()
{
  let input = document.querySelector('.search-1');
  input = input.value; 
  todoList.push(input);
  console.log(todoList);
}
function add_todo_2()
{
  let input = document.querySelector('.search-2');
  input=input.value;
  todoList.push(input);
  let todoHTML = '';
  for(let i=todoList.length-1; i>=0; i--)
  {
    let html = `<p>${todoList[i]}</p>`;
    todoHTML += html;
    document.querySelector('.todo').innerHTML=todoHTML;
  }
}