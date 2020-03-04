'use strict';

function QuizAnswer(props) {
    return (
        <button
            onClick={props.onClick}
            className={props.className}
        >{props.value}
        </button>
    );
}

class QuizQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            question: "Loading Question...",
            answers: Array(4).fill(null),
            answersStates: Array(4).fill(false),
            correctAnswer: null
        };

        this.dataTypes = {
            people: ["homeworld", "birth_year", "species"],
            planet: ["climate", "population"],
            films: ["opening_crawl", "release_date"],
            species: ["classification", "language", "homeworld", "average_lifespan"],
            vehicles: ["cost_in_credits", "manufacturer", "max_atmosphering_speed", "max_atmosphering_speed"],
            starships: ["manufacturer", "cost_in_credits", "hyperdrive_rating", "MGLT", "starship_class"]
        };

        this.dataLengths = {
            people: 87,
            planets: 59,
            films: 7,
            species: 37,
            vehicles: 39,
            starships: 37
        }
    }

    renderAnswer(text, i) {
        return <div
            className="col-4 align-self-center">
            <QuizAnswer
                value={text}
                onClick={() => this.handleClick(i)}
                className={this.state.answersStates[i] ? "clicked" : ""}
            />
        </div>
    }

    handleClick(i) {
        let answersStates = this.state.answersStates.slice();
        if (answersStates.includes(true) && !answersStates[i]) {
            return;
        }
        answersStates[i] = !answersStates[i];

        this.setState({
            answersStates: answersStates
        }, () => {
            if (!answersStates[i]) {
                this.props.update(this.props.index, null);
            } else {
                let correct = this.scoreQuestion();
                this.props.update(this.props.index, correct);
            }
        });
    }

    scoreQuestion() {
        let correctAnswerIndex = this.state.answers.indexOf(this.state.correctAnswer);
        let answerIndex = this.state.answersStates.indexOf(true);
        return correctAnswerIndex === answerIndex;
    }

    componentDidMount() {
        console.log("Loading Data...");

        // Get possible top level data types
        // let possibleDataTypes = ["people"];
        let possibleDataTypes = ["people", "planets", "films", "species", "vehicles", "starships"];

        // Randomly select the top level data type
        let topDataTypeIndex = Math.floor(Math.random() * possibleDataTypes.length);
        let topDataType = possibleDataTypes[topDataTypeIndex];


        // Get possible data types for the question
        let possibleQuestionDataTypes = this.dataTypes[topDataType];

        // Randomly select the data type for the question
        let questionTypeIndex = Math.floor(Math.random() * possibleQuestionDataTypes.length);
        let questionType = possibleQuestionDataTypes[questionTypeIndex];


        // Randomly select the index for the correct answer data
        let correctAnswerDataIndex = Math.floor(Math.random() * this.dataLengths[topDataType]);
        // let correctAnswerDataIndex = 72;

        // Randomly select the correct answers index in the answers
        let correctAnswerIndex = Math.floor(Math.random() * 4);

        // Fill the answers array with nulls
        let answers = Array(4).fill(null);

        // Find the page where that data lives
        let dataPageNum = Math.ceil(correctAnswerDataIndex % 10 === 0 ? (correctAnswerDataIndex + 1) / 10 : (correctAnswerDataIndex) / 10);
        dataPageNum = dataPageNum === 0 ? 1 : dataPageNum;


        // fetch the page where the data lives
        fetch("https://swapi.co/api/" + topDataType + "/?page=" + dataPageNum)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("Loading correct answer page...");

                    // Get the data on the page
                    let data = result["results"];

                    // Get correct answer data
                    let correctAnswerData = data[correctAnswerDataIndex % 10];

                    // If data type is "homeworld" or "species" we need a new fetch
                    if (["homeworld", "species"].includes(questionType)) {
                        console.log("Setting up second fetch");
                        // Get the index of the planet or species data for the correct answer
                        let correctAnswerIndexForSecondFetch = 0;

                        // Check if address in array or if info is blank, "1" by default
                        if (correctAnswerData[questionType][0] === undefined) {
                            correctAnswerIndexForSecondFetch = "1";
                        } else if (typeof correctAnswerData[questionType] === "string") {
                            correctAnswerIndexForSecondFetch = correctAnswerData[questionType].split("/")[5];

                        } else {
                            correctAnswerIndexForSecondFetch = correctAnswerData[questionType][0].split("/")[5];
                        }

                        // Define offset due to api ordering issue
                        let offset = questionType === "homeworld" ? 2 : 5;

                        // use planets instead of "homeworld" for fetch
                        let dataType = questionType === "homeworld" ? "planets" : questionType;

                        // Hard code exceptions to the order of elements
                        if (dataType === "planets") {
                            if (correctAnswerIndexForSecondFetch === "1") {
                                correctAnswerIndexForSecondFetch = 59;
                            } else {
                                correctAnswerIndexForSecondFetch = parseInt(correctAnswerIndexForSecondFetch) - offset;
                            }
                        }
                        if (dataType === "species") {
                            if (correctAnswerIndexForSecondFetch === "1") {
                                correctAnswerIndexForSecondFetch = 35;
                            } else if (correctAnswerIndexForSecondFetch === "2") {
                                correctAnswerIndexForSecondFetch = 34;
                            } else if (correctAnswerIndexForSecondFetch === "3") {
                                correctAnswerIndexForSecondFetch = 33;
                            } else if (correctAnswerIndexForSecondFetch === "4") {
                                correctAnswerIndexForSecondFetch = 36;
                            } else {
                                correctAnswerIndexForSecondFetch = parseInt(correctAnswerIndexForSecondFetch) - offset;
                            }
                        }

                        // Get page number for the second fetch
                        let dataPageNumForSecondFetch = Math.ceil(correctAnswerIndexForSecondFetch % 10 === 0 ? (correctAnswerIndexForSecondFetch + 1) / 10 : (correctAnswerIndexForSecondFetch) / 10);

                        // fetch the page where the correct answer data lives
                        fetch("https://swapi.co/api/" + dataType + "/?page=" + dataPageNumForSecondFetch)
                            .then(res => res.json())
                            .then(
                                (namesResults) => {
                                    // Get the data on the page
                                    let namesData = namesResults["results"];
                                    console.log("Loading correct name page");

                                    // Get correct answer name data
                                    let correctAnswerNameData = namesData[(correctAnswerIndexForSecondFetch) % 10];
                                    // put the correct answer in it's position in the answers array
                                    answers[correctAnswerIndex] = correctAnswerNameData["name"];

                                    // track the index of the answers array
                                    let answersIndex = 0;

                                    // loop till the answers array is filled
                                    // Add break if array doesn't fill quickly
                                    let breakLoop = 0;
                                    while (answers.includes(null)) {
                                        // Randomly select a name on this page
                                        let currentPick = Math.floor(Math.random() * namesData.length);
                                        // skip the correct answer
                                        if (answersIndex === correctAnswerIndex) {
                                            answersIndex++;
                                        }
                                        // Check to if the current pick is already in the answers
                                        if (!answers.includes(namesData[currentPick]["name"])) {
                                            // if not fill the null with the current pick name
                                            answers[answersIndex] = namesData[currentPick]["name"];
                                            answersIndex++;
                                        }
                                        breakLoop++;
                                        // Break if loops for too long
                                        if (breakLoop > 30) {
                                            console.log("Breaking Loop");
                                            break;
                                        }
                                    }

                                    // set the answer and correct answer in the question
                                    let nameOrTitle = topDataType === "films" ? "title" : "name";
                                    let questionString = "What is " + correctAnswerData[nameOrTitle] + "'s " + questionType.replace(/_/g, " ") + "?";
                                    console.log("questionString", questionString);
                                    this.setState({
                                        answers: answers,
                                        correctAnswer: correctAnswerNameData["name"],
                                        question: questionString,
                                    });
                                },

                                (namesError) => {
                                    console.log("Error in the names", namesError);
                                });

                    } else {
                        // Else we use the original fetch
                        console.log("Skipped second fetch");

                        // put the correct answer in it's position in the answers array
                        answers[correctAnswerIndex] = correctAnswerData[questionType];

                        // track the index of the answers array
                        let answersIndex = 0;

                        // loop till the answers array is filled
                        // Add break if array doesn't fill quickly
                        let breakLoop = 0;
                        while (answers.includes(null)) {
                            // Randomly select a value on this page
                            let currentPick = Math.floor(Math.random() * data.length);

                            // skip the correct answer
                            if (answersIndex === correctAnswerIndex) {
                                answersIndex++;
                            }

                            // Check to if the current pick is already in the answers
                            if (!answers.includes(data[currentPick][questionType])) {

                                // if not fill the null with the current pick value
                                answers[answersIndex] = data[currentPick][questionType];
                                answersIndex++;
                            }
                            breakLoop++;
                            // Break if loops for too long
                            if (breakLoop > 30) {
                                console.log("Breaking Loop");
                                break;
                            }
                        }

                        // set the answer and correct answer in the question
                        let nameOrTitle = topDataType === "films" ? "title" : "name";

                        let questionString = "What is " + correctAnswerData[nameOrTitle] + "'s " + questionType.replace(/_/g, " ") + "?";
                        console.log("questionString", questionString);
                        this.setState({
                            answers: answers,
                            correctAnswer: correctAnswerData[questionType],
                            question: questionString,
                        });
                    }


                },
                (error) => {
                    console.log("There was an error. Load failed!");
                    console.log(error);
                    this.setState({
                        isLoaded: true,
                        error: error
                    })
                }
            )
    }

    render() {
        console.log("Rendering Question...");
        return <div className={"quizQuestion"}>
            <h5>{this.state.question}</h5>
            <div
                className="row quizAnswer">{this.renderAnswer(this.state.answers[0] ? this.state.answers[0] : "Loading...", 0)}</div>
            <div
                className="row quizAnswer">{this.renderAnswer(this.state.answers[1] ? this.state.answers[1] : "Loading...", 1)}</div>
            <div
                className="row quizAnswer">{this.renderAnswer(this.state.answers[2] ? this.state.answers[2] : "Loading...", 2)}</div>
            <div
                className="row quizAnswer">{this.renderAnswer(this.state.answers[3] ? this.state.answers[3] : "Loading...", 3)}</div>
            <br/>
        </div>;
    }
}

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizQuestions: Array(5).fill(null),
            percentCorrect: null
        };
        this.update = this.update.bind(this);

    }

    renderQuestion(index) {
        return <div>
            <QuizQuestion
                index={index}
                update={this.update}
            />
            <br/>
        </div>
    }

    update(index, currentState) {
        console.log("Updating!");

        let newQuizStatus = this.state.quizQuestions.slice();
        newQuizStatus[index] = currentState;
        this.state.quizQuestions = newQuizStatus;
    }

    score() {
        console.log("Score!");
        if (this.state.quizQuestions.includes(null)) {
            console.log("Not done!");
            this.state.percentCorrect = null;
            return;
        }

        let numCorrect = 0;
        for (let correct of this.state.quizQuestions) {
            if (correct) {
                numCorrect++;
            }
        }
        console.log(numCorrect);
        this.state.percentCorrect = numCorrect / this.state.quizQuestions.length;
        console.log(this.state.percentCorrect);
        document.getElementById('testQuiz').innerText = this.state.percentCorrect * 100 + "%";
    }

    render() {
        let quizQuestions = [];
        for (let [index, value] of this.state.quizQuestions.entries()) {
            quizQuestions.push(this.renderQuestion(index, value));
        }
        return <div>
            {quizQuestions}
            <button onClick={() => this.score()}>Score!</button>
        </div>
    }
}

ReactDOM.render(
    <Quiz/>,
    document.getElementById('testQuiz')
);


