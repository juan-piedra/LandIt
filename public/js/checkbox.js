let easyTricks = ['Ollie', 'Pop Shuv', 'Front Pop Shuv', 'Frontside', 'Backside'];
let mediumTricks = ['Kickflip', 'Heelflip', 'Bigspin', 'Varial Flip', 'Frontside 360', 'Backside 360', 'Varial Heel', '360 Shuv', '  360 Front Shuv'];
let hardTricks = ['Treflip', 'Hardflip', 'Inward Heel', 'Double Flip', 'Double Heel', 'Frontside Flip', 'Backside Flip', 'Frontside Heel', 'Backside Heel', 'Big Flip', 'Big Heel'];

const generateCheckboxList = (containerId, items) => {
    var container = document.getElementById(containerId);
    var listItems = '';
  
    for (var i = 0; i < items.length; i++) {
      listItems += '<li class="item"><input type="checkbox" class="checkbox" onchange="updateCounter(\'' + containerId + '\')">' + items[i] + '</li>';
    }
  
    var containerTitle = containerId.charAt(0).toUpperCase() + containerId.slice(1);
    containerTitle = containerTitle.replace(/([a-z])([A-Z])/g, '$1 $2');
  
    container.innerHTML = '<h2 class="container-title">' + containerTitle + ' (' + '<span class="counter">0 / ' + items.length + '</span>)</h2><ul class="item-list">' + listItems + '</ul>';
  }

const updateCounter = (containerId) => {
    var container = document.getElementById(containerId);
    var checkboxes = container.getElementsByTagName('input');
    var totalBoxes = checkboxes.length;
    var checkedBoxes = container.querySelectorAll('input:checked').length;
  
    var counterElement = container.getElementsByClassName('counter')[0];
    counterElement.textContent = checkedBoxes + ' / ' + totalBoxes;
}

generateCheckboxList('easyTricks', easyTricks);
generateCheckboxList('mediumTricks', mediumTricks);
generateCheckboxList('hardTricks', hardTricks);