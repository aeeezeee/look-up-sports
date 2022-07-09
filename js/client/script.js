const form_submit = document.getElementById("form_submit");
const main_body = document.getElementById("main_body");
const popup = document.getElementById("popup");
const messagebox = document.getElementById("popup").childNodes;
const add = document.getElementById("add");
const search_submit = document.getElementById("search_submit");
const search = document.getElementById("search");
let displayed = false;
let not_matched = [];

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

function boyer(target ,paragraph, bm_table){
    let found = false;
    let skips = 0;
    for(let i = 0; i <= paragraph.length - target.length; i += skips){
        skips = 0;
        for(let j = target.length-1; j >= 0; j--){
            if(paragraph[i+j] != target[j]){
                if(bm_table[paragraph[i+j]] != null){
                    skips = bm_table[paragraph[i+j]];
                    break;
                }
                else{
                    skips = bm_table["*"];
                    break;
                }
            }
        }
        if(skips == 0){
            found = true;
            break;
        }
    }
    return found;
}

function match(){
    let bm_table = {};

    const childs = main_body.childNodes;
    const text_to_search = search.value.toLowerCase();
    for(let i = 0; i < text_to_search.length; i++){
        bm_table[text_to_search[i]] = Math.max(1, text_to_search.length - i - 1);
    }
    bm_table["*"] = text_to_search.length;

    for(let i = 0; i < childs.length; i++){
        let grandchild = childs[i].childNodes;
        if(!boyer(text_to_search, grandchild[0].innerHTML.toLowerCase(), bm_table) 
        && !boyer(text_to_search, grandchild[1].innerHTML.toLowerCase(), bm_table)){
            not_matched.push(childs[i]);
        }
    }
    for(let i = 0; i < not_matched.length; i++){
        main_body.removeChild(not_matched[i]);
    }
    not_matched = [];
    search.value = "";
}

form_submit.addEventListener("click", add_item);
search_submit.addEventListener("click", match);
