let cardImages = {
    "2Spades": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/2S.svg/171px-2S.svg.png",
    "3Spades": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/3S.svg/171px-3S.svg.png",
    "4Spades": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/4S.svg/171px-4S.svg.png",
    "5Spades": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/5S.svg/171px-5S.svg.png",
    "6Spades": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/6S.svg/171px-6S.svg.png",
    "7Spades": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/7S.svg/171px-7S.svg.png",
    "8Spades": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/8S.svg/171px-8S.svg.png",
    "9Spades": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/9S.svg/171px-9S.svg.png",
    "10Spades": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/10S.svg/171px-10S.svg.png",
    "11Spades": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/JS.svg/171px-JS.svg.png",
    "12Spades": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/QS.svg/171px-QS.svg.png",
    "13Spades": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/KS.svg/171px-KS.svg.png",
    "14Spades": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/AS.svg/171px-AS.svg.png",
    "2Hearts": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2H.svg/171px-2H.svg.png",
    "3Hearts": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/3H.svg/171px-3H.svg.png",
    "4Hearts": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/4H.svg/171px-4H.svg.png",
    "5Hearts": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/5H.svg/171px-5H.svg.png",
    "6Hearts": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/6H.svg/171px-6H.svg.png",
    "7Hearts": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/7H.svg/171px-7H.svg.png",
    "8Hearts": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/8H.svg/171px-8H.svg.png",
    "9Hearts": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/9H.svg/171px-9H.svg.png",
    "10Hearts": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/10H.svg/171px-10H.svg.png",
    "11Hearts": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JH.svg/171px-JH.svg.png",
    "12Hearts": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/QH.svg/171px-QH.svg.png",
    "13Hearts": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/KH.svg/171px-KH.svg.png",
    "14Hearts": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/AH.svg/171px-AH.svg.png",
    "2Clubs": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/2C.svg/171px-2C.svg.png",
    "3Clubs": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/3C.svg/171px-3C.svg.png",
    "4Clubs": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/4C.svg/171px-4C.svg.png",
    "5Clubs": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/5C.svg/171px-5C.svg.png",
    "6Clubs": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/6C.svg/171px-6C.svg.png",
    "7Clubs": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/7C.svg/171px-7C.svg.png",
    "8Clubs": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/8C.svg/171px-8C.svg.png",
    "9Clubs": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/9C.svg/171px-9C.svg.png",
    "10Clubs": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/10C.svg/171px-10C.svg.png",
    "11Clubs": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/JC.svg/171px-JC.svg.png",
    "12Clubs": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/QC.svg/171px-QC.svg.png",
    "13Clubs": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/KC.svg/171px-KC.svg.png",
    "14Clubs": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/AC.svg/171px-AC.svg.png",
    "2Diamonds": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/2D.svg/171px-2D.svg.png",
    "3Diamonds": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/3D.svg/171px-3D.svg.png",
    "4Diamonds": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/4D.svg/171px-4D.svg.png",
    "5Diamonds": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/5D.svg/171px-5D.svg.png",
    "6Diamonds": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/6D.svg/171px-6D.svg.png",
    "7Diamonds": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/7D.svg/171px-7D.svg.png",
    "8Diamonds": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/8D.svg/171px-8D.svg.png",
    "9Diamonds": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/9D.svg/171px-9D.svg.png",
    "10Diamonds": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/10D.svg/171px-10D.svg.png",
    "11Diamonds": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/JD.svg/171px-JD.svg.png",
    "12Diamonds": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/QD.svg/171px-QD.svg.png",
    "13Diamonds": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/KD.svg/171px-KD.svg.png",
    "14Diamonds": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/AD.svg/171px-AD.svg.png"
};
let roundCount = 0;

