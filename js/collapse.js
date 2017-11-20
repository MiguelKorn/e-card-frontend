var selectBtn = document.getElementsByClassName('dropdown'),
    dropdownMenu = document.getElementsByClassName('dropdownMenu');

for (i = 0; i < selectBtn.length; i++) {
    selectBtn[i].onclick = function() {
        if(this.className.indexOf('active') > -1){
            for (j = 0; j < selectBtn.length; j++) {
                removeClass(selectBtn[j], 'active')
            }
        } else {
            addClass(this, 'active');
        }
    };
}
for (i = 0; i < dropdownMenu.length; i++) {
    var child = dropdownMenu[i].children;
    for (j = 0; j < child.length; j++) {
        child[j].onclick = function() {
            var text = this.innerHTML;
            this.parentNode.previousElementSibling.children[0].innerHTML = text;
            toggleClass(this.parentNode, 'showMenu');
        };
    }
}

window.addEventListener('click', function(event){
    for (i = 0; i < selectBtn.length; i++) {
        if (event.target != selectBtn[i].children[0]){
            removeClass(selectBtn[i], 'active');
        }
    }
});




function toggleClass(el, classToToggle) {
    var classN = el.className;
    if(classN.indexOf(classToToggle) > -1){
        el.className =  classN.replace(" " + classToToggle, '');
    } else {
        el.className = classN + " " + classToToggle;
    }
}
function addClass(el, classToToggle) {
    var classN = el.className
    if(classN.indexOf(classToToggle) < 1){
        el.className = classN + " " + classToToggle;
    }
}
function removeClass(el, classToToggle) {
    var classN = el.className;
    if(classN.indexOf(classToToggle) > -1){
        el.className =  classN.replace(" " + classToToggle, '');
    }
}