let button = document.querySelector('.get-jokes');
button.addEventListener("click", getJokes);


function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}, true`);

  console.log(number)

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.response);
      let output = '';

      if(response.type === "success") {
        response.value.forEach((joke) => {
          output += `<li>${joke.joke}</li>`
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector(".jokes").innerHTML = output;
    }
  }

  xhr.send();
  e.preventDefault();
}