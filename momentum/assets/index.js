
const state = {
    language: 'en',
    photoSource: 'github',
    blocks: ['time', 'date','greeting', 'quote', 'weather', 'audio', 'todolist']
  } //настройки

//приветствие------------------------------------------------------------

const greeting = document.querySelector('.greeting');

function getTimeOfDay() {
const date = new Date();
const hours = date.getHours(); //возвращает текущее время в часах 

    if (hours >= 18 && hours <24) {
      greeting.textContent = 'Good evening'; 
    } else if(hours >= '00' && hours <=5) {
      greeting.textContent = 'Good night'; 
    } else if(hours >= 6 && hours <=11) {
      greeting.textContent = 'Good morning'; 
    }else if(hours >= 12 && hours <=17) {
      greeting.textContent = 'Good afternoon'; 
    }
}


//дата--------------------------------------------------------------------
const dates = document.querySelector('.date');
function showDate() {
const date = new Date();
const options = {month: 'long', day: 'numeric', weekday: 'long', timeZone: 'UTC'};
const currentDate = date.toLocaleDateString(undefined, options);
dates.textContent = currentDate;
}

// время
const time = document.querySelector('.time');
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString('ru-US');
    time.textContent = currentTime;
    setTimeout(showTime, 1000) // обновляет время 
    showDate(); //обновляет дату
    getTimeOfDay(); //показывает актуальное hours

  }
  showTime();

//ввод имени пользователя-----------------------------------------------

const name = document.querySelector('.name');
const city = document.querySelector('.city');
function setLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
} //перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    } if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    } if(localStorage.getItem('city') === '') {
        city.value = 'Minsk';
    } 
    getWeather();
  }
window.addEventListener('load', getLocalStorage)
  //перед загрузкой страницы (событие load) данные нужно восстановить и отобразить

//фон-----------------------------------------------------------------------
function getTimeOfDayFor() {
    const date = new Date();
    const hours = date.getHours();
    
    if (hours >= 18 && hours <24) {
        return 'evening'; 
    } else if(hours >= '00' && hours <=5) {
        return 'night'; 
    } else if(hours >= 6 && hours <=11) {
        return 'morning'; 
    }else if(hours >= 12 && hours <=17) {
        return 'afternoon'; 
    }
  };


function getRandomNum() {
        return Math.floor(Math.random() * (21-1)) +1;
    }
let getRandomNumF = getRandomNum();

