const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apikey = "nd6CFFVeaaZzEM6E1xyxf3xMeAiY9wfwXT6CcP8R";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke(){
    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data= await response.json();
    
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
    
        jokeEl.innerText = data[0].joke;
    } catch (error) {
        console.log(error);
        jokeEl.innerText = "An error happened,try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
    }
   
    
}
btnEl.addEventListener("click", getJoke);