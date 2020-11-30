# Datasets - IPL (Indian Premier League)

One of the datasets used in this project is taken from the
Kaggle [source](https://www.kaggle.com/nowke9/ipldata). This consists of two .csv files deliveries.csv and
`matches.csv`.

The file `deliveries.csv` contains the ball by
ball data of every match since 2008. Data includes
columns such as bowling team, batting team, over, ball,
batsman etc. This dataset has a total of 21 columns and
179078 rows. 

The file `matches.csv` contains details about
the match as a whole. Data includes columns such as
season, city, teams, toss_winner, toss_decision, etc.

The second dataset used was obtained from the official
[IPL website](https://www.iplt20.com/). It has scraped using a Scraper that can be found here [scraper.js](https://github.com/Lavitra15/DataAnalytics-Project/blob/main/scraper.js)
This dataset consists of the playing XI
details for every match that has been played in the IPL
from 2008 to 2020 and also includes the respective player
stats such as the player’s full and short name, date of birth, nationality and their skillset. The winner, score of
both teams and date of every match was also obtained.
This dataset consisting of 167422 lines of data was
extracted in JSON format and was converted into a
Dataframe.

## Running the Scraper (Incase you are interested on how to run it)

Copy the [scraper.js](https://github.com/Lavitra15/DataAnalytics-Project/blob/main/scraper.js) code and head over to [IPL website](https://www.iplt20.com/).
Press `F12`. Open the Console tab and paste the code and hit `Enter`.
After a few minutes, once the scraping is complete. You will notice a `Show more` button, click that.
Then you will find a `Copy` button. Copy that paste it in your code editor and hopefully use a `Prettier` to format it neatly.
