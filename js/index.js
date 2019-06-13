const tabItems = document.querySelectorAll('.tab-item'); //puts everything with a class of tab item into a node list
const tabContentItems = document.querySelectorAll('.tab-content-item');
console.log(tabItems);

//select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();

    //Add border to current tab
    this.classList.add('tab-border');
    const tabContentItem = document.querySelector(`#${this.id}-content`)

    //Add show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}
//listen for tab click 
tabItems.forEach(item => item.addEventListener('click', selectItem));