
# WebProgramming

1주차 수업 HTML 리뷰

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>기본 테이블 만들기</title>
</head>

<body>
  <header>
    <h1>Web Programming</h1>
  </header>

  <nav>
    <ul>
      <li><a href="#week1">week1</a></li>
      <li><a href="#week2">week2</a></li>
      <li><a href="#week3">week3</a></li>
    </ul>
  </nav>
  <hr>
  <hr>
  <main>
    <h4>웹에 관하여</h4>

    <section>
      <details>
        <summary>웹의 기본 목적</summary>
        <p>웹의 기본 목적은 한 컴퓨터에서 만든 문서를 다른 컴퓨터에서 쉽게 볼 수 있게 하는 것이다.</p>
      </details>
      <details>
        <summary>왜 Why?</summary>
        <p>전 세계의 컴퓨터들을 인터넷으로 연결한 시스템을 www, 즉 웹이라고 부른다.</p>
      </details>
    </section>
    <br><br>

    <section>
      <table border="1">
        <caption>Weekly Schedule</caption>
        <thead>
          <tr>
            <th>Week</th>
            <th>Date</th>
            <th>Contents</th>
          </tr>
        </thead>

        <tbody style="text-align: center;">
          <tr>
            <td>1</td>
            <td>Sept. 2</td>
            <td>
              <ul>
                <li>강의 개요</li>
                <li>웹의 개념과 구조</li>
                <li>Visual Studio Code</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Sept. 9</td>
            <td>HTML Review</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Sept. 16</td>
            <td>CSS Review</td>
          </tr>
        </tbody>
      </table>
    </section>
    <br><Br>
    <ol>
      <section>
        <li><b>week 1</b></li>
        <ul>
          <li><a href="#info">강의 개요</a></li>
          <li><a href="#history">웹의 개념과 역사</a></li>
          <li><a href="#vscode">Visual Studio Code</a></li>
          <ol>
            <li>설치</li>
            <li>유용한 plug-ins</li>
            <ul>
              <li>Material Theme</li>
              <li>Prettier</li>
              <li>indent-rainbow</li>
              <li>Auto Rename Tag</li>
              <li>HTML CSS Support</li>
              <li>Live Server</li>
            </ul>
            <li>EMMET</li>
          </ol>
        </ul>
      </section>
      <hr>
      <section>
        <li><b>week 2: HTML, Review</b></li>
        <br>
        <b>Input Types</b>
        <br> <br>
        <ins>Check Box</ins>
        <br><br>
        <form>
          <input type="checkbox" value="1">HTML5
          <input type="checkbox" value="2">CSS3
          <input type="checkbox" value="3">JavaScript
        </form>
        <br>
        <ins>Radio Button</ins>
        <br><br>
        <form>
          <input type="radio" name="china" value="1">HTML5<br>
          <input type="radio" name="china" value="2">CSS3<br>
          <input type="radio" name="china" value="3">JavaScript
        </form>
        <br>
        <ins>Combo Box</ins><br><br>
        <form>
          <select name="combo">
            <option value="1">HTML5</option>
            <option value="2">CSS3</option>
            <option value="3">JavaScript</option>
          </select>
        </form>
      </section>
      <hr>

      <section>
        <li><b>week 3: CSS Review</b></li>
        <br><br><Br>
      </section>
    </ol>
  </main>
</body>
<hr>
<footer>
  Copyright &copy; 2024 by Sung-Dong All Rights Reserved
</footer>

</html>