window.addEventListener("load", function () {
    // Confirms with the console that the page has loaded
    console.log("Loaded...");

    // Initialize the test object. Will be filled when user selects a test
    let testObj = {
        testing: false,
        redCardOrder: [],
        blueCardOrder: [],
        outcomes: []
    };


    // Grabs the red deck image and array
    let redDeckImage = document.getElementById("red");
    redDeckImage.style.display = "block";
    let redDeck = [];

    // Grabs the blue deck image and array
    let blueDeckImage = document.getElementById("blue");
    blueDeckImage.style.display = "block";
    let blueDeck = [];


    // Grabs the red test deck image and sets it to not display. Will display when user selects test
    let testRedDeckImage = document.getElementById("testRed");
    testRedDeckImage.style.display = "none";

    // Grabs the blue test deck image and sets it to not display. Will display when user selects test
    let testBlueDeckImage = document.getElementById("testBlue");
    testBlueDeckImage.style.display = "none";


    // Grabs the ante element where it will display the number of cards in the ante during the War! section. TODO Remove after debugging
    let anteText = document.getElementById("ante");
    anteText.style.display = "none";

    // Grabs the element where it displays the winner of the round or if War! has started
    let winnerText = document.getElementById("winner");


    // Grabs the element where the test outcome displays and sets it to not display. Will display when user selects test.
    let testWinner = document.getElementById("testWinner");
    testWinner.style.display = "none";

    // Grabs the element where the number of cards left in decks displays. TODO Remove after debugging
    let totalCards = document.getElementById("totalCards");


    // Grab deck building button and attach deck builder
    let buildDecksButton = document.getElementById("buildDecks");
    buildDecksButton.addEventListener("click", function () {
        // Build decks
        buildDecks();
        // Let the user know the decks are ready
        winnerText.innerText = "Decks are Ready";

        // Set the deck building button to not display since the decks are done.
        buildDecksButton.style.display = "none";
    });

    // Grab the next round button,
    // attached the flip and score function,
    // and sets it to not display. Will display after the user selects a test or builds the decks.
    let nextRoundButton = document.getElementById("playNexRound");
    nextRoundButton.addEventListener("click", function () {
        // Starter text for displaying the winner
        let winner = "";
        roundCount++;
        console.log(roundCount);

        // Display cards for each player using they're value
        redDeckImage.src = cardImages[redDeck[0]["rank"] + redDeck[0]["suit"]];
        blueDeckImage.src = cardImages[blueDeck[0]["rank"] + blueDeck[0]["suit"]];

        // Display Testing Cards
        if (testObj.testing) {
            testRedDeckImage.src = cardImages[testObj.redCardOrder[0]["rank"] + testObj.redCardOrder[0]["suit"]];
            testBlueDeckImage.src = cardImages[testObj.blueCardOrder[0]["rank"] + testObj.blueCardOrder[0]["suit"]];
            testWinner.innerText = testObj.outcomes[0];
            testObj.outcomes.shift();
            testObj.redCardOrder.shift();
            testObj.blueCardOrder.shift();
        }


        // Determine winner and finish winner text
        if (blueDeck[0]["rank"] > redDeck[0]["rank"]) {
            winner = "Blue Wins!";

            // Remove current card and puts both that card and the loser's card on the bottom
            blueDeck.push(blueDeck.shift());
            blueDeck.push(redDeck.shift());
            // Removes loser's card
        } else if (redDeck[0]["rank"] > blueDeck[0]["rank"]) {
            winner = "Red Wins!";

            // Remove current card and puts both that card and the loser's card on the bottom
            redDeck.push(redDeck.shift());

            redDeck.push(blueDeck.shift());
        } else {
            // If a winner cannot be determined above it is War! and this turns on the button to run War!
            winner = "It's War!";
            playNexWarButton.style.display = "block";
            nextRoundButton.style.display = "none";

        }
        totalCards.innerText = String(redDeck.length + blueDeck.length);

        winnerText.innerText = winner;
    });

    // Allows user to go through the rounds of war
    let playNexWarButton = document.getElementById("playNexWar");
    playNexWarButton.addEventListener("click", function () {
        anteText.style.display = "block";
        nextRoundButton.style.display = "none";
        roundCount++;
        console.log(roundCount);

        // Initiate ante
        let ante = [];

        // Putting last played cards in ante
        ante.push(redDeck.shift());
        ante.push(blueDeck.shift());

        // Putting face down cards in ante
        ante.push(redDeck.shift());
        ante.push(blueDeck.shift());

        // Display drawn cards
        redDeckImage.src = cardImages[redDeck[0]["rank"] + redDeck[0]["suit"]];
        blueDeckImage.src = cardImages[blueDeck[0]["rank"] + blueDeck[0]["suit"]];

        if (testObj.testing) {
            testObj.redCardOrder.shift();
            testObj.blueCardOrder.shift();
            testRedDeckImage.src = cardImages[testObj.redCardOrder[0]["rank"] + testObj.redCardOrder[0]["suit"]];
            testBlueDeckImage.src = cardImages[testObj.blueCardOrder[0]["rank"] + testObj.blueCardOrder[0]["suit"]];
            testWinner.innerText = testObj.outcomes[0];
            testObj.outcomes.shift();
            testObj.redCardOrder.shift();
            testObj.blueCardOrder.shift();
        }

        // Put played cards in ante

        //Determine if there is a winner
        if (blueDeck[0]["rank"] > redDeck[0]["rank"]) {
            winnerText.innerText = "Blue Wins the War!";
            ante.push(redDeck.shift());
            ante.push(blueDeck.shift());
            blueDeck = blueDeck.concat(ante);
            nextRoundButton.style.display = "block";
            playNexWarButton.style.display = "none";

        } else if (redDeck[0]["rank"] > blueDeck[0]["rank"]) {
            winnerText.innerText = "Red Wins the War!";
            ante.push(redDeck.shift());
            ante.push(blueDeck.shift());
            redDeck = redDeck.concat(ante);
            nextRoundButton.style.display = "block";
            playNexWarButton.style.display = "none";

        } else {
            winnerText.innerText = "It's War!";
        }
    });

    //TODO Finish reset functionality
    let resetButton = document.getElementById("reset");
    resetButton.addEventListener('click', resetBacks);

    ///////////////////////////Tests//////////////////////////////////
    let test1Button = document.getElementById("test1");
    test1Button.addEventListener("click", function () {
        fetch("https://killascheuring.github.io/json/tests.json")
            .then(response => response.json())
            .then(tests => {
                console.log(tests);
                buildDecksButton.style.display = "none";
                testRedDeckImage.style.display = "block";
                testBlueDeckImage.style.display = "block";
                testWinner.style.display = "block";

                testObj.testing = true;

                redDeck = tests["test1"]["redDeck"];

                testObj.redCardOrder = tests["test1"]["redCardOrder"];

                blueDeck = tests["test1"]["blueDeck"];

                testObj.blueCardOrder = tests["test1"]["blueCardOrder"];

                testObj.outcomes = tests["test1"]["outcomes"];
            });
    });


    /////////////////////////Functions////////////////////////////////


    // Generated the decks for each player to use
    function buildDecks() {
        //Initialize card pool
        let cardPool = [];

        // Build card pool
        for (let suit of ["Spades", "Hearts", "Clubs", "Diamonds"]) {
            for (let rank = 2; rank < 15; rank++) {
                cardPool.push({"rank": rank, "suit": suit});
            }
        }

        // For each potential card in the card pool, this pulls a random one, checks if is has been selected and if not
        // adds it to either the red deck or the blue deck (alternating between them)
        for (let currentCardNum = 0; currentCardNum < cardPool.length; currentCardNum++) {
            let randomCard = cardPool[Math.round(Math.random() * cardPool.length)];

            // Checks if the random card exists and if its in the decks already
            while (redDeck.includes(randomCard) || blueDeck.includes(randomCard) || typeof randomCard === "undefined") {
                randomCard = cardPool[Math.round(Math.random() * cardPool.length)];
            }
            // Puts the random card into either the red or blue deck (alternating between them.
            if (currentCardNum % 2 === 0) {
                redDeck.push(randomCard);
            } else {
                blueDeck.push(randomCard);
            }
        }

        let redNumCards = document.getElementById("redNumCards");
        redNumCards.innerText = String(redDeck.length);
        let blueNumCards = document.getElementById("blueNumCards");
        blueNumCards.innerText = String(blueDeck.length);
        totalCards.innerText = String(redDeck.length + blueDeck.length);

        console.log(redDeck);
        console.log(blueDeck);
    }

    // Resets the game to the beginning
    // TODO Finish this
    function resetBacks() {
        redDeckImage.src = cardImages["14Spades"];
        blueDeckImage.src = cardImages["14Spades"];
    }

    // Runs through one card flip of war and determines the winner.
    function flipAndScore() {
        // Starter text for displaying the winner
        let winner = "";

        // Display cards for each player using they're value
        redDeckImage.src = cardImages[redDeck[0]["rank"] + redDeck[0]["suit"]];
        blueDeckImage.src = cardImages[blueDeck[0]["rank"] + blueDeck[0]["suit"]];

        // Display Testing Cards
        if (testObj.testing) {
            testRedDeckImage.src = cardImages[testObj.redCardOrder[testObj.redIndex]["rank"] + testObj.redCardOrder[testObj.redIndex]["suit"]];
            testBlueDeckImage.src = cardImages[testObj.blueCardOrder[testObj.blueIndex]["rank"] + testObj.blueCardOrder[testObj.blueIndex]["suit"]];
            testWinner.innerText = testObj.outcomes[0];
            testObj.outcomes.shift();
            testObj.redIndex++;
            testObj.blueIndex++;
        }


        // Determine winner and finish winner text
        if (blueDeck[0]["rank"] > redDeck[0]["rank"]) {
            winner += "Blue!";

            // Remove current card and puts both that card and the loser's card on the bottom
            blueDeck.push(blueDeck[0]);
            blueDeck.shift();
            blueDeck.push(redDeck[0]);
            // Removes loser's card
            redDeck.shift();
        } else if (redDeck[0]["rank"] > blueDeck[0]["rank"]) {
            winner += "Red!";

            // Remove current card and puts both that card and the loser's card on the bottom
            redDeck.push(redDeck[0]);
            redDeck.shift();
            redDeck.push(blueDeck[0]);
            // Removes loser's card
            blueDeck.shift();
        } else {
            // If a winner cannot be determined above it is war! and this turns on the button to play the side game
            winner = "It's War! \n";
            playNexWarButton.style.display = "block";
            nextRoundButton.style.display = "none";

        }
        let redNumCards = document.getElementById("redNumCards");
        redNumCards.innerText = String(redDeck.length);
        let blueNumCards = document.getElementById("blueNumCards");
        blueNumCards.innerText = String(blueDeck.length);

        totalCards.innerText = String(redDeck.length + blueDeck.length);

        // console.log(redDeck);
        // console.log(blueDeck);
        return winner;
    }


    // Runs through the side game of war and puts all anted cards in winners deck
    // TODO Test and Fix this
    function runWar() {
        // Initiate ante
        let ante = [];

        console.log(redDeck);
        console.log(blueDeck);

        // Putting last played cards in ante
        ante.push(redDeck.shift());
        ante.push(blueDeck.shift());

        // Putting face down cards in ante
        ante.push(redDeck.shift());
        ante.push(blueDeck.shift());
        // Draw played cards
        redDeckImage.src = cardImages[redDeck[0]["rank"] + redDeck[0]["suit"]];
        blueDeckImage.src = cardImages[blueDeck[0]["rank"] + blueDeck[0]["suit"]];

        // Put played cards in ante
        ante.push(redDeck[0]);
        ante.push(blueDeck[0]);

        console.log(redDeck);
        console.log(blueDeck);

        //Determine if there is a winner
        if (blueDeck[0]["rank"] > redDeck[0]["rank"]) {
            warWinner = "Blue wins!";
            blueDeck.shift();
            blueDeck.concat(ante);
            nextRoundButton.style.display = "block";
        } else if (redDeck[0]["rank"] > blueDeck[0]["rank"]) {
            warWinner = "Red Wins!";
            redDeck.shift();
            redDeck.concat(ante);
            nextRoundButton.style.display = "block";
        }

        if (testObj.testing) {
            testRedDeckImage.src = cardImages[testObj.redCardOrder[testObj.redIndex]["rank"] + testObj.redCardOrder[testObj.redIndex]["suit"]];
            testRedDeckImage.src = cardImages[testObj.blueCardOrder[testObj.blueIndex]["rank"] + testObj.blueCardOrder[testObj.blueIndex]["suit"]];
            testWinner.innerText = testObj.outcomes[0];
            testObj.outcomes.shift();
            testObj.redIndex++;
            testObj.blueIndex++;
        }

        console.log(ante);

        console.log(redDeck);
        console.log(blueDeck);
        return ante.length;
    }


});


