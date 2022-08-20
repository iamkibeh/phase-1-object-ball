const gameObject = function () {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook LOpez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
};

// console.log(gameObject());

// A function to calculate the number of points of a player

function numPointsScored(playerName) {
  let object = gameObject();
  for (let key in object) {
    let playersObj = object[key].players;
    // console.log(playersObj);
    for (let player in playersObj) {
      // console.log(player);
      let playerPoints = playersObj[player].points;
      // console.log(playerPoints)
      if (player === playerName) {
        return playerPoints;
      }
    }
  }
}
// console.log(numPointsScored("Bismak Biyombo"));

// A function returning the shoe size of a player

function shoeSize (playerName) {
    let object = gameObject();
  for (let key in object) {
    let playersObj = object[key].players;
    // console.log(playersObj);
    for (let player in playersObj) {
      // console.log(player);
      let playerShoeSize = playersObj[player].shoe;
      // console.log(playerShoeSIze)
      if (player === playerName) {
        return playerShoeSize;
      }
    }
  }
}

// console.log(shoeSize("Bismak Biyombo"));


// a function to return team's colors

function teamColors(teamName){
let object = gameObject();
for (key in object){
    // console.log(object[key].teamName)
    let team = object[key].teamName;
    let teamColors = object[key].colors;
    if (team === teamName){
        return teamColors;
    }
}
}

// console.log(teamColors("Brooklyn Nets"))


// a function to return array of jersey number's for the team

function playerNumbers(teamName){
    let object = gameObject();
    let jerseyArr = [];
    for (key in object){
        // console.log(object[key].teamName)
        let team = object[key].teamName;
    let playersObj = object[key].players;

        if (team === teamName){
for(player in playersObj){
    let jerseyNum = playersObj[player].number;
    // console.log(jerseyNum)
    jerseyArr.push(jerseyNum);
    console.log(jerseyArr)
    return jerseyArr
}
        }
    }
}

// console.log(playerNumbers("Brooklyn Nets"))

// A function returning player stats

function playerStats(playerName){
let object = gameObject();
for (let key in object){
    let playersObj = object[key].players;
for(let player in playersObj){
    // console.log(playersObj[player])
    // if(player === playerName){
        return playersObj[playerName]
    // }
}


}
}

// console.log(playerStats("Alan Anderson"))


// A function that returns the number of rebounds associated with player with largest shoe size

function bigShoeRebounds(){
let shoeSizeArr = [];
let object = gameObject();
for (let key in object) {
    let playersObj = object[key].players;
    // console.log(playersObj);
    for (let player in playersObj) {
      // console.log(player);
      let playerShoeSize = playersObj[player].shoe;
      shoeSizeArr.push(playerShoeSize)
     
    }
  }
  let sortedShoeSizeArr = shoeSizeArr.sort();
  let largestShoeSize = sortedShoeSizeArr[sortedShoeSizeArr.length-1]
//   console.log(largestShoeSize)

return cb(largestShoeSize);
}


function cb(shoeSize){
  let object = gameObject();
  for (let key in object) {
    debugger
    let playersObj = object[key].players;
    // console.log(playersObj);
    for (let player in playersObj) {
        debugger
      // console.log(player);
      let shoeNumber = playersObj[player].shoe;
      debugger
      if(shoeNumber=== shoeSize){
return playersObj[player].rebounds;
      }
     
    }
  }
}
// console.log(bigShoeRebounds());

// Bonus questions

function mostPointsScored(){
    let object = gameObject();
    let pointsArr = [];
    for (let key in object) {
        let playersObj = object[key].players;
        // console.log(playersObj);
        for (let player in playersObj) {
          // console.log(player);
          let playerPoints = playersObj[player].points;
          // console.log(playerPoints)
        //  console.log(playerPoints);
         pointsArr.push(playerPoints);
        }
        
      }
    //   console.log(pointsArr.sort((a,b)=>a-b))
    let sortedArr = pointsArr.sort((a,b)=>a-b)
    return sortedArr[sortedArr.length-1]
}

console.log(mostPointsScored())