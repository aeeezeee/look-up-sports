const form_submit = document.getElementById("form_submit");
const main_body = document.getElementById("main_body");
const popup = document.getElementById("popup");
const messagebox = document.getElementById("popup").childNodes;
const add = document.getElementById("add");
const search_submit = document.getElementById("search_submit");
const search = document.getElementById("search");
let displayed = false;
let category = {"soccer":"soccer", "badminton":"badminton", "basketball":"basketball"};
let events = [];

add.addEventListener("click", function(){
    if(displayed == false){
        popup.style.display = "block";
        displayed = true;
    }
    else{
        popup.style.display = "none";
        displayed = false;
    }
});

function add_item(){
    const title_value = messagebox[1].value;
    const content_value = messagebox[3].value;
    const event_cont = document.createElement("div");
    event_cont.className = "event_conts";

    const title = document.createElement("div");
    title.className = "titles";
    title.innerHTML = title_value;

    const content = document.createElement("div");
    content.className = "contents";
    content.innerHTML = content_value;

    event_cont.appendChild(title);
    event_cont.appendChild(content);
    main_body.appendChild(event_cont);

    messagebox[1].value = "";
    messagebox[3].value = "";
    popup.style.display = "none";
    displayed = false;
}

function find(){
    const childs = main_body.childNodes;
    for(let i = 0; i < childs.length; i++){
        let grandchild = childs[i].childNodes;
        console.log(grandchild[0].innerHTML);
        console.log(grandchild[1].innerHTML);
    }
}

form_submit.addEventListener("click", add_item);
search_submit.addEventListener("click", find);
