function identifySubject(image, targetEl) {
    if (!image) {
        return false;
    }
    else {
        var targetNode = document.getElementById(targetEl) || document.getElementById('caption'),
            person = image.getAttribute('data-subject');
            text = document.createTextNode(person);
        if (targetNode.childNodes.length && targetNode.firstChild.nodeType == 3) {
            targetNode.firstChild.nodeValue = person;
        }
        else {
            targetNode.appendChild(text);
        }
    }
}

var images = document.getElementsByClassName('people');
for (var i=0, len=images.length; i<len; i++) {
    images[i].onclick = function(e){
         identifySubject(this, 'caption');
    };
}