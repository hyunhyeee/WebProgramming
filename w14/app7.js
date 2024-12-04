const express = require('express');
const app = express();

// 미들웨어 정의
app.use(function (req, res, next) {
  const userAgent = req.header('User-Agent');
  const paramName = req.query.name; // URL 쿼리 파라미터에서 'name' 값 가져오기

  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  res.write('<h1>Express 서버에서 응답한 결과</h1>');
  res.write(`<div><p>User-Agent: ${userAgent}</p></div>`);
  res.write(`<div><p>Param name: ${paramName}</p></div>`);
  res.end();
});

// 서버 실행
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express 서버가 ${PORT}번 포트에서 실행 중입니다.`);
});
