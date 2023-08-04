//your JS code here. If required.
const element = document.getElementById("level");
        let domLevel = 1;
        
        function countParentNodes(node) {
            while (node.parentNode) {
                node = node.parentNode;
                domLevel++;
            }
        }
        
        countParentNodes(element);
        alert("DOM level of id=level: " + domLevel);