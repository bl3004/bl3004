console.log('this works');

const games = [
    {
        image:
        "./Image4/Pong1972.jpg",
        name: "Pong",
        year: "1970s",
        description: "Pong, iconic Atari game from 1972, revolutionized video gaming, introducing virtual sports with simple yet groundbreaking paddle-and-ball mechanics."
    },
    {
        image: "./Image4/SpaceInvaders1978.jpg",
        name: "Space Invaders",
        year: "1970s",
        description: "Space Invaders, released in 1978, is a seminal arcade game. Players control a ship defending against descending waves of alien invaders."

    },
    {
        image:"./Image4/Asteroids1979.jpg",
        name: "Asteroids",
        year: "1970s",
        description:"Asteroids, launched in 1979, is an iconic arcade game. Players navigate a spaceship, destroying asteroids and avoiding collisions in space.",
    },
    {
        image:
        "./Image4/LunarLander1979.jpg",
        name: "Lunar Lander",
        year: "1970s",
        description:"Lunar Lander, released in 1979, challenges players to skillfully land a spacecraft on the moon's surface, managing fuel and speed."
    },
    {
        image:
        "./Image4/Galaxian1979.jpg",
        name: "Galaxian",
        year: "1970s",
        description:"Galaxian, introduced in 1979, is a space-themed shoot 'em up arcade game featuring alien enemies with sophisticated movement patterns."
    },
    {
        image:
        "./Image4/MissileCommand1980.jpg",
        name: "Missile Command",
        year: "1980s",
        description:"Missile Command, released in 1980, is a classic arcade game where players defend cities from missile attacks by strategically deploying anti-missile batteries."
    },
    {
        image:
        "./Image4/Pac-Man1980.jpg",
        name: "Pac-Man",
        year: "1980s",
        description:"Pac-Man, created in 1980, is an iconic arcade game where players control Pac-Man, a yellow character, navigating a maze while eating dots and avoiding ghosts."
    },
    {
        image:
        "./Image4/Defender1980.jpg",
        name: "Defender",
        year: "1980s",
        description:"Defender, released in 1980, is a classic arcade game known for its side-scrolling space theme and innovative gameplay mechanics."
    },
    {
        image:
        "./Image4/Battlezone1980.jpg",
        name: "Battlezone",
        year: "1980s",
        description:"Battlezone, released in 1980, is a pioneering first-person shooter arcade game, recognized for its use of vector graphics and tank combat."
    },
    {
        image:
        "./Image4/Berzerk1980.jpg",
        name: "Berzerk",
        year: "1980s",
        description:"Berzerk, a 1980 arcade game, is known for its maze-like levels and hostile robots. It's one of the early shooter games."
    },
    {
        image:
        "./Image4/DonkeyKong1981.jpg",
        name: "Donkey Kong",
        year: "1980s",
        description:"Donkey Kong, released in 1981, is a classic platform game featuring Mario. It's one of the most iconic and influential games."
    },
    {
        image:
        "./Image4/Centipede1981.jpg",
        name: "Centipede",
        year: "1980s",
        description:"Centipede, launched in 1981, is a classic arcade game where players combat a segmented centipede and other creatures in a mushroom-filled environment."
    },
  
    {
        image:
        "./Image4/Frogger1981.jpg",
        name: "Frogger",
        year: "1980s",
        description:"Frogger, released in 1981, is an iconic arcade game challenging players to guide a frog across busy roads and hazardous rivers."
    },
    {
        image:
        "./Image4/Galaga1981.jpg",
        name: "Galaga",
        year: "1980s",
        description:"Galaga, released in 1981, is a classic arcade shooter game known for its challenging alien-fighting gameplay and innovative dual ship feature."
    },
    {
        image:
        "./Image4/Qbert1982.jpg",
        name: "Q*bert",
        year: "1980s",
        description:"Q*bert, introduced in 1982, is an iconic arcade game featuring a unique isometric perspective and puzzle-solving gameplay with hopping characters."
    },
    {
        image:
        "./Image4/UltimaIII1983.jpg",
        name: "Ultima III: Exodus",
        year: "1980s",
        description:"Epic RPG, Richard Garriott's masterpiece, challenges players in the quest to vanquish the evil Exodus."
    },
    {
        image:
        "./Image4/KingsQuest1984.jpg",
        name: "King's Quest",
        year: "1980s",
        description:"Pioneering graphical adventure, Sierra On-Line's classic, introduces players to the magical realms of Daventry."
    },
    {
        image:
        "./Image4/Elite1984.jpg",
        name: "Elite",
        year: "1980s",
        description:"Revolutionary space sim, David Braben and Ian Bell's creation, lets players trade, fight, and explore an expansive galaxy."
    },
    {
        image:
        "./Image4/Tetris1984.jpg",
        name: "Tetris",
        year: "1980s",
        description:"Timeless puzzle, Alexey Pajitnov's creation, shapes the gaming world with its addictive block-stacking challenge."
    },
    {
        image:
        "./Image4/SuperMarioBros1985.jpg",
        name: "Super Mario Bros",
        year: "1980s",
        description:"Iconic platformer, Nintendo's masterpiece, follows Mario on a quest to rescue Princess Peach from Bowser's clutches."
    },
    {
        image:
        "./Image4/Doom1993.jpg",
        name: "Doom",
        year: "1980s",
        description:"Genre-defining FPS, id Software's creation, unleashes players into a hellish landscape battling demons in intense, fast-paced action."
    },
    {
        image:
        "./Image4/SimCity1989.jpg",
        name: "SimCity",
        year: "1980s",
        description:"Urban planning simulator, Will Wright's brainchild, empowers players to build, manage, and nurture their own virtual cities."
    },
    {
        image:
        "./Image4/TheLegendofZelda1986.jpg",
        name: "The Legend of Zelda",
        year: "1980s",
        description:"Epic fantasy adventure with Link, exploring dungeons, battling enemies, and rescuing Princess Zelda in a magical world."
    },
    {
        image:
        "./Image4/Metroid1986.jpg",
        name: "Metroid",
        year: "1980s",
        description:"Sci-fi action-adventure game following Samus Aran's quest to defeat the Space Pirates and Mother Brain on planet Zebes."
    },
    {
        image:
        "./Image4/Castlevania1986.jpg",
        name: "Castlevania",
        year: "1980s",
        description:"Classic action platformer where vampire hunter Simon Belmont battles through Dracula's castle to save Transylvania from darkness."
    },
    {
        image:
        "./Image4/MegaMan1987.jpg",
        name: "Mega Man",
        year: "1980s",
        description:"Side-scrolling action game where the Blue Bomber, Mega Man, battles evil robots to stop the nefarious Dr. Wily."
    },
    {
        image:
        "./Image4/StreetFighter1987.jpg",
        name: "Street Fighter",
        year: "1980s",
        description:"Pioneering fighting game introducing iconic characters like Ryu and Chun-Li, setting the stage for a legendary franchise."
    },
    {
        image:
        "./Image4/FinalFantasy1987.jpg",
        name: "Final Fantasy",
        year: "1980s",
        description:"Role-playing game featuring a group of heroes on a quest to save the world from an ancient evil."
    },
    {
        image:
        "./Image4/DoubleDragon1987.jpg",
        name: "Double Dragon",
        year: "1980s",
        description:"Beat 'em up classic where martial artist brothers Billy and Jimmy Lee battle through hordes of thugs to rescue Marian."
    },
    {
        image:
        "./Image4/PrinceofPersia1989.jpg",
        name: "Prince of Persia",
        year: "1980s",
        description:"Platformer with innovative rotoscoped animation, following the Prince's quest to save the Princess from an evil vizier."
    },
    {
        image:
        "./Image4/Myst1993.jpg",
        name: "Myst",
        year: "1990s",
        description:"Pioneering graphic adventure game with immersive puzzles and a mysterious island, captivating players with its atmospheric storytelling."
    },
    {
        image:
        "./Image4/WarcraftOrcs&Humans1994.jpg",
        name: "Warcraft:Orcs & Humans",
        year: "1990s",
        description:"Iconic real-time strategy game, establishing the epic conflict between humans and orcs in the Warcraft universe."
    },
    {
        image:
        "./Image4/SystemShock1994.jpg",
        name: "System Shock",
        year: "1980s",
        description:"Cyberpunk first-person adventure blending role-playing elements, horror, and a gripping narrative within a futuristic space station."
    },
    {
        image:
        "./Image4/Command&Conquer1995.jpg",
        name: "Command & Conquer",
        year: "1990s",
        description:" Strategy classic featuring intense battles between the Global Defense Initiative and the Brotherhood of Nod in a near-future world."
    },
    {
        image:
        "./Image4/ChronoTrigger1995.jpg",
        name: "Chrono Trigger",
        year: "1990s",
        description:"Time-traveling RPG masterpiece, combining an engaging storyline, memorable characters, and innovative gameplay mechanics in a fantasy world."
    },
    {
        image:
        "./Image4/Quake1996.jpg",
        name: "Quake",
        year: "1990s",
        description:"Groundbreaking first-person shooter introducing 3D graphics, fast-paced multiplayer, and modding, shaping the future of the genre."
    },
    {
        image:
        "./Image4/Diablo1996.jpg",
        name: "Diablo",
        year: "1990s",
        description:" Action RPG in the dark world of Sanctuary, challenging players to descend into the depths of Tristram's dungeons."
    },
    {
        image:
        "./Image4/TombRaider1996.jpg",
        name: "Tomb Raider",
        year: "1990s",
        description:"Adventure game starring iconic archaeologist Lara Croft, featuring exploration, puzzle-solving, and action-packed gameplay."
    },
    {
        image:
        "./Image4/Fallout1997.jpg",
        name: "Fallout",
        year: "1990s",
        description:"Post-apocalyptic RPG with a gripping narrative, offering players choices that affect the game's outcome in a desolate wasteland."
    },
    {
        image:
        "./Image4/StarCraft1998.jpg",
        name: "StarCraft",
        year: "1990s",
        description:"Sci-fi real-time strategy game, featuring three unique factions, captivating players with its deep strategy and engaging storyline."
    },
    {
        image:
        "./Image4/HalfLife1998.jpg",
        name: "Half-Life",
        year: "1990s",
        description:"Influential first-person shooter, combining immersive storytelling with innovative gameplay elements, setting new standards in the genre."
    },
    {
        image:
        "./Image4/BaldursGate1998.jpg",
        name: "Baldur's Gate",
        year: "1990s",
        description:"Dungeons & Dragons-inspired RPG, featuring a rich story, memorable characters, and tactical combat in the fantasy world of Faerûn."
    },
    {
        image:
        "./Image4/ResidentEvil21998.jpg",
        name: "Resident Evil 2",
        year: "1990s",
        description:" Survival horror masterpiece, plunging players into Raccoon City with terrifying zombies, puzzles, and a gripping storyline."
    },
    {
        image:
        "./Image4/EverQuest1999.jpg",
        name: "EverQuest",
        year: "1990s",
        description:"Pioneering MMORPG, shaping the genre with its expansive world, challenging quests, and social interaction among thousands of players."
    },
    {
        image:
        "./Image4/UnrealTournament1999.jpg",
        name: "Unreal Tournament",
        year: "1990s",
        description:"Multiplayer-focused first-person shooter, renowned for its fast-paced action, diverse maps, and extensive modding community."
    },
    {
        image:
        "./Image4/AgeofEmpiresII1999.jpg",
        name: "Age of Empires II",
        year: "1990s",
        description:"Strategy game set in historical epochs, challenging players to build civilizations, wage wars, and lead empires to glory."
    },
    {
        image:
        "./Image4/PlanescapeTorment1999.jpg",
        name: "Planescape: Torment",
        year: "1990s",
        description:"Narrative-driven RPG, exploring deep philosophical themes and a surreal world with a nameless protagonist seeking redemption."
    },
    {
        image:
        "./Image4/SystemShock21999.jpg",
        name: "System Shock2",
        year: "1990s",
        description:"Hybrid FPS/RPG horror game, continuing the narrative of the first installment, delivering a haunting experience aboard the Von Braun spaceship."
    },
    {
        image:
        "./Image4/RollerCoasterTycoon1999.jpg",
        name: "RollerCoaster Tycoon",
        year: "1990s",
        description:"Simulation game allowing players to design and manage their own amusement parks, creating thrilling rides and managing park finances."
    },
    {
        image:
        "./Image4/DeusEx2000.jpg",
        name: "Deus Ex",
        year: "2000s",
        description:"Cyberpunk RPG blending conspiracy, immersive storytelling, and player choice in a dystopian future with augmentations."
    },
    {
        image:
        "./Image4/CounterStrike2000.jpg",
        name: "Counter-Strike",
        year: "2000s",
        description:"Multiplayer FPS, emphasizing teamwork and tactics, pitting terrorists against counter-terrorists in iconic bomb defusal and hostage scenarios."
    },
    {
        image:
        "./Image4/MaxPayne2001.jpg",
        name: "Max Payne",
        year: "2000s",
        description:"Noir-inspired third-person shooter, featuring intense gunfights, a gripping narrative, and the iconic bullet time mechanic."
    },
    {
        image:
        "./Image4/Battlefield19422002.jpg",
        name: "Battlefield 1942",
        year: "2000s",
        description:"Multiplayer FPS with large-scale battles, land, sea, and air combat, setting the stage for the Battlefield series."
    },
    {
        image:
        "./Image4/Morrowind2002.jpg",
        name: "Morrowind",
        year: "2000s",
        description:"Open-world RPG, inviting players to explore the fantastical world of Vvardenfell, rich in lore and immersive storytelling."
    },
    {
        image:
        "./Image4/TheElderScrollsIV2006.jpg",
        name: "The Elder Scrolls IV: Oblivion",
        year: "2000s",
        description:"Epic RPG with a sprawling open world, dynamic quests, and intricate guild storylines set in Cyrodiil."
    },
    {
        image:
        "./Image4/RomeTotalWar2004.jpg",
        name: "Rome: Total War",
        year: "2000s",
        description:"Strategy game combining turn-based empire-building with real-time battles, allowing players to command ancient armies."
    },
    {
        image:
        "./Image4/FEAR2005.jpg",
        name: "F.E.A.R.",
        year: "2000s",
        description:"Intense first-person shooter with supernatural elements, delivering atmospheric horror, engaging AI, and visceral combat."
    },
    {
        image:
        "./Image4/CivilizationIV2005.jpg",
        name: "Civilization IV",
        year: "2000s",
        description:"Turn-based strategy masterpiece, guiding players through the ages to build civilizations, wage wars, and achieve victory."
    },
    {
        image:
        "./Image4/TheWitcher2007.jpg",
        name: "The Witcher",
        year: "2000s",
        description:"Mature RPG, adapting Andrzej Sapkowski's novels, featuring Geralt of Rivia in a morally complex world."
    },
    {
        image:
        "./Image4/Bioshock2007.jpg",
        name: "Bioshock",
        year: "2000s",
        description:"Atmospheric FPS with a dystopian narrative, set in the underwater city of Rapture, exploring philosophical themes."
    },
    {
        image:
        "./Image4/TeamFortress22007.jpg",
        name: "Team Fortress 2",
        year: "2000s",
        description:"Class-based multiplayer FPS, renowned for its humor, distinctive art style, and cooperative gameplay."
    },
    {
        image:
        "./Image4/Fallout32008.jpg",
        name: "Fallout 3",
        year: "2000s",
        description:"Post-apocalyptic RPG, blending exploration, moral choices, and a gripping narrative in the irradiated wasteland of Washington, D.C."
    },
    {
        image:
        "./Image4/Left4Dead2008.jpg",
        name: "Left 4 Dead",
        year: "2000s",
        description:"Cooperative zombie survival FPS, emphasizing teamwork, dynamic AI Director, and intense, fast-paced gameplay."
    },
    {
        image:
        "./Image4/DeadSpace2008.jpg",
        name: "Dead Space",
        year: "2000s",
        description:"Sci-fi horror, following engineer Isaac Clarke battling nightmarish creatures in a derelict spaceship, emphasizing strategic dismemberment."
    },
    {
        image:
        "./Image4/DragonAgeOrigins2009.jpg",
        name: "Dragon Age: Origins",
        year: "2000s",
        description:"Epic fantasy RPG, offering complex characters, moral choices, and a rich narrative set in the world of Thedas."
    },
    {
        image:
        "./Image4/Borderlands2009.jpg",
        name: "Borderlands",
        year: "2000s",
        description:"FPS with RPG elements, featuring a unique art style, cooperative gameplay, and a procedurally generated loot system."
    },
    {
        image:
        "./Image4/AssassinsCreedII2009.jpg",
        name: "Assassin's Creed II",
        year: "2000s",
        description:"Action-adventure, expanding the Assassin's Creed universe with Renaissance Italy, parkour, and a captivating historical storyline."
    },
    {
        image:
        "./Image4/MassEffect22010.jpg",
        name: "MassEffect2",
        year: "2010s",
        description:"Sci-fi RPG, continuing Commander Shepard's journey to assemble a diverse team for a suicide mission against an alien threat."
    },
    {
        image:
        "./Image4/StarCraftII2010.jpg",
        name: "StarCraft II: Wings of Liberty",
        year: "2010s",
        description:"RTS sequel, continuing the conflict between the Terrans, Zerg, and Protoss with engaging campaigns and competitive multiplayer."
    },
    {
        image:
        "./Image4/Minecraft2011.jpg",
        name: "Minecraft",
        year: "2010s",
        description:"Sandbox phenomenon, allowing players to create and explore blocky worlds, emphasizing creativity, survival, and endless possibilities."
    },
    {
        image:
        "./Image4/TheElderScrollsV2011.jpg",
        name: "The Elder Scrolls V: Skyrim",
        year: "2010s",
        description:"Open-world RPG, featuring a vast, dragon-infested landscape with rich lore, radiant storytelling, and modding support."
    },
    {
        image:
        "./Image4/DarkSouls2011.jpg",
        name: "Dark Souls",
        year: "2010s",
        description:"Challenging action RPG, renowned for its punishing difficulty, atmospheric world design, and deep lore."
    },
    {
        image:
        "./Image4/TheWitcher22011.jpg",
        name: "The Witcher 2: Assassins of Kings",
        year: "2010s",
        description:"RPG masterpiece with political intrigue, moral choices, and Geralt of Rivia's epic quest."
    },
    {
        image:
        "./Image4/Dishonored2012.jpg",
        name: "Dishonored",
        year: "2010s",
        description:"Stealth-action game offering supernatural abilities, a steampunk world, and a gripping tale of revenge in Dunwall."
    },
    {
        image:
        "./Image4/XCOM2012.jpg",
        name: "XCOM: Enemy Unknown",
        year: "2010s",
        description:"Turn-based strategy, defending Earth against alien invaders, emphasizing resource management, and intense tactical battles."
    },
    {
        image:
        "./Image4/BioshockInfinite2013.jpg",
        name: "Bioshock Infinite",
        year: "2010s",
        description:"First-person shooter with a captivating story, exploring the floating city of Columbia, and delving into quantum physics and racism."
    },
    {
        image:
        "./Image4/GrandTheftAutoV2013.jpg",
        name: "Grand Theft Auto V",
        year: "2010s",
        description:"Open-world action-adventure, featuring a vast, satirical depiction of Los Santos and three intertwining criminal protagonists."
    },
    {
        image:
        "./Image4/TheLastofUs2013.jpg",
        name: "The Last of Us",
        year: "2010s",
        description:"Post-apocalyptic action-adventure, with a heartfelt story, intense stealth gameplay, and a bond between Joel and Ellie."
    },
    {
        image:
        "./Image4/TombRaider2013.jpg",
        name: "Tomb Raider",
        year: "2010s",
        description:"Reboot of the iconic series, portraying Lara Croft's origin story with survival elements, exploration, and cinematic action."
    },
    {
        image:
        "./Image4/Divinity22017.jpg",
        name: "Original Sin 2",
        year: "2010s",
        description:"Critically acclaimed RPG with deep storytelling, rich character customization, and turn-based combat in a fantasy world."
    },
    {
        image:
        "./Image4/Cuphead2017.jpg",
        name: "Cuphead",
        year: "2010s",
        description:"Run-and-gun indie game, combining 1930s cartoon aesthetics with challenging boss battles and unique platforming."
    },
    {
        image:
        "./Image4/MonsterHunter2018.jpg",
        name: "Monster Hunter: World",
        year: "2010s",
        description:"Action RPG, hunting massive monsters in a living, breathing ecosystem, and cooperative multiplayer exploration."
    },
    {
        image:
        "./Image4/RedDeadRedemption22018.jpg",
        name: "Red Dead Redemption 2",
        year: "2010s",
        description:"Western epic, following Arthur Morgan in the Van der Linde gang, with a vast open world and compelling narrative."
    },
    {
        image:
        "./Image4/Sekiro2019.jpg",
        name: "Sekiro: Shadows Die Twice",
        year: "2010s",
        description:"Action-adventure with challenging combat, featuring a shinobi's journey in a dark, Sengoku-era world."
    },
    {
        image:
        "./Image4/OuterWilds2019.jpg",
        name: "Outer Wilds",
        year: "2010s",
        description:"Space exploration and mystery, unraveling a time-looped narrative as a spacefarer discovering the secrets of the cosmos."
    },
    {
        image:
        "./Image4/Control2019.jpg",
        name: "Control",
        year: "2010s",
        description:"Supernatural action-adventure, investigating the Federal Bureau of Control, with mind-bending powers and a surreal environment."
    },
    {
        image:
        "./Image4/DiscoElysium2019.jpg",
        name: "Disco Elysium",
        year: "2010s",
        description:"Narrative-driven RPG with a unique skill system, exploring a city and solving a complex murder mystery."
    },
    {
        image:
        "./Image4/StarWarsJedi2019.jpg",
        name: "Star Wars Jedi: Fallen Order",
        year: "2010s",
        description:"Action-adventure set in the Star Wars universe, following Cal Kestis on a quest against the Empire."
    },
    {
        image:
        "./Image4/ApexLegends2019.jpg",
        name: "Apex Legends",
        year: "2010s",
        description:"Battle royale shooter, featuring unique legends with diverse abilities, strategic gameplay, and dynamic team-based competition."
    },
    {
        image:
        "./Image4/TotalWar2019.jpg",
        name: "Total War: Three Kingdoms",
        year: "2010s",
        description:"Historical strategy, depicting the Three Kingdoms period of ancient China with epic battles and political intrigue."
    },
    {
        image:
        "./Image4/SlaytheSpire2019.jpg",
        name: "Slay the Spire",
        year: "2010s",
        description:"Roguelike deck-building game, ascending a procedurally generated spire with strategic card-based combat."
    },
    {
        image:
        "./Image4/APlagueTale2019.jpg",
        name: "A Plague Tale: Innocence",
        year: "2010s",
        description:"Action-adventure with a gripping narrative, exploring medieval France amid the Black Plague and supernatural threats."
    },
    {
        image:
        "./Image4/Hitman32021.jpg",
        name: "Hitman 3",
        year: "2020s",
        description:"Stealth assassination, concluding the World of Assassination trilogy with creative sandbox locations and immersive storytelling."
    },
    {
        image:
        "./Image4/Cyberpunk20772020.jpg",
        name: "Cyberpunk 2077",
        year: "2020s",
        description:"Ambitious RPG set in Night City, marred by technical issues, starring V and exploring a dystopian future."
    },
    {
        image:
        "./Image4/Valheim2021.jpg",
        name: "Valheim",
        year: "2020s",
        description:"Viking survival, exploring a procedurally generated world, crafting, building, and battling mythical creatures in co-op adventures."
    },
    {
        image:
        "./Image4/ItTakesTwo2021.jpg",
        name: "It Takes Two",
        year: "2020s",
        description:"Co-op action-adventure, innovative gameplay, and a heartfelt story as two dolls navigate whimsical challenges in a magical world."
    },
    {
        image:
        "./Image4/Deathloop2021.jpg",
        name: "Deathloop",
        year: "2020s",
        description:"Time-loop FPS, playing as Colt in a stylish, mind-bending narrative, unraveling the mysteries of Blackreef."
    },
    {
        image:
        "./Image4/Battlefield20422021.jpg",
        name: "Battlefield 2042",
        year: "2020s",
        description:"Large-scale multiplayer FPS, offering dynamic weather, diverse maps, and futuristic warfare in a stunning, chaotic experience."
    },
    {
        image:
        "./Image4/FarCry62021.jpg",
        name: "Far Cry 6",
        year: "2020s",
        description:"Open-world FPS, battling a dictator on the fictional island of Yara, featuring guerrilla warfare and chaotic exploration."
    },
    {
        image:
        "./Image4/Psychonauts22021.jpg",
        name: "Psychonauts 2",
        year: "2020s",
        description:"Quirky platformer with psychic powers, continuing the story of Razputin Aquato in a surreal and imaginative world."
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
        let title = document.createElement("h2");

        title.textContent = games[i].name;


       

        //  color
        let year = document.createElement("p");
        year.textContent = games[i].year;



        //  image
        let image = document.createElement("img");
        image.setAttribute("src", games[i].image);




        let description = document.createElement("p");
    description.classList.add("description");
    description.textContent = games[i].description;





        // append to page
        ul.appendChild(list_item)
        list_item.appendChild(title)
        list_item.appendChild(year)
        list_item.appendChild(image)
        list_item.appendChild(description)

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




window.onscroll = function () {
    showBackToTopButton();
};

function showBackToTopButton() {
    var button = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}














  document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(function (card) {
      card.addEventListener('click', function () {
    
        this.classList.toggle('is-flipped');
      });
    });
  });
  