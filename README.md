## Overview

The domain of stock market is antithesis to terms like patience and calm - people just read final values and guess a reason for it without knowing. For most ordinary people, how to do stock trading is almost like “secret skills”,  requires understanding and deep insight of stock market and companies.

AI, on the other hand, have been widely implemented and applied in various fields, including financial industries. In fact many financial companies have their own machine learning techniques to make profit. Such techniques are so complicated and guarded as trading secrets. In real life, AI compete with human in stock trading market to keep the business running, but what if we make it a simple game?

In this project, we implemented a simple little game to test the user stock trading skills against the market and a machine learning algorithm. The game is trying to simulate a simple scenario in real life: given a single changing stock, how do a human  trader make trading decision to maximize the profit as possible, or at least, outrun an AI competitor?

In each round of the game, a random stock will be given with a random 365-day period of time. The user and the AI will each start with 3 stocks. During the game period, each of them will do 3 "buys" and 3 “sells”, respectively. In the end of game, the total amount of stock value and cash value will be recorded and compared. For each round we list out the ranking of user, AI and market, and assign them with different score values. Such score values will be accumulated through out the game process.

## Getting Started

In order to run a dev server on your local host, you will need to first install all the required npm packages for the frontend.

`cd client`

`npm install`

Now that you have installed all the required frontend packages, you can start the frontend server on port 3000:

`npm start`

Next you will need to install the required python packages:

`cd ..`
`pip install -r requirements.txt`

Now you can open up an additional terminal and start up a server for the backend on port 5000:

`export FLASK_APP=app.py`

`export FLASK_ENV=development`

`flask run`

Now you are all set up!

