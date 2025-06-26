const input = document.querySelector("#input");
const listContainer = document.querySelector("#listContainer");

const list = ["Apple", "Mango", "Banana", "Appricot"];

list.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  listContainer.appendChild(li);
});

input.addEventListener("input", () => {
  search(input.value);
});

const search = (searchStr) => {
  listContainer.innerHTML = "";
  let found = false;
  list.forEach((item) => {
    if (item.toLowerCase().includes(searchStr.toLowerCase())) {
      listContainer.innerHTML += `<li>${highlightMatch(item,searchStr)}</li>`;
      found = true;
    }
  });
  if (!found) {
    listContainer.innerHTML = `<li style="color:red;">No results found</li>`;
  }
};

const highlightMatch = (item, searchStr) => {
  const regex = new RegExp(`(${searchStr})`, 'gi');
  return item.replace(regex, `<strong>$1</strong>`);
};
