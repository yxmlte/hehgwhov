const s = document.createElement('p');
s.innerText = "loaded";
s.style = "position:fixed;top:0px;left:0px;background-color:red;"
document.body.appendChild(s);

url = "https://yxmlte.github.io/hehgwhov/test.json";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const s = document.createElement('p');
    s.innerText = data.message;
    s.style = "position:fixed;top:10px;left:0px;background-color:blue;"
    document.body.appendChild(s);
  });
