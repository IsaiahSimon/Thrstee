// Add an event listener on button click
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  const url = 'http://www.boredapi.com/api/activity/' //update

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let h2 = document.querySelector('h2'); //update
        h2.innerHTML = data.activity; //update
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
