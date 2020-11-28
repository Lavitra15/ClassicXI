# DataAnalytics-Project

This repo is for the Semester 5 Project for the course UE18CS312: Data Analytics

## Abstract

## Rating Algorithms

### I. Modelling Batsmen

**Input**: Players data from IPL 2008 to 2019 seasons, IPL Career Stats  
**Output**: Batsman Rating

#### Features for the Batsman model:

1. Number of innings
2. Batsman Average
3. Strike Rate
4. Fifties
5. Hundreds
6. Number of Not outs
7. Number of 4s and 6s

#### Algorithm

```
for all players in the dataset:
    
    // All time Form ( IPL 2008 to 2019 )
    matches = Number of innings batted in (Min Max Normalization)
    achievement_weight = (15 x Hundreds) + (5 x Fifties)
    career_stat_score = (0.3 x achievement_weight) + (0.55 x Batsman Average) + (0.15 x Strike Rate)
    Overall_Career_Score = (matches x career_stat_score)

end for


for all players in the dataset:
    
    // Recent Form ( IPL 2018 to 2019 )
    matches = Number of innings batted in (Min Max Normalization)
    achievement_weight = (15 x Hundreds) + (5 x Fifties)
    career_stat_score = (0.3 x achievement_weight) + (0.55 x Batsman Average) + (0.15 x Strike Rate)
    Recent_Score = (matches x career_stat_score)

end for

for all players in the dataset:
    Overall_Career_Score = Overall_Career_Score / max(Overall_Career_Score)
    Recent_Score = Recent_Score / max(Recent_Score)
    Batsman Rating = (0.4 x Overall_Career_Score) + (0.6 x Recent_Score)
end for

Min Max Normalise( Batsman Rating ) X 100
```

### II. Modelling Bowler

**Input**: Players data from IPL 2008 to 2019 seasons, IPL Career Stats  
**Output**: Bowler Rating

#### Features for the Bowler model:

1. Number of Innings
2. Bowling Economy
3. Bowling Average
4. Bowling Strike Rate
5. 4 wicket Hauls
6. 5 wicket Hauls
7. Wickets Taken
8. Maiden overs
9. Number of dot balls

#### Algorithm

```
for all players in the dataset:
    
    // All time form ( IPL 2008 to 2019 )
    matches = Number of innings bowled in (Min Max Normalization)
    wicket_weight = (30 x 5_wicket_haul) + (20 x 4_wicket_haul) + (10 x Wickets_Taken)
    achievement_weight = (5 x Maiden_Overs) + dot_balls
    career_stat_score = (Bowling Average) + (Bowling Economy) + (1 / 1 + achievement_weight)
    Overall_Career_Score = (matches x wicket_weight) / (career_stat_score) 

end for

for all players in the recent form dataset:
   
    // Recent Form ( IPL 2018 and 2019 ) 
    matches = Number of innings bowled in (Min Max Normalization)
    wicket_weight = (30 x 5_wicket_haul) + (20 x 4_wicket_haul) + (10 x Wickets_Taken)
    achievement_weight = (5 x Maiden_Overs) + dot_balls
    stat_score = (Bowling Average) + (Bowling Economy) + (1 / 1 + achievement_weight)
    Recent_Score = (matches x wicket_weight) / (stat_score) 
    
end for

for all players in the dataset:
    Overall_Career_Score = Overall_Career_Score / max(Overall_Career_Score)
    Recent_Score = Recent_Score / max(Recent_Score)
    Bowler Rating = (0.35 x Overall_Career_Score) + (0.65 x Recent_Score)
end for

Min Max Normalise( Bowler Rating ) x 100
```


Team Members:
1. [Lavitra Kshitij Madan](https://github.com/Lavitra15)
2. [Ritik Hariani](https://github.com/RITIKHARIANI)
3. [Arjun Chengappa](https://github.com/arjunchengappa)
4. [Aditya G Burli](https://github.com/AdityaBurli06)
