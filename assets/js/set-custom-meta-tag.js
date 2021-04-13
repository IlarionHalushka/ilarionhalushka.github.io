console.log('SET NEW META: 111 MY CUSTOM DESCRIPTION FROM SCRIPT FILE 111');
var allMetaElements = document.getElementsByTagName('meta');

console.table(allMetaElements);

for (var i = 0; i < allMetaElements.length; i++) {
    if (allMetaElements[i].getAttribute("content") === "Recommendation On Books To Read For Javascript Node.js Developer.") {
        allMetaElements[i].setAttribute('content', "111 MY CUSTOM DESCRIPTION FROM SCRIPT FILE 111");
        break;
    }
}
console.table(allMetaElements);
