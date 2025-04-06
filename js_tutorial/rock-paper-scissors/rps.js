let random_num;

let user=JSON.parse(localStorage.getItem('score'));

if (user === null)
{
  user ={
    wins:0,
    losses:0,
    ties:0
  }
}

function update_score(){
  document.querySelector('.js-score').innerHTML=show_score();
}

update_score();

function show_score()
{
  return `Wins: ${user.wins}, Losses: ${user.losses}, Ties: ${user.ties}`
}
function reset_score()
{
  user.wins=0;
  user.losses=0;
  user.ties=0;
  localStorage.removeItem('score');
  update_score();
};
function rps(random_n, user_num)
{
  // Computer picks rock
  if(random_n===1 && user_num===1)
  {
    user.ties++;
    document.querySelector('.js-result').innerHTML='You tied.';
    document.querySelector('.js-moves').innerHTML='You <img class="image" src="src/rock-emoji.png"> <img class="image" src="src/rock-emoji.png">Computer';
    update_score();
  }
  else if (random_n===1 && user_num===2)
  {
    user.wins++;
    document.querySelector('.js-result').innerHTML='You won!';
    document.querySelector('.js-moves').innerHTML='You <img class="image" src="src/paper-emoji.png"> <img class="image" src="src/rock-emoji.png"> Computer';
    update_score();

  }
  else if (random_n===1 && user_num===3)
  {
    user.losses++;
    document.querySelector('.js-result').innerHTML='You lost.';
    document.querySelector('.js-moves').innerHTML='You <img class="image" src="src/scissors-emoji.png"> <img class="image" src="src/rock-emoji.png"> Computer';
    update_score();
  }
  // Computer picks paper
  else if(random_n===2 && user_num===1)
  {
    user.losses++;
    document.querySelector('.js-result').innerHTML='You lost.';
    document.querySelector('.js-moves').innerHTML='You <img class="image" src="src/rock-emoji.png"> <img class="image" src="src/paper-emoji.png"> Computer';
    update_score();

  }
  else if(random_n===2 && user_num===2)
  {
    user.ties++;
    document.querySelector('.js-result').innerHTML='You tied.';
    document.querySelector('.js-moves').innerHTML='You <img class="image" src="src/paper-emoji.png"> <img class="image" src="src/paper-emoji.png"> Computer';
    update_score();
  }
  else if(random_n===2 && user_num===3)
  {
    user.wins++;
    document.querySelector('.js-result').innerHTML='You won!';
    document.querySelector('.js-moves').innerHTML='You <img class="image" src="src/scissors-emoji.png"> <img class="image" src="src/paper-emoji.png"> Computer';
    update_score();
  }
  // Computer picks scissors
  else if(random_n===3 && user_num===1)
  {
    user.wins++;
    document.querySelector('.js-result').innerHTML='You won!';
    document.querySelector('.js-moves').innerHTML='You <img class="image" src="src/rock-emoji.png"> <img class="image" src="src/scissors-emoji.png"> Computer';
    update_score();
  }
  else if(random_n===3 && user_num===2)
  {
    user.losses++;
    document.querySelector('.js-result').innerHTML='You lost.';
    document.querySelector('.js-moves').innerHTML='You <img class="image" src="src/paper-emoji.png"> <img class="image" src="src/scissors-emoji.png"> Computer';
    update_score();

  }
  else if(random_n===3 && user_num===3)
  {
    user.ties++;
    document.querySelector('.js-result').innerHTML='You tied.';
    document.querySelector('.js-moves').innerHTML='You <img class="image" src="src/scissors-emoji.png"> <img class="image" src="src/scissors-emoji.png"> Computer';
    update_score();
  }

  localStorage.setItem('score', JSON.stringify(user));
}
let intervalId=null;
function auto_play()
{
  // if its null (auto play is not on)
  if (!intervalId)
  {
    // setInterval requires a function to be ran, and a time, so we can quickly define a function in the parameters 
    intervalId = setInterval(() => {
      let user_random_num=Math.round(Math.random()*(3-1)+1);
      let comp_random_num=Math.round(Math.random()*(3-1)+1);
      rps(user_random_num, comp_random_num);}, 2000);

    document.querySelector('.auto-button').innerText="Stop Play";
  }
  else{
    clearInterval(intervalId);
    intervalId=null;
    document.querySelector('.auto-button').innerText="Auto Play";
  }
}