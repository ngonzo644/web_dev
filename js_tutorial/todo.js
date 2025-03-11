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
  }
  document.querySelector('.final-todo').innerHTML=todoHTML;
}
function final_todo()
{
  let input = document.querySelector('.final-search');
  let date = document.querySelector('.date-input');
  let name=input.value;
  let dueDate=date.value;
  todoList.push({name, dueDate});
  let todoHTML = '';
  for(let i=todoList.length-1; i>=0; i--)
  {
    let html = `
    <div>${todoList[i].name}</div>
    <div>${todoList[i].dueDate}</div>
    <button class="delete" onclick="del_todo(${i});">
      Delete
    </button>
    `;
    todoHTML += html;
  }
  document.querySelector('.final-todo').innerHTML=todoHTML;
  console.log(document.querySelector('.final-todo').innerHTML);
}
function del_todo(i)
{
  todoList.splice(i, 1);
  display_todo();
}

function display_todo()
{
  let todoHTML = '';
  for(let i=todoList.length-1; i>=0; i--)
  {
    let html = `<p>${todoList[i].name} ${todoList[i].dueDate}
    <button class="delete">
      Delete
    </button>
    </p>`;
    todoHTML += html;
  }
  document.querySelector('.final-todo').innerHTML=todoHTML;
  console.log(document.querySelector('.final-todo').innerHTML);

}