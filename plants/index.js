
/* открытие бургер меню */
const iconMenu = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav');

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    navMenu.classList.toggle('_active');
});
}

/* закрытие бургер меню */
if (navMenu) {
        navMenu.addEventListener("click", function (e) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        navMenu.classList.remove('_active');
});
}


/* интерактив кнопок price */
const priceButtons = document.querySelector('.accordion1');
const buttonContent = document.querySelector('.accordion_content');
const arrow = document.querySelector('.price-span');

if(priceButtons) {
    priceButtons.addEventListener('click', function (e) {
        priceButtons.classList.toggle('_active');
        buttonContent.classList.toggle('_active');
        arrow.classList.toggle('_active');
        

        priceButtons2.classList.remove('_active');
        buttonContent2.classList.remove('_active');
        arrow2.classList.remove('_active');
        priceButtons3.classList.remove('_active');
        buttonContent3.classList.remove('_active');
        arrow3.classList.remove('_active');
       
    })
}


const priceButtons2 = document.querySelector('.accordion2');
const buttonContent2 = document.querySelector('.accordion_content2');
const arrow2 = document.querySelector('.price-span2');

if(priceButtons2) {
    priceButtons2.addEventListener('click', function (e) {
        priceButtons2.classList.toggle('_active');
        buttonContent2.classList.toggle('_active');
        arrow2.classList.toggle('_active');
     

        priceButtons.classList.remove('_active');
        buttonContent.classList.remove('_active');
        arrow.classList.remove('_active');
        priceButtons3.classList.remove('_active');
        buttonContent3.classList.remove('_active');
        arrow3.classList.remove('_active');
      
    })
}

const priceButtons3 = document.querySelector('.accordion3');
const buttonContent3 = document.querySelector('.accordion_content3');
const arrow3 = document.querySelector('.price-span3');

if(priceButtons3) {
    priceButtons3.addEventListener('click', function (e) {
        priceButtons3.classList.toggle('_active');
        buttonContent3.classList.toggle('_active');
        arrow3.classList.toggle('_active');
       

        priceButtons2.classList.remove('_active');
        buttonContent2.classList.remove('_active');
        arrow2.classList.remove('_active');
        priceButtons.classList.remove('_active');
        buttonContent.classList.remove('_active');
        arrow.classList.remove('_active');
       
    })
}

/*интерактив service 
const gardens = document.querySelector('.button1');
const lawn = document.querySelector('.button2');
const planting = document.querySelector('.button3');
const pic1 = document.querySelector('.picture1');
const pic2 = document.querySelector('.picture2');
const pic3 = document.querySelector('.picture3');
const pic4 = document.querySelector('.picture4');
const pic5 = document.querySelector('.picture5');
const pic6 = document.querySelector('.picture6');

if(gardens) {
    gardens.addEventListener('click', function(e) {
        pic2.classList.toggle('_active');
        pic3.classList.toggle('_active');
        pic4.classList.toggle('_active');
        pic6.classList.toggle('_active');
    })
};

if(lawn) {
    lawn.addEventListener('click', function(e) {
        pic1.classList.toggle('_active');
        pic2.classList.toggle('_active');
        pic6.classList.toggle('_active');
        pic4.classList.toggle('_active');
        pic5.classList.toggle('_active');
})
};

if(planting) {
    planting.addEventListener('click', function(e) {
        pic1.classList.toggle('_active');
        pic3.classList.toggle('_active');
        pic5.classList.toggle('_active');

})
};

*/

const gardens = document.querySelector('.button1');
const lawn = document.querySelector('.button2');
const planting = document.querySelector('.button3');
const pic1 = document.querySelector('.picture1');
const pic2 = document.querySelector('.picture2');
const pic3 = document.querySelector('.picture3');
const pic4 = document.querySelector('.picture4');
const pic5 = document.querySelector('.picture5');
const pic6 = document.querySelector('.picture6');

