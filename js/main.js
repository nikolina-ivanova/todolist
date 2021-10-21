//Light|Dark Mode
const toggleMode = () => {
    const toggleBtn = document.getElementById("switch");
    if(toggleBtn.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else
    document.documentElement.setAttribute('data-theme', 'light');
};

//add todo item
const addBtn = document.getElementById("addBtn");
// var removeBtn = document.createElement("button");
const addItem = () => { //run when click add
    var input = document.getElementById("input"); //get the input text
    var inputText = input.value;
    if(inputText != "") {
        const itemList = document.getElementsByClassName("item-box")[0]; //list
        //add the text to new item
        const newItem = document.createElement("li"); //create list item
        newItem.innerText = inputText; //add text to list item
        newItem.classList.add("list-item"); //add style class
        itemList.append(newItem) //show list item   

        //add removeBtn
        var removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.id = "removeBtn";
        newItem.append(removeBtn)  
    }    
    input.value = ''; //set value to empty

    const removeItem = () => {
        removeBtn.parentElement.remove();
        listBorder();
    }
    removeBtn.addEventListener("click", removeItem);

    listBorder();
};
addBtn.addEventListener("click", addItem);


//remove item-box border if empty
const listBorder = ()=> {
    var list = document.getElementsByClassName("item-box")[0];
    if(document.getElementsByClassName("list-item").length < 1){
        list.style.border = "none";
    }
    else
    list.style.border = "1px solid var(--dark-dark)";
};