// Matt Nowakowski
// MIU
// term 1304
// Project 2

window.addEventListener("DOMContentLoaded", function doItAll(){

    function grab(e){
        var elementID = document.getElementById(e);
        return elementID;
    }

    function makeSelect(){
        var formTag = document.getElementsByTagName("form"),
            selectLi = grab("select"),
            makeSelect = document.createElement("select");
        makeSelect.setAttribute("id", "weapons");
        for(var i = 0, j = weaponType.length; i < j; i++){
            var makeOption = document.createElement("option");
            var optText = weaponType[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }

    function getRadio(){
        var radios = document.forms[0].deadly;
        for(var i = 0; i < radios.length; i++){
            if (radios[i].checked){
                deadlyValue = radios[i].value;
            }
        }
    }

    function getCheckbox(){
        if(grab('liked').checked){
            likedValue = grab('liked').value;
        } else {
            likedValue = "No"
        }
    }

    function toggleControls(n){
        switch(n){
            case "on":
                grab("weaponForm").style.display = "none";
                grab('clearData').style.display = "inline";
                grab("displayData").style.display = "none";
                grab("addNew").style.display = "inline";
                break;
            case "off":
                grab("weaponForm").style.display = "block";
                grab('clearData').style.display = "inline";
                grab("displayData").style.display = "inline";
                grab("addNew").style.display = "none";
                grab("items").style.display = "none";
                break;
            default:
                return false;
        }
    }

    function validate(e){
        var getWeaponName = grab("wn");
        var getWeaponCategory = grab("weapons");

        errMsg.innerHTML = "";
        getWeaponName.style.border = "1px solid black";
        getWeaponCategory.style.border = "1px solid black";

        var messageArray = [];

        if(getWeaponName.value === ""){
            var weaponNameError = "Please enter media name.";
            getWeaponName.style.border = "2px solid red";
            messageArray.push(weaponNameError);
        }

        if(getWeaponCategory.value === "--Media Type--"){
            var weaponCategoryError = "Please choose a Media type.";
            getWeaponCategory.style.border = "2px solid red";
            messageArray.push(weaponCategoryError);
        }

        if(messageArray.length >= 1){
            for(var i = 0, j = messageArray.length; i < j; i++){
                var text = document.createElement("li");
                text.innerHTML = messageArray[i];
                errMsg.appendChild(text);
            }
            e.preventDefault();
            return false;
        } else {
            storeData(this.key);
        }
    }

    function storeData(key){
        if(!key){
            var id = Math.floor(Math.random()*100000001);
        } else {
            id = key;
        }
        getRadio();
        getCheckbox();
        var item = {};
        item.weaponName = ["Media Name:", grab("wn").value];
        item.weaponCategory = ["Media type:", grab("weapons").value];
        item.deadly = ["Media format:", deadlyValue];
        item.liked = ["favorite:", likedValue];
        item.rating = ["rating:", grab("weapon").value];
        item.comments = ["comments:", grab("comments").value];
        localStorage.setItem(id, JSON.stringify(item));
        alert("media saved!");
    }

    function autoFillData(){
        for(var n in json){
            var id = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        }
    }

    function getData(){
        toggleControls("on");
        if(localStorage.length === 0){
            var ask = confirm("There is no media. Would you like to auto-fill the Database?");
            if(ask){
                autoFillData();
            } else {
                window.location.reload();
            }
        }
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id", "items");
        makeDiv.setAttribute("data-role", "content");
        makeDiv.setAttribute("data-add-back-btn", "true");
        var makeList = document.createElement("ul");
        makeList.setAttribute("data-role","listview");
        makeList.setAttribute("data-theme", "a");
        makeList.setAttribute("data-inset","true");
        makeList.setAttribute("data-filter", "true");

        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        grab("items").style.display = "block";
        for(var i = 0, len=localStorage.length; i < len; i++){
            var makeli = document.createElement("li");
            makeli.setAttribute("id","listele")
            var linksLi = document.createElement("div");
            linksLi.setAttribute("id","divele")
            makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var obj = JSON.parse(value);
            var makeSubList = document.createElement("p");
            makeli.appendChild(makeSubList);
            getImage(obj.weaponCategory[1], makeSubList);
            for(var n in obj){
                var makeSubli = document.createElement("div");
                makeSubList.appendChild(makeSubli);
                var optSubText = obj[n][0] + " " + obj[n][1];
                makeSubli.innerHTML = optSubText;
                makeSubList.appendChild(linksLi);
            }
            makeItemLinks(localStorage.key(i), linksLi)
        }
    }

    function getImage(catName, makeSubList){
        var imageLi = document.createElement("li");
        makeSubList.appendChild(imageLi);
        var newImage = document.createElement("img");
        var setSrc = newImage.setAttribute("src", "images/" + catName + ".svg" + ".jpg");
        imageLi.appendChild(newImage);

    }
    
    

    function makeItemLinks(key, linksLi){
        var editLink = document.createElement("a");
        editLink.href = "#";
        editLink.key = key;
        var editText = "Edit media";
        editLink.addEventListener("click", editItem);
        editLink.innerHTML = editText;
        linksLi.appendChild(editLink);

        var breakTag = document.createElement('br');
        linksLi.appendChild(breakTag);

        var deleteLink = document.createElement("a");
        deleteLink.href = "#";
        deleteLink.key = key;
        var deleteText = "Delete media";
        deleteLink.addEventListener("click", deleteItem);
        deleteLink.innerHTML = deleteText;
        linksLi.appendChild(deleteLink);
    }

    function editItem(){
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);

        toggleControls("off");

        grab("wn").value = item.weaponName[1];
        grab("weapons").value = item.weaponCategory[1];
        var radios = document.forms[0].deadly;
        for(var i = 0; i < radios.length; i++){
            if(radios[i].value == "cd" && item.deadly[1] == "cd"){
                radios[i].setAttribute("checked", "checked");
            } else if(radios[i].value == "dvd" && item.deadly[1] == "dvd"){
                radios[i].setAttribute("checked", "checked");
            } else if(radios[i].value == "bluray" && item.deadly[1] == "bluray"){
                radios[i].setAttribute("checked", "checked");
            }
        }
        if(item.liked[1] == "Yes"){
            grab("liked").setAttribute("checked", "checked");
        }
        grab("weapon").value = item.rating[1];
        grab("comments").value = item.comments[1];
       

        saveData.removeEventListener("click", storeData);

        grab("saveData").value = "Edit media";
        var editSubmit = grab("saveData");

        editSubmit.addEventListener("click", validate);
        editSubmit.key = this.key;
    }

    function deleteItem(){
        var ask = confirm("Are you sure you want to delete this media?");
        if(ask){
            localStorage.removeItem(this.key);
            alert("media removed.");
            window.location.reload();
        } else {
            alert("media was not removed.");
        }
    }

    function eraseData(){
        if(localStorage.length === 0){
            alert("There is no media at the moment.");
        } else {
            var ask = confirm("Are you sure you want to delete all media?")
            if(ask){
                localStorage.clear();
                alert("media has been erased.");
                window.location.reload();
                return false;
            } else {
                alert("media was not deleted.");
                window.location.reload();
            }
        }
    }

    var weaponType = ["-- Choose Media Type--", "Xbox", "Playstation", "Wii u", "Music", "PC", "Movie"],
        deadlyValue,
        likedValue = "No",
        errMsg = grab("errors");

    makeSelect();

    var saveData = grab("saveData");
    saveData.addEventListener("click", validate);
    var displayData = grab("displayData");
    displayData.addEventListener("click", getData);
    var clearData = grab("clearData");
    clearData.addEventListener("click", eraseData);
});