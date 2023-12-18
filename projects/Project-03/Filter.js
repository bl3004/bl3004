console.log('this works');

const games = [
    {
        image:
        "./Image4/Pong1972.jpg",
        time:"1972",
        name: "Pong",
        year: "1970s" 
    },
    {
        image: "./Image4/SpaceInvaders1978.jpg",
        time:"1978",
        name: "Space Invaders",
        year: "1970s" 
    },
    {
        image:"./Image4/Asteroids1979.jpg",
        name: "Asteroids",
        year: "1970s"
    },
    {
        image:
        "./Image4/LunarLander1979.jpg",
        name: "Lunar Lander",
        year: "1970s"
    },
    {
        image:
        "./Image4/Galaxian1979.jpg",
        name: "Galaxian",
        year: "1970s"
    },
    {
        image:
        "./Image4/MissileCommand1980.jpg",
        name: "Missile Command",
        year: "1980s"
    },
    {
        image:
        "./Image4/Pac-Man1980.jpg",
        name: "Pac-Man",
        year: "1980s"
    },
    {
        image:
        "./Image4/Defender1980.jpg",
        name: "Defender",
        year: "1980s"
    },
    {
        image:
        "./Image4/Battlezone1980.jpg",
        name: "Battlezone",
        year: "1980s"
    },
    {
        image:
        "./Image4/Berzerk1980.jpg",
        name: "Berzerk",
        year: "1980s"
    },
    {
        image:
        "./Image4/DonkeyKong1981.jpg",
        name: "Donkey Kong",
        year: "1980s"
    },
    {
        image:
        "./Image4/Centipede1981.jpg",
        name: "Centipede",
        year: "1980s"
    },
  
    {
        image:
        "./Image4/Frogger1981.jpg",
        name: "Frogger",
        year: "1980s"
    },
    {
        image:
        "./Image4/Galaga1981.jpg",
        name: "Galaga",
        year: "1980s"
    },
    {
        image:
        "./Image4/Qbert1982.jpg",
        name: "Q*bert",
        year: "1980s"
    },


];


// grab the ul
const ul = document.querySelector('ul');
const filterBtns = document.querySelector('.filters');
const cards = document.getElementsByClassName('card');


// write fuction
const renderGamesToPage = (items) => {
    for(let i =0; i<items.length; i++)
    {
        console.log(items[i]);

        // create a list item
        let list_item = document.createElement("li");
        list_item.classList.add("card",games[i].year, `item--${i + 1}`)




        //  name
        let title = document.createElement("h1");

        title.textContent = games[i].name;


       

        //  color
        let year = document.createElement("p");
        year.textContent = games[i].year;



        //  image
        let image = document.createElement("img");
        image.setAttribute("src", games[i].image);

        // append to page
        ul.appendChild(list_item)
        list_item.appendChild(title)
        list_item.appendChild(year)
        list_item.appendChild(image)


    }
}

// pass data into it

renderGamesToPage(games)


const filterFn = (event) => {
    // console.log(event)
    console.log(event.target)

     
    if(event.target.classList.contains('filter-btn')){
        let active = filterBtns.querySelector('.active');
        active.classList.remove('active')

        event.target.classList.add('active')

        const filterValue = event.target.getAttribute("data-filter")
        console.log(filterValue)


        for(let i =0; i< cards.length; i++){
            if(cards[i].classList.contains(filterValue) || filterValue === "all"){
                cards[i].classList.remove('hide');
                cards[i].classList.add('show');
            }else{
                cards[i].classList.remove('show');
                cards[i].classList.add('hide');
            }
            }

        }

    }


filterBtns.addEventListener('click', filterFn)





// function scrollToTop() {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   }

//   // Show/hide the button based on scroll position
//   window.onscroll = function() {
//     var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
//     var backToTopBtn = document.getElementById('backToTopBtn');

//     if (scrollPos > 300) {
//       backToTopBtn.style.display = 'block';
//     } else {
//       backToTopBtn.style.display = 'none';
//     }
//   };













  document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        this.classList.toggle('is-flipped');
      });
    });
  });
  