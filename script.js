const apiEndpoint = "https://jsonplaceholder.typicode.com/users";

const display = document.querySelector("#display-data");

const userInput = document.querySelector("#userInput");

const getData = async () => {
  const res = await fetch(apiEndpoint);
  const data = await res.json();
  return data;
};

const displayUsers = async () => {
  // storing our search result in the variable searchResult
  searchResult = userInput.value;
  console.log("searchResult", searchResult);
  
  // the payload holds our users into an array
  const payload = await getData();
//   console.log("payload::", payload)

  //the map method maps through the payload and display it in the DOM
  //the filter methods takes in a parameter and this parameter represent all 
  //the data coming in from the user.
  let dataDisplay = payload.filter((eventData) => {
    if(searchResult === '') {return eventData}
    else if (eventData.name.toLowerCase().includes(searchResult.toLowerCase())) return eventData
  }).map((object) => {
      const { name, username } = object;

      return `
    <div class="container">
    <p>Name: ${name} </p>
    <p>Username: ${username}</p>
    </div>
    <hr>
    `;
    })
    .join("");
  display.innerHTML = dataDisplay;
//   console.log("Data-Display::", dataDisplay)

};


userInput.addEventListener("input", () => {
    displayUsers()
})


