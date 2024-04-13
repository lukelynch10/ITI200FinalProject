const express = require("express");
const bodyParser = require("body-parser")
const Pool = require('pg').Pool;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'))
const pool = new Pool({
   user: 'postgres',
   host: 'localhost',
   database: 'lukelynch',
   password: 'postgres',
   port: 5432,
})
app.use(bodyParser.urlencoded({extended: true}));

app.post("/game", (req, res) => {
   
 
   const name = req.body.name;
   const score = req.body.score;
   const sql = "INSERT INTO scores (username, score) VALUES ($1, $2);";
   const data = [name, score];
   pool.query(sql, data, (error, results) => {

      if (error) throw error
   
      res.status(200).json(results.rows)
  });


   // res.status(200).send("ok");
})


// app.get("/game", function (req, res) {

//    const queryResult =  pool.query('SELECT * FROM scores');

//    const scoresArray = queryResult.rows.map(row => ({
//       username: row.username,
//       score: row.score,
//     }));

//     res.json(scoresArray);

//    // const sql = "SELECT * FROM scores;"
//    // const name = res.body.name;
//    // const score = res.body.score;
//    // const data = [name, score];

// //    pool.query(sql, data, (error, results) => {

// //       if (error) throw error
   
// //       res.status(200).json(results.rows)
// //   });
//    // let players = {
//    //       usernames: [queryResult.username],
//    //       scores: [queryResult.score]
//    //    }
   
//    // let player = {
//    //    score: 100,
//    //    playerName: "User"
//    // }

//    // res.json(data);
// });

app.get('/game', async (req, res) => {
   try {
     const queryResult = await pool.query('SELECT * FROM scores');
 
     const scoresArray = queryResult.rows.map(row => ({
       username: row.username,
       score: row.score,
     }));
 
     res.json(scoresArray);
   } catch (error) {
     console.error('Error executing query', error);
     res.status(500).json({ error: 'Internal server error' });
   }
 });
 




app.listen(3000, () => {
   console.log("Listening on port 3000");
});
