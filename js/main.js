const elPostList = document.querySelector(".js-post-list");
const API_PATH = "https://jsonplaceholder.typicode.com/photos#?_limit=100";
loading = true;

function renderPost (data) {
    data.forEach((item) => {
        const newLi = document.createElement("li");
        const newTitle = document.createElement("h3");
        const newText = document.createElement("p")
    }
}

fetch (API_PATH)
.then ((resorce) => resorce.json())
.then ((data) => {
    console.log(data)
})
.catch ((error) => console.log(error))
.finally (() => {
    console.log("fatch is done");
    loading = false;

});

