const url = "https://rickandmortyapi.com/api/character"
document.body.style.textAlign = 'center';
function sendRequest(urlResponse) {
  return fetch(urlResponse).then(response => {
    return response.json()
  })
}
sendRequest(url)
  .then(data => {
    const arr = [...data.results];
    arr.map(item => {
      const newDiv = document.createElement('div');
      newDiv.style.width = '200px'
      newDiv.innerHTML = `<img href="${item.image}" width="200px" height="200px">${item.name}`;
      document.body.insertBefore(newDiv, document.body.lastChild);
    })
  })