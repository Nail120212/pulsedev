window.GAMES = [];

(function () {
  let gamename, gamelogo, status, changelogs, features;

  gamename = "Diesel n Steel";
  gamelogo = "https://tr.rbxcdn.com/180DAY-a79b1f2af4319127d5a9e765c3b58d29/768/432/Image/Webp/noFilter";
  status = "Undetected";
  changelogs = [
    { date: "2026-05-16", text: "Initial release. Core features added." },
    { date: "2026-05-10", text: "Beta testing phase started." }
  ];
  features = [
    { name: "Feature 1", desc: "Description of feature 1." },
    { name: "Feature 2", desc: "Description of feature 2." },
    { name: "Feature 3", desc: "Description of feature 3." }
  ];
  GAMES.push({ name: gamename, logo: gamelogo, status: status, changelogs: changelogs, features: features });

})();
