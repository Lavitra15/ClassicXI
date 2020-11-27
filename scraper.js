console.clear();

async function getData(url, json) {
    const headers = {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9,la;q=0.8",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "same-origin",
            "sec-fetch-site": "same-origin",
            "upgrade-insecure-requests": "1"
        },
        "referrer": "https://www.iplt20.com/matches/results/women/2020",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    }
    let data = await fetch(url, headers);
    if(json) data = await data.json();
    else data = await data.text();
    return data;
}


async function getMatches(year) {
    const url = `https://www.iplt20.com/matches/results/men/${year}`;
    const html = await getData(url);

    const container = document.createElement('div');
    container.innerHTML = html;

    const match_elements = container.getElementsByClassName('match-list__item');

    const matchesData = {};
    

    for(let i = 1; i <= match_elements.length; ++i) {
        const me = match_elements[i - 1];
        const team1 = {};
        const team2 = {};

        const id = me.getAttribute('data-match-id');

        let winner = '';

        const team_names = me.getElementsByClassName('result__team-name');
        team1.name = team_names[0].textContent;
        team2.name = team_names[1].textContent;

        const score_elements = me.getElementsByClassName('result__score');
        if(score_elements.length) {
            team1.score = score_elements[0].textContent;
            team2.score = score_elements[1].textContent;
        }

        
        let match_details = await fetch(`https://cricketapi.platform.iplt20.com//fixtures/${id}/scoring`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,la;q=0.8",
                "account": "ipl",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "referrer": "https://www.iplt20.com/match/2020/60?tab=scorecard",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        });
        match_details = await match_details.json();        
        
        const date = match_details.matchInfo.matchDate;
        const venue = match_details.matchInfo.venue.fullName;
        const teams = match_details.matchInfo.teams;
        winner = match_details.matchInfo.matchStatus.text;

        let cur_team = teams[0].team.fullName == team1.name ? teams[0]: teams[1];
        team1.players = cur_team.players.map((player) => {
            delete player.id;
            return player;
        })

        cur_team = teams[0].team.fullName == team2.name ? teams[0]: teams[1];
        team2.players = cur_team.players.map((player) => {
            delete player.id;
            return player;
        })
                        
        matchesData[i] = { team1, team2, winner, date, venue };
    }

    return matchesData;
}

async function getSeasons() {
    const data = {};
    for(let year = 2008; year <= 2020; ++year) {
        console.log(`Getting ${year} season...`);
        data[year] = await getMatches(year);
    }        
    
    console.log(JSON.stringify(data));
}

getSeasons();