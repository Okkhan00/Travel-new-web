let newbtn = document.querySelector("fa-regular fa-lightbulb");
let currmode = "light";

newbtn.addEventlistner("click", () => {
    if (currmode === "light"){
        currmode = "dark"
        document.querySelector("body").style.backgroundColor = "black";

    } else{
        currmode = "light"
        document.querySelector("body").style.backgroundColor = "white";

    }

})