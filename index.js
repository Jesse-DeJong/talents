import { talentTree } from "./tree.js";

// DOM Targeting
const root = document.getElementById("root");
const points = document.getElementsByClassName("points");
const elementDetails = ["div", "talent", ""]

const buildTalentTree = (talentTree) => {
    
    buildTree();
    let parentTree = document.getElementById("tree");

    Object.entries(talentTree).map(talentRow => {
        buildTalentRow
    })
    buildTalentRow

    Object.entries(talentTree).map(i => {
        buildTalent(elementDetails[0], elementDetails[1], elementDetails[3], i.name, parentTree);
    })
    
}

const buildTalentRow = (element, classes, styles, content, parent) => {
    let newEl = document.createElement(element);
    if(classes){
        newEl.className = classes;
    }
    if(styles){
        newEl.style = styles;
    }
    if(content){
        let textNode = document.createTextNode(content);
        newEl.appendChild(textNode);
    }
    parent.appendChild(newEl);
    
}

const buildTalent = (element, classes, styles, content, parent) => {
    let newEl = document.createElement(element);
    if(classes){
        newEl.className = classes;
    }
    if(styles){
        newEl.style = styles;
    }
    if(content){
        let textNode = document.createTextNode(content);
        newEl.appendChild(textNode);
    }
    parent.appendChild(newEl);
}
    
const buildTree = () => {
    
    let tree = document.createElement("div");
    tree.className = "tree";
    tree.id = "tree";
    root.appendChild(tree)
}
    

//const buildElement2 = () => {
//    return `<${element} class="${class}" style=${style}>${content}</${element}>`;
//}

//switch(e.target.Any(classList.contains())){
//    case onepoints:
//        classlist.remove("onepoints");
//        classlist.add("twopoints");
//}

const setPoints = () => {
    points.map( p => {
        p.text 
    })
}

buildTalentTree(talentTree)