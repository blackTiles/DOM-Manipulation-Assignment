let products = [];
let nodeList = document.querySelectorAll(".as-imagegrid-item-title");
let otherChildren = document.querySelectorAll(".a11y");
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].removeChild(otherChildren[i]);
    products.push(nodeList[i].innerText);
}
console.log(products);
