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
        itemList.append(newItem); //show list item   


        listBorder();
        //add to LocalStorage
        newItem.id = Math.random();
        window.localStorage.setItem(`${newItem.id}`,inputText)
        
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
        //remove from LocalStorage
        const itemId = removeBtn.parentElement.id;
        window.localStorage.removeItem(`${itemId}`)
    }
    removeBtn.addEventListener("click", removeItem);

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

const loadData = () => {
    // Object.keys(localStorage).forEach(function(key){
    // console.log(localStorage.getItem(key));

    // const itemList = document.getElementsByClassName("item-box")[0];
    // const newItem = document.createElement("li"); //create list item
    // newItem.innerText = localStorage.getItem(key); //add text to list item
    // newItem.classList.add("list-item"); //add style class
    // itemList.append(newItem); //show list item  

    
    // // newItem.id = storage.key(key); 
    //     console.log(findIndexOfKey(key))
    // listBorder();
    // });
}