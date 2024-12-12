import express from "express";
import { supabase } from "./src/services/supabase.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/queries", async (req, res) => {
  const { error } = await supabase.from("queries").insert({
    city_name: req.body.name,
    temperature: req.body.temp,
    weather_conditions: req.body.description,
    recommended_activity: req.body.activity,
  });
  if (error) {
    res.send(error);
  }
  res.send("created");
});

app.get("/stats", async (req, res) => {
  const { data: count } = await supabase.from("count_queries").select("*");
  const { data: top5 } = await supabase.from("top_5").select("*");
  const { data: last10 } = await supabase.from("last_10").select("*");

  res.send({ count: count, top5: top5, last10: last10 });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port:${port}`);
});

// I created some views in database to select proper data

// create view last_10 as
// select
//  to_char(query_date,
// 'YYYY-MM-DD HH24:MI:SS'
// ) query_date, city_name, recommended_activity from queries
// order by queries
// desc
// limit 10

// create view top_5 as
// select count(*) amount,city_name from queries group by city_name order by count(*) desc limit 5

// create view count_queries as
// select count(*) from queries
