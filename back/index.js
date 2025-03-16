var express = require("express"); //import de la bibliothèque Express
var app = express(); //instanciation d'une application Express

// Pour s'assurer que l'on peut faire des appels AJAX au serveur
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Ici faut faire faire quelque chose à notre app...
// On va mettre les "routes"  == les requêtes HTTP acceptéés par notre application.

/* app.get("/test/*", function (req, res) {
  return res.json({ msg: req.url.substring(6) });
}); */

/* var compteur = 0;

app.get("/cpt/query", (req, res) => {
  return res.json(compteur);
});

app.get("/cpt/inc", (req, res) => {
  const inc = req.query.v;
  if (inc == undefined) {
    compteur += 1;
    return res.json({ code: 0 });
  }

  try {
    trueInc = parseInt(inc);
    if (!Number.isNaN(trueInc)) {
      compteur += trueInc;
      return res.json({ code: 0 });
    } else return res.json({ code: -1 });
  } catch {
    return res.json({ code: -1 });
  }
}); */

var allMsgs = [
  { msg: "Hello World", user: "Loke", updated: "0000-00-00" },
  { msg: "Blah Blah", user: "Elon", updated: "2025-01-01" },
  { msg: "I love cats", user: "Sigma", updated: "2025-03-07" },
];

app.get("/msg/get/*", (req, res) => {
  try {
    const id = parseInt(req.params[0]);
    if (allMsgs.length <= id) return res.json({ code: 0 });
    return res.json({ code: 1, ...allMsgs[id] });
  } catch {
    return res.json({ code: 0 });
  }
});

app.get("/msg/nber", (req, res) => res.json(allMsgs.length));

app.get("/msg/getAll", (req, res) => res.json(allMsgs));

app.get("/msg/post/*", (req, res) => {
  allMsgs.push({
    msg: decodeURI(req.params[0]),
    updated: new Date().toISOString(),
  });
  return res.json(allMsgs.length - 1);
});

app.get("/msg/del/*", (req, res) => {
  try {
    allMsgs.splice(req.params[0], 1);
    return res.json({ code: 1 });
  } catch {
    return res.json({ code: 0 });
  }
});

app.listen(8080); //commence à accepter les requêtes
console.log("App listening on port 8080...");

