require("console-stamp")(console, {
  colors: {
    stamp: "yellow",
    label: "white",
    metadata: "green"
  }
});

function log(msg, type) {
  switch (type) {
    case "warning":
      console.warn(msg)
      break;
    case "error":
      console.error(msg)
      break;
    case "info":
      console.info(msg)
      break;
    default:
      console.log(msg)
  }
}

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');

const db = require('knex')({
  client: 'sqlite3',
		connection: {
			filename: config.databaseFilename
		},
		useNullAsDefault: true
});

require('./database/db.js')(db)

app.set('port', config.port);
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
  res.render('home');
});

if (config.slackBot.active) {
  log('Slack Bot is currently active.', null);
} else {
  log('Slack Bot is currently disabled.', 'warning');
}

app.listen(app.get('port'), () => {
  log(`JimboBot started @ http://localhost:${config.port}`, null)
});
