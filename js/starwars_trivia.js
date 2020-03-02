'use strict';

// import React from 'react';
// import ReactDOM from 'react';

const e = React.createElement;

class TestButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return (
            <button
                className="answer"
            >   button
            </button>
        );
    }
}



function QuizAnswer(props) {
    return (
        <button
            className="answer"
        >{props.value}
        </button>
    );
}

class QuizQuestion extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error:null,
            question: "Filler",
            answers: Array(4).fill(null),
            correctAnswer: null,
            dataTypes: {
                people: ["homeworld", "birth_year", "species"],
                planet: ["climate", "population"],
                films: ["opening_crawl", "release_date"],
                species: ["classification", "language", "homeworld", "average_lifespan"],
                vehicles: ["cost_in_credits", "manufacturer", "max_atmosphering_speed", "max_atmosphering_speed"],
                starships: ["manufacturer", "cost_in_credits", "hyperdrive_rating", "MGLT", "starship_class"]
            }
        };
        // this.state = {
        //     error:null,
        //     question: "Filler",
        //     answers: Array(4).fill(null),
        //     correctAnswer: null,
        //     dataTypes: {
        //         people: ["homeworld", "species"],
        //         planet: ["climate", "population"],
        //         films: ["opening_crawl", "release_date"],
        //         species: ["classification", "language", "homeworld", "average_lifespan"],
        //         vehicles: ["cost_in_credits", "manufacturer", "max_atmosphering_speed", "max_atmosphering_speed"],
        //         starships: ["manufacturer", "cost_in_credits", "hyperdrive_rating", "MGLT", "starship_class"]
        //     }
        // };
    }

    renderAnswer(i){
        return <div
            className="col-4 align-self-center">
            <QuizAnswer value={i}/>
        </div>
    }

    componentDidMount(){
        console.log("Loading Data...");

        let possibleDataTypes = ["people", "planet", "films", "species", "vehicles", "starships"];

        let topDataTypeIndex = Math.floor(Math.random() * possibleDataTypes.length);
        let topDataType = possibleDataTypes[topDataTypeIndex];

        let possibleQuestionDataTypes = this.state.dataTypes[topDataType];

        let questionTypeIndex = Math.floor(Math.random() * possibleQuestionDataTypes.length);
        let questionType = possibleQuestionDataTypes[questionTypeIndex];

        fetch("https://swapi.co/api/" + topDataType + "/")
            .then(res => res.json())
            .then(
                (result) => {
                    let data = result["results"];

                    let answerIndexes = [];
                    while(answerIndexes.length < 4){
                        let currentPick =  Math.floor(Math.random() * data.length);
                        if (!answerIndexes.includes(currentPick)){
                            answerIndexes.push(currentPick);
                        }
                    }

                    let correctAnswerIndex = answerIndexes[Math.floor(Math.random() * 4)];

                    let answers = [];
                    for(let index in answerIndexes){
                        if(["homeworld", "species"].includes(questionType)){
                            console.log("Need to get name...");
                            console.log(data[index][questionType]);

                            let correctAnswerPlanetOrSpeciesIndex = data[correctAnswerIndex][questionType][0].split("/")[5];
                            let dataType = questionType === "homeworld" ? "planets" : questionType;

                            console.log("second fetch","https://swapi.co/api/" + dataType + "/");

                            fetch("https://swapi.co/api/" + dataType + "/").then(res => res.json()).then(
                                (result) => {
                                    console.log("Loading names...");
                                    let extraData = result["results"];

                                    while(answers.length < 4){
                                        if (answers.length === correctAnswerIndex - 1){
                                            answers.push(extraData[correctAnswerPlanetOrSpeciesIndex]["name"]);
                                        } else {
                                            let currentPick = Math.floor(Math.random() * extraData.length);
                                            if (!answers.includes(extraData[currentPick]["name"])){
                                                answers.push(extraData[currentPick]["name"]);
                                            }
                                        }
                                    }
                                    this.setState({
                                        answers: answers
                                    });
                                },
                                (error) => {
                                    console.log("Error", error);
                                }
                            )
                            break;
                        } else {
                            console.log("Adding info...");
                            answers.push(data[index][questionType]);
                        }
                    }

                    console.log("correctAnswerIndex", correctAnswerIndex);


                    let nameOrTitle = topDataType === ("films") ? "title" : "name";

                    let questionString = "What is " + data[correctAnswerIndex][nameOrTitle] + "'s " + questionType.replace(/_/g, " ") + "?";
                    console.log("questionString", questionString);

                    this.setState({
                        question: questionString,
                        answers: answers,
                        correctAnswer: data[correctAnswerIndex][questionType]
                    });
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
            <p>{this.state.question}</p>
            <div className="row">{this.renderAnswer(this.state.answers[0])}</div>
            <div className="row">{this.renderAnswer(this.state.answers[1])}</div>
            <div className="row">{this.renderAnswer(this.state.answers[2])}</div>
            <div className="row">{this.renderAnswer(this.state.answers[3])}</div>
        </div>;
    }
}

class Quiz extends React.Component {
    render() {
        return <div>
            <QuizQuestion/>
            <QuizQuestion/>
        </div>
    }
}

// class QuizQuestion extends React.Component {
//
//     renderAnswer(i){
//         return (<QuizAnswer />);
//     }
//
//     render() {
//         return (
//             < div >
//             {this.renderAnswer("Test 1")}
//             {this.renderAnswer("Test 1")}
//             {this.renderAnswer("Test 1")}
//             < /div>
//     )
//         ;
//     }
// }

// const quizContainer = document.querySelector('#testQuiz');
// ReactDOM.render(e(QuizQuestion), quizContainer);
ReactDOM.render(
    <Quiz/>,
    document.getElementById('testQuiz')
);


