const textField = document.getElementById("text-field");
const listContainer = document.getElementById("list-container");

function addItem()  {
    if(textField.value === '')  {
        alert("You should type something n the text field before pressing the add button!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = textField.value;
        listContainer.appendChild(li);
        let span =  document.createElement("span");
        span.innerHTML = '\u2a2f';
        li.appendChild(span);
    }
    textField.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === 'LI')   {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN")  {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("todolist-data", listContainer.innerHTML);
}

function retreiveData() {
    listContainer.innerHTML = localStorage.getItem("todolist-data");
}

retreiveData();
