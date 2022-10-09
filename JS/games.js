fetch('./JSON/games.json')
.then(function (response) {
  return response.json();
})
.then(function (data) {
  for (let i = 0; i < data.games.length; i++) {
    var timestamp = data.games[i].timestamp

    var today = new Date();
    var game_date = new Date(
      year = Number(timestamp.substring(0, 4)), 
      monthIndex = Number(timestamp.substring(4, 6)) - 1, 
      day = Number(timestamp.substring(6, 8)), 
      hours = Number(timestamp.substring(9, 11)),
      minutes = Number(timestamp.substring(11, 13))
    )

    if (today < game_date) {
      document.getElementById("list").innerHTML += `
        <a href="https://calendar.google.com/calendar/r/eventedit?location=${data.games[i].address}&dates=${data.games[i].timestamp}&ctz=${data.games[i].ctz}" target="_blank">
          <div class="game-container">
            <div class="game-details">
              <div class="opponent-name">
                vs. ${data.games[i].opponent}
              </div>
              <div class="game-location">
              ${data.games[i].location}
              </div>
              <div class="game-time">
              ${data.games[i].time}
              </div>
            </div>
            <div style="background-image: url('${data.games[i].logo}'); background-size: contain; background-repeat: no-repeat; background-position: center; margin: 0 0 0 0; width: 36px; height: 36px; display: flex; justify-content: center; align-items: center;"
          </div>
        </a>
        `;
    }
  }
})
.catch(function (err) {
  console.log(err);
})