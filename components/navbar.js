
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let solutions_box = document.getElementById('solutions-box');
let anchor_tag1 = document.getElementById('btnProduct1');
let anchor_tag2 = document.getElementById('btnProduct2');
let anchor_tag3 = document.getElementById('btnProduct3');
let arrow = document.getElementById('arrow');

one.addEventListener('click', function solutionClick() {
    if (solutions_box.style.display === 'none') {
        solutions_box.style.display = 'flex';
        anchor_tag1.style.borderBottom = "0.3em solid #f05a28"
        anchor_tag1.style.paddingBottom = "45.5px"

    } else {
        solutions_box.style.display = 'none';
        anchor_tag1.style.borderBottom = "none"

    }
});



two.addEventListener('click', function solutionClick() {
    if (true) {
        anchor_tag2.style.borderBottom = "0.3em solid #f05a28"
        anchor_tag2.style.paddingBottom = "45.5px";
    } else {
        anchor_tag1.style.borderBottom = "none"
    }

});

three.addEventListener('click', function solutionClick() {

    anchor_tag3.style.borderBottom = "0.3em solid #f05a28"
    anchor_tag3.style.paddingBottom = "45.5px";


});


let div1 = document.getElementById('text-heading1');
let div2 = document.getElementById('text-heading2');
let div3 = document.getElementById('text-heading3');
let div4 = document.getElementById('text-heading4');
let div5 = document.getElementById('text-heading5');
let div6 = document.getElementById('text-heading6');
let div7 = document.getElementById('text-heading7');
let div8 = document.getElementById('text-heading8');
let div9 = document.getElementById('text-heading9');

let heading1 = document.getElementById('heading1');
let heading2 = document.getElementById('heading2');
let heading3 = document.getElementById('heading3');
let heading4 = document.getElementById('heading4');
let heading5 = document.getElementById('heading5');
let heading6 = document.getElementById('heading6');
let heading7 = document.getElementById('heading7');
let heading8 = document.getElementById('heading8');
let heading9 = document.getElementById('heading9');

div1.addEventListener('mouseover', function handleClick() {
    heading1.style.color = '#ec008c';
});
div1.addEventListener('mouseout', function handleClick() {
    heading1.style.color = 'black';
});

div2.addEventListener('mouseover', function handleClick() {
    heading2.style.color = '#ec008c';
});
div2.addEventListener('mouseout', function handleClick() {
    heading2.style.color = 'black';
});


div3.addEventListener('mouseover', function handleClick() {
    heading3.style.color = '#ec008c';
});
div3.addEventListener('mouseout', function handleClick() {
    heading3.style.color = 'black';
});


div4.addEventListener('mouseover', function handleClick() {
    heading4.style.color = '#ec008c';
});
div4.addEventListener('mouseout', function handleClick() {
    heading4.style.color = 'black';
});


div5.addEventListener('mouseover', function handleClick() {
    heading5.style.color = '#ec008c';
});
div5.addEventListener('mouseout', function handleClick() {
    heading5.style.color = 'black';
});


div6.addEventListener('mouseover', function handleClick() {
    heading6.style.color = '#ec008c';
});
div6.addEventListener('mouseout', function handleClick() {
    heading6.style.color = 'black';
});


div7.addEventListener('mouseover', function handleClick() {
    heading7.style.color = '#ec008c';
});
div7.addEventListener('mouseout', function handleClick() {
    heading7.style.color = 'black';
});


div8.addEventListener('mouseover', function handleClick() {
    heading8.style.color = '#ec008c';
});
div8.addEventListener('mouseout', function handleClick() {
    heading8.style.color = 'black';
});


div9.addEventListener('mouseover', function handleClick() {
    heading9.style.color = '#ec008c';
});
div9.addEventListener('mouseout', function handleClick() {
    heading9.style.color = 'black';
});