// случайное изображение при загрузке страницы----------------------------------
function setBg() {
    const timeOfDay = getTimeOfDayFor();
    const bgNum = getRandomNumF.toString().padStart(2, "0");//добавляем ноль
    const image = new Image();
    const img = `https://raw.githubusercontent.com/juliakocur/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    image.onload = () => {
    document.body.style.backgroundImage = `url(${img})`;
    };
    image.src = img;
}
    setBg();
    
// случайное изображение при слайде--------------------------------------

const slideNext = document.querySelector('.slide-next');
slideNext.addEventListener("click", getSlideNext);

function getSlideNext() {
    if (getRandomNumF <20){
        getRandomNumF = getRandomNumF +1;
    } else if(getRandomNumF = 20){
        getRandomNumF = 1;
    }
    setBg();
}

const slidePrev = document.querySelector('.slide-prev');
slidePrev.addEventListener("click", getSlidePrev);

function getSlidePrev() {
    if (getRandomNumF <=20 && getRandomNumF >1 ){
        getRandomNumF = getRandomNumF -1;
        console.log(getRandomNumF)
    } else if(getRandomNumF = 1){
        getRandomNumF = 20;
        console.log(getRandomNumF)
    }
    setBg();
}

// погода---------------------------------------------------------------
/*
.weather[0].id - id иконки погоды
.weather[0].description - описание погоды
.main.temp - температура
*/

  

// данные о погоде при вводе названия города----------------------------

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const  weatherError = document.querySelector('.weather-error');



async function getWeather() {  
     
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=a0808aaf90ec37cf2bb926ef1c418180&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
/* console.log(data.weather[0].id, data.weather[0].description, data.main.temp);*/
if(data.cod == '200'){
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    weatherDescription.textContent =  data.weather[0].description;
    wind.textContent = `Wind speed: ${data.wind.speed} m/s`;  
    weatherError.textContent = '';

}else if (data.cod != '200'){//если есть ошибка то вывести Error
    weatherError.textContent = `Error! city not found for ${city.value}`;
    weatherIcon.className = 'weather-icon';
    humidity.textContent = '';
    wind.textContent = '';
    temperature.textContent = '';
    weatherDescription.textContent = '';
   
}
}
  
  function setCity(e) {
    if (e.code === 'Enter') {
        getWeather();
        city.blur();
    }
  };

  city.addEventListener("change", getWeather);
  city.addEventListener("keypress", setCity);

  //цитаты--------------------------------------------------------------

  const quote = document.querySelector('.quote');
  const author = document.querySelector('.author');
 
  
  async function getQuotes() {  
    const quotes = 'assets/data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    quote.textContent = `"${data[getRandomNumF].quote}"`;
    author.textContent = data[getRandomNumF].author;
  }
  getQuotes();

//кнопка слайда цитат----------------------------------------------------
const slideQuote = document.querySelector('.change-quote');
slideQuote.addEventListener("click", getSlideQuote);

    function getSlideQuote() {
        if (getRandomNumF <20){
            getRandomNumF = getRandomNumF +1;
        } else if(getRandomNumF = 20){
            getRandomNumF = 1;
        }
        getQuotes();
    }

//плеер-------------------------------------------------------------------

    import playList from './playList.js';
    //импорт музыки и файла playList.js; проверка - console.log(playList.length)

let playNum = 0;
let isPlay = false;//изначально не играет(при загрузке страницы)
const playBtn = document.querySelector('.play');
const audio = new Audio();

function playAudio() {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;//начинает проигрывать каждый раз с начала
    playTrack()//добавляем класс active элементу li
if(!isPlay){
    isPlay = true; 
    audio.play();
}else {
    isPlay = false;
    audio.pause();
}
};

playBtn.addEventListener('click', playAudio);

//кнопка play меняется на pause------------------------------------------
function toggleBtn(){
    playBtn.classList.toggle('pause');//снять класс 'pause'
}
playBtn.addEventListener('click', toggleBtn);
audio.addEventListener('ended',playNext);


//перелистывание аудио----------------------------------------------------
const prevPlayBtn = document.querySelector('.play-prev');
const nextPlayBtn = document.querySelector('.play-next');

function playNext(){
    playNum++;
 if (playNum >3){
    playNum = 0;
 }
 isPlay = false;
 playBtn.classList.add('pause');
 playTrack()//добавляем класс active
 playAudio()
}
nextPlayBtn.addEventListener('click',playNext);

function playPrev(){
    playNum--;
    if(playNum < 0){
        playNum = 3;
    }
    isPlay=false;
    playBtn.classList.add('pause');
    playTrack()//добавляем класс active
    playAudio()
};

prevPlayBtn.addEventListener('click',playPrev);


//создание списка треков (элементов li)
function createPlayList () {
    playList.forEach (el => {
        const li = document.createElement('li');
        const ul = document.querySelector('.play-list')
        li.classList.add('play-item');
        for(let i = 0; i<playList.length; i++){
        li.textContent = el.title;// el=каждый элемент playList
        }
        ul.append(li);
    });
}
createPlayList ()

//добавление класса active проигрываемому треку
const li = document.querySelectorAll('.play-list li');
function playTrack(){
    li.forEach ((item, index) => {
        if(index === playNum){
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        }
    });
};



console.log('Реализованы следующие пункты:\nЧасы и календарь +15\nПриветствие +10\nСмена фонового изображения +20\nВиджет погоды +15\nВиджет цитата дня +10\nАудиоплеер +15\n')








