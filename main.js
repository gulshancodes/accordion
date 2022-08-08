/*===== Accordion =====*/

const accordionTitle = document.querySelectorAll('.accordion_title');

accordionTitle.forEach(currItem => {
    currItem.addEventListener('click', (e) => {

        // if currently clicked item has 'active' class then we remove it.
        if (currItem.classList.contains('active')) {
            currItem.classList.remove('active');
        }
        else {

            // if there are any other items with 'active' class then first we remove them
            let activeClass = document.querySelectorAll('.active');

            activeClass.forEach(currAct => {
                currAct.classList.remove('active');
            });

            // and adding the 'active' class to the currently clicked item.
            currItem.classList.add('active');
        }
    });
});