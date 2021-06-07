//Setup

/*
q_table = np.zeros([env.observation_space.n, env.action_space.n])
Env = Game
Create Qtable */
var nj = require('numjs');
q_table = nj.zeros([1, 110]);

//Training the agent

//Hyperparameters
let alpha = 0.1;
let gamma = 0.6;
let epsilon = 0.1;

//For plotting metrics
let all_epochs = [];
let all_penalties = [];

for (let i = 1; i < 100001; i++) {
  //state = env.reset()
  //Get random game
  let epochs = 0;
  let penalties = 0;
  let reward = 0;
  let done = false;

  while (!done) {
    if (Math.random() < epsilon) {
      //action = env.action_space.sample() # Explore action space
      action = Math.random() * 110;
    } else {
      action = nj.argmax(q_table[state]); // Exploit learned values
    }

    //next_state, reward, done, info = env.step(action)
    //Get next_state, rewards of the next step and done

    old_value = q_table[(state, action)];
    next_max = nj.max(q_table[next_state]);

    new_value = (1 - alpha) * old_value + alpha * (reward + gamma * next_max);
    q_table[(state, action)] = new_value;

    if (reward == -10) {
      penalties += 1;
    }

    state = next_state;
    epochs += 1;
  }

  if (i % 100 == 0) {
    console.log(`Episode: ${i}`);
  }
}

console.log('Training finished.\n');

//Evaluate agent's performance after Q-learning

total_epochs, (total_penalties = 0), 0;
episodes = 100;

for (let i = 0; i < 100; i++) {
  //state = env.reset()
  //Get random game
  let epochs = 0;
  let penalties = 0;
  let reward = 0;

  done = false;

  while (!done) {
    action = nj.argmax(q_table[state]);
    //state, reward, done, info = env.step(action)
    //Get state, rewards of the next step and done

    if (reward == -10) {
      penalties += 1;
    }

    epochs += 1;
  }

  total_penalties += penalties;
  total_epochs += epochs;
  //env.render()
}

console.log(`Results after ${episodes} episodes:`);
console.log(`Average timesteps per episode: ${(total_epochs, episodes)}`);
console.log(`Average penalties per episode: ${(total_penalties, episodes)}`);
