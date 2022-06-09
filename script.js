const jokeEl = document.getElementById("joke");
const jokebtn = document.getElementById("jokebtn");

const generateJoke = async () => {
    const config = {
        headers: { Accept: "application/json" },
    };
    const res = await fetch("https://icanhazdadjoke.com/", config);
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
};

generateJoke();

jokebtn.addEventListener("click", () => generateJoke());