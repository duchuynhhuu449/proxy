const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());

app.get("/proxy", async (req, res) => {
  const apiUrl = req.query.url;
  if (!apiUrl) return res.status(400).send("Thiếu URL API!");

  try {
    const response = await fetch(apiUrl, { method: "GET" });
    const data = await response.text();
    res.set("Content-Type", "application/json");
    res.send(data);
  } catch (error) {
    res.status(500).send("Lỗi server proxy!");
  }
});

app.listen(3000, () => console.log("Proxy chạy trên cổng 3000"));
