const addBtn = document.querySelector("#addButton");
const listCon = document.getElementById('listContainer');
addBtn.onclick = addItem;

function addItem(){
    const boxValue = document.getElementById("textboxu").value;
    const itemEntry = document.createElement("span");
    const entryCon = document.createElement("li")
    itemEntry.textContent = boxValue;

    const deletebtn = document.createElement('button');
    deletebtn.classList.add("delbtn");
    deletebtn.textContent = "Delete"
    deletebtn.style.cssText = "margin: 4px 10px";
    deletebtn.onclick = deleteEntry;

    function deleteEntry(){
        entryCon.remove();
    }

   
    itemEntry.append(deletebtn);
    listCon.appendChild(entryCon);
    entryCon.appendChild(itemEntry); 
}


