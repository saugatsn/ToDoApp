document.addEventListener("DOMContentLoaded", () => {
  const lists = () => {
    keysArr = Object.keys(localStorage).sort((a, b) => b - a);
    console.log(keysArr);
    let ihtml = "";
    keysArr.forEach((element) => {
      ihtml += `<div class='todo-item' id=${element}> <input type="checkbox" class="checkbox" name="option" value="option1"> ${localStorage[element]} <i class="fa-solid fa-trash fa-fade"></i></div>`;
    });
    let listContainer = document.getElementById("listContainer");
    listContainer.innerHTML = ihtml;
  };

  lists();
  let but = document.getElementById("form");
  but.addEventListener("submit", (event) => {
    event.preventDefault();
    let todoData = document.getElementById("todoData").value;
    let timestamp = Date.now();
    localStorage.setItem(timestamp, todoData);
    lists();
  });
  let del = document.querySelector(".deleteAll");

  del.addEventListener("click", () => {
    localStorage.clear();
    let listContainer = document.getElementById("listContainer");
    listContainer.innerHTML = "";
  });

  listContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-trash")) {
      let butId = event.target.parentNode.id;
      localStorage.removeItem(butId);
      lists();
    }
  });
  listContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("checkbox")) {
      console.log(event);
      const checkbox = event.target;
      const isChecked = checkbox.checked;
      if (isChecked) {
        let parentId = checkbox.parentNode.id;
        parentElem = document.getElementById(parentId);
        parentElem.style.textDecoration = "line-through";
      } else {
        parentElem.style.textDecoration = "none";
      }
    }
  });
});
