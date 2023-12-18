console.log('this works');

const games = [
    {
        image:
        "./Image4/01.jpg",
        name: "AAA",
        year: "1970"
        
    },
    {
        image: "./Image4/02.jpg",
        name: "BBB",
        year: "1980"
        
    },
    {
        image:"./Image4/03.jpg",
        name: "CCC",
        year: "1990"
        
        
    },
    {
        image:
        "./Image4/04.jpg",
        name: "DDD",
        year: "1990"
    
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
        let title = document.createElement("h3");

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





function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Show/hide the button based on scroll position
  window.onscroll = function() {
    var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    var backToTopBtn = document.getElementById('backToTopBtn');

    if (scrollPos > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  };