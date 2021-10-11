const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => 
{
  res.send("<h1>Series of Votes</h1>");
  
});

const seriesofvotes = [
  {  
    name: "Breaking Bad", 
    voit: "0" 
  },
  { 
    name: "GAME OF THRONES", 
    voit: "0" 
  },
  { 
    name: "THE WIRE", 
    voit: "0" 
  },
  { 
    name: "Rick and Morty", 
    voit: "0" 
  },
  { 
    name: "The Last Dance", 
    voit: "0" 
  },
  { 
    name: "Sherlock", 
    voit: "0" 
  },
  { 
    name: "True Detective", 
    voit: "0" 
  },
  { 
    name: "The Office", 
    voit: "0" 
  },
  { 
    name: "Fargo", 
    voit: "0" 
  },
  { 
    name: "Dark", 
    voit: "0" 
  },
  { 
    name: "Westworld", 
    voit: "0" 
  },
  { 
    name: "Doktor House", 
    voit: "0" 
  },
  { 
    name: "Vikingler", 
    voit: "0" 
  },
  { 
    name: "Lost", 
    voit: "0" 
  },
  { 
    name: "Prison Break", 
    voit: "0" 
  },
  { 
    name: "The Walking Death", 
    voit: "0" 
  },
];

io.on("connection", (socket) => 
{
  console.log("a user connected");

  io.emit("new-option", Seriesofvotes);

  socket.on("new-option", (Seriesofvotes) =>
   {
    console.log("New select", Seriesofvotes);

    const data = seriesofvotes;

    const index = data.findIndex((Seriesofvotes) => Seriesofvotes.Seriesofvotes === Seriesofvotes);

    data[index].voit = parseInt(data[index].voit) + 1;

    io.emit("new-option", seriesofvotes);

  });

  socket.on("disconnect", () => console.log("a user disconnected"));

});


server.listen(3000, () => {
  console.log("listening on *:3000");
});
