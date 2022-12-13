// express 모듈 추가
const express = require("express");
const app = express();
// 서버 실행 포트
const port = 3001;
//번호(id) , 포켓몬 이름 , 이미지 주소
const pokemons = [
  {
    name: "이상해씨",
    add: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000101.png",
  },
  {
    name: "파란색리자몽",
    add: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000602.png",
  },
  {
    name: "거북왕",
    add: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000901.png",
  },
];

//pokemon 요헝
app.get("/pokemon/:id", (req, res) => {
  //req.params 클라이언트 요청
  console.log(req.params);
  //포켓몬 이름 ,이미지 같이 보여주기
  res.send(`<img src=${pokemons[req.params.id].add} alt=${req.params.id} />
  <h1>${pokemons[req.params.id].name}</h1>
  `);
});

// get 요청 처리문
app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/about.html", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

//404
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/404.html");
});

// 서버오픈
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
