function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
                "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
                "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
                "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
                "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
                "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
                "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
                "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
                "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 },
            },
        },
    };
}

function playerStats(playerName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName];
        }
    }
    return null;
}

function numPointsScored(playerName) {
    let stats = playerStats(playerName);
    return stats ? stats.points : null;
}

function shoeSize(playerName) {
    let stats = playerStats(playerName);
    return stats ? stats.shoe : null;
}

function teamColors(teamName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return null;
}

function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return Object.values(game[team].players).map(player => player.number);
        }
    }
    return [];
}

function listAllPlayers() {
    let game = gameObject();
    let allPlayers = [];
    for (let team in game) {
        for (let player in game[team].players) {
            allPlayers.push(player);
        }
    }
    return allPlayers;
}

// ✅ FIXED FUNCTION: Get Winning Team
function winningTeam() {
    let game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    // Calculate home team points
    for (let player in game.home.players) {
        homePoints += game.home.players[player].points;
    }

    // Calculate away team points
    for (const player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }

    // Determine the winner
    if (homePoints > awayPoints) {
        return `🏆 The winning team is: ${game.home.teamName} with ${homePoints} points!`;
    } else if (awayPoints > homePoints) {
        return `🏆 The winning team is: ${game.away.teamName} with ${awayPoints} points!`;
    } else {
        return "🤝 It's a tie!";
    }
}

// ✅ Now Call the Function
console.log(winningTeam());

window.winningTeam = winningTeam;