if(gardens) {
    gardens.addEventListener('click', function(e) {
        pic1.classList.toggle('_active');
        pic2.classList.toggle('_active');
        pic3.classList.toggle('_active');
        pic4.classList.toggle('_active');
        pic5.classList.toggle('_active');
        pic6.classList.toggle('_active');

        pic1.classList.remove('_active');
        pic5.classList.remove('_active');
    })
};

if(lawn) {
    lawn.addEventListener('click', function(e) {
        pic1.classList.toggle('_active');
        pic2.classList.toggle('_active');
        pic3.classList.toggle('_active');
        pic4.classList.toggle('_active');
        pic5.classList.toggle('_active');
        pic6.classList.toggle('_active');

        pic3.classList.remove('_active');
       
})
};

if(planting) {
    planting.addEventListener('click', function(e) {
        pic1.classList.toggle('_active');
        pic2.classList.toggle('_active');
        pic3.classList.toggle('_active');
        pic4.classList.toggle('_active');
        pic5.classList.toggle('_active');
        pic6.classList.toggle('_active');

        pic2.classList.remove('_active');
        pic4.classList.remove('_active');
        pic6.classList.remove('_active');
})
}
/* интерактив city */

const buttonCity = document.querySelector('.button-city-div');
const buttonClick = document.querySelector('.button-city');
const buttonArrow = document.querySelector('.contacts-arrow');
const content = document.querySelector('.city-content');
const phone = document.querySelector('.phone');

if(buttonClick) {
    buttonClick.addEventListener('click', function(e) {
        buttonCity.classList.toggle('_active');
        buttonArrow.classList.toggle('_active');
        content.classList.toggle('_active');
        buttonClick.classList.toggle('_active');
       phone.classList.toggle('_lock');
    })
};

const town1 = document.querySelector('.town1');
const town2 = document.querySelector('.town2');
const town3 = document.querySelector('.town3');
const town4 = document.querySelector('.town4');
const phone1 = document.querySelector('.phone-town1');
const phone2 = document.querySelector('.phone-town2');
const phone3 = document.querySelector('.phone-town3');
const phone4 = document.querySelector('.phone-town4');

if(town1) {
    town1.addEventListener('click', function(e) {

        buttonCity.classList.remove('_active');
        buttonArrow.classList.remove('_active');
        content.classList.remove('_active');
        buttonClick.classList.remove('_active');
       phone.classList.remove('_lock');
       phone2.classList.remove('_active');
       phone3.classList.remove('_active');
       phone4.classList.remove('_active');

       phone1.classList.toggle('_active');

})
};

if(town2) {
    town2.addEventListener('click', function(e) {

        buttonCity.classList.remove('_active');
        buttonArrow.classList.remove('_active');
        content.classList.remove('_active');
        buttonClick.classList.remove('_active');
       phone.classList.remove('_lock');
       phone1.classList.remove('_active');
       phone3.classList.remove('_active');
       phone4.classList.remove('_active');

       phone2.classList.toggle('_active');

})
};

if(town3) {
    town3.addEventListener('click', function(e) {

        buttonCity.classList.remove('_active');
        buttonArrow.classList.remove('_active');
        content.classList.remove('_active');
        buttonClick.classList.remove('_active');
       phone.classList.remove('_lock');
       phone1.classList.remove('_active');
       phone2.classList.remove('_active');
       phone4.classList.remove('_active');

       phone3.classList.toggle('_active');

})
};

if(town4) {
    town4.addEventListener('click', function(e) {

        buttonCity.classList.remove('_active');
        buttonArrow.classList.remove('_active');
        content.classList.remove('_active');
        buttonClick.classList.remove('_active');
       phone.classList.remove('_lock');
       phone1.classList.remove('_active');
       phone2.classList.remove('_active');
       phone3.classList.remove('_active');

       phone4.classList.toggle('_active');

})
};