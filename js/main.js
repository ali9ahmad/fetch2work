const elItemResult = document.querySelector(".js-item-result");
const elItemTemp = document.querySelector(".js-card-temp").content;
const API_PATH = "https://jsonplaceholder.typicode.com/photos#";
loading = true;
newPostFragment = document.createDocumentFragment();

function renderPost (data) {
    data.slice(0, 100).forEach((item) => {
        const cloneItem = elItemTemp.cloneNode(true);
        
        cloneItem.querySelector(".js-item-title").textContent = item.title;
        cloneItem.querySelector(".js-item-photo").src = item.thumbnailUrl;
        cloneItem.querySelector(".js-item-url").textContent = item.url;
        
        newPostFragment.appendChild(cloneItem);

    });

    elItemResult.appendChild(newPostFragment);
}

fetch (API_PATH)
.then ((resorce) => resorce.json())
.then ((data) => {
    console.log(data)
    renderPost(data);
})
.catch ((error) => console.log(error))
.finally (() => {
    console.log("fatch is done");
    loading = false;
});

