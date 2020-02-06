window.addEventListener("load", function () {
    // Confirms with the console that the page has loaded
    console.log("Loaded...");
    let roundCount = 0;
    let cardImages = [];
    hitApi('https://killascheuring.github.io/json/data.json', function (error, data){
        if (error) {
            console.log('there was an error', error);
        } else {
            cardImages = data["cardImages"];
        }
    });

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
        fetch("https://killascheuring.github.io/json/data.json")
            .then(response => response.json())
            .then(tests => {

            });

        hitApi('https://killascheuring.github.io/json/data.json', function (error, data){
            if (error) {
                console.log('there was an error', error);
            } else {
                console.log(data);
                buildDecksButton.style.display = "none";
                testRedDeckImage.style.display = "block";
                testBlueDeckImage.style.display = "block";
                testWinner.style.display = "block";

                testObj.testing = true;

                redDeck = data["test1"]["redDeck"];

                testObj.redCardOrder = data["test1"]["redDeckOrder"];

                blueDeck = data["test1"]["blueDeck"];

                testObj.blueCardOrder = data["test1"]["blueDeckOrder"];

                testObj.outcomes = data["test1"]["outcome"];
            }
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

    function hitApi(url, callback) {
        let req = new XMLHttpRequest();

        req.addEventListener('load', onLoad);
        req.addEventListener('error', onFail);
        req.addEventListener('abort', onFail);

        req.open('GET', url);
        req.send();

        function onLoad(event) {
            if (req.status >= 400) {
                onFail(event);
            } else {
                let data = JSON.parse(this.responseText);
                callback(null, data);
            }
        }

        function onFail(event) {
            callback(new Error(event));
        }
    }
});


