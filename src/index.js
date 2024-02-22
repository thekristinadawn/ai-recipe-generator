function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "bc96c7e4d1otea7a98c0307cfdf6305b";
  let context =
    "You are a recipe food expert. Your mission is to generate a 5 ingredients or less recipe. Make sure to follow the user instructions with the ingredient that they want to include. The recipe should be simple. ";
  let prompt = `User instructions: Generate a recipe that includes ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⌛ Generating a recipe with 5 ingredients or less with ${instructionsInput.value}</div>`;

  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
