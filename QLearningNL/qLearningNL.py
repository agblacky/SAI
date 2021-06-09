"""import tensorflow as tf
tf.__version__


# ##### GPU SETUP
from tensorflow.python.client import device_lib 
print(device_lib.list_local_devices())
gpus = tf.config.list_physical_devices('GPU')
if gpus:
  try:
    # Currently, memory growth needs to be the same across GPUs
    for gpu in gpus:
      tf.config.experimental.set_memory_growth(gpu, True)
    logical_gpus = tf.config.experimental.list_logical_devices('GPU')
    print(len(gpus), "Physical GPUs,", len(logical_gpus), "Logical GPUs")
  except RuntimeError as e:
    # Memory growth must be set before GPUs have been initialized
    print(e)

"""

# Server Setup

from flask import Flask, request
import qLearningNL

app = Flask(__name__)

@app.route("/move", methods=['GET'])
def index():
    print("received");
    state = request.get_json();
    #print(state);
    #return "moveCard(1,0,1)"
    #return "dc"
    training(state)

@app.route("/game", methods=["DELETE"])
def newGame():
    #clear the buffer of the other states for a new game
    #to better juge the move
    pass;

@app.route("/", methods=['GET'])
def hello():
    return "hello\nyou should not do that\n\t]:";


app.run(host='127.0.0.1', port=3456)



# NL Setup


#q_table = np.zeros([env.observation_space.n, env.action_space.n])
# Env = Game
# Create Qtable 
import numpy as np
q_table = np.zeros([1,110])



"""Training the agent"""

import random
from IPython.display import clear_output

# Hyperparameters
alpha = 0.1
gamma = 0.6
epsilon = 0.1

# For plotting metrics
all_epochs = []
all_penalties = []

for i in range(1, 100001):
    #state = env.reset()
    #Get random game
    epochs, penalties, reward, = 0, 0, 0
    done = False
    
    while not done:
        if random.uniform(0, 1) < epsilon:
            #action = env.action_space.sample() # Explore action space
            action = random.randint(0,110)
        else:
            action = np.argmax(q_table[state]) # Exploit learned values

        #next_state, reward, done, info = env.step(action)
        #Get next_state, rewards of the next step and done
        
        old_value = q_table[state, action]
        next_max = np.max(q_table[next_state])
        
        new_value = (1 - alpha) * old_value + alpha * (reward + gamma * next_max)
        q_table[state, action] = new_value

        if reward == -10:
            penalties += 1

        state = next_state
        epochs += 1
        
    if i % 100 == 0:
        clear_output(wait=True)
        print(f"Episode: {i}")

print("Training finished.\n")




"""Evaluate agent's performance after Q-learning"""

total_epochs, total_penalties = 0, 0
episodes = 100

for _ in range(episodes):
    #state = env.reset()
    #Get random game
    epochs, penalties, reward = 0, 0, 0
    
    done = False
    
    while not done:
        action = np.argmax(q_table[state])
        #state, reward, done, info = env.step(action)
        #Get state, rewards of the next step and done

        if reward == -10:
            penalties += 1

        epochs += 1

    total_penalties += penalties
    total_epochs += epochs
    #env.render()

print(f"Results after {episodes} episodes:")
print(f"Average timesteps per episode: {total_epochs / episodes}")
print(f"Average penalties per episode: {total_penalties / episodes}")



