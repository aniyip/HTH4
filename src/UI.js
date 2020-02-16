import React, {Component} from "react";
import questions from "./Questions.js";
import './App.css';

console.log(questions);

class UI extends Component {

    constructor(props) {
        super(props);
        this.handleNextDestClick = this.handleNextDestClick.bind(this);
 //       this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isCorrect: false,
            isTraveling: false,
            questions: questions,
        };
    }

    handleNextDestClick() {
        this.setState({
            isTraveling: true,
            isCorrect: false, 
        });
        this.props.nextCheckpoint(); 
      }

    submitAnswer(correctAns, ans) {
        if(correctAns === ans) {
            this.setState({isCorrect: true});
        }
    };

    iterate() {
        this.props.nextCheckpoint(); 
        this.setState({isTraveling: false});
    }

    render() {
        console.log(questions);

        console.log(this.state.isTraveling);
        let qButton;
        if (this.state.isTraveling) {
            // output question to reach destination
          qButton = <button>Logout</button>;
        } else {
            // output question after arriving at destination
            //onClick={this.setState({ isTraveling: !this.state.isTraveling })}
        }

        return (
            <div>UI Section

                <h1>{this.props.currentLocation}</h1>
                {this.props.currentLocation < 0 
                            ? <button onClick={()=> {this.iterate()}}>Let's Start</button>
                            : <div></div> }
                <ul> 
                    {questions.filter(q => q.location === this.props.currentLocation).map(q => {
                        return <ul id="quizmenu" key={q.location}>
                            {q.question}
                            <p><li><button onClick={() => this.submitAnswer(q.correct, q.answers[0])}>{q.answers[0]}</button></li></p>
                            <p><li><button onClick={() => this.submitAnswer(q.correct, q.answers[1])}>{q.answers[1]}</button></li></p>
                            <p><li><button onClick={() => this.submitAnswer(q.correct, q.answers[2])}>{q.answers[2]}</button></li></p>
                            <p><li><button onClick={() => this.submitAnswer(q.correct, q.answers[3])}>{q.answers[2]}</button></li></p>
                            <li>{q.answers[3]}</li>
                            {this.state.isCorrect 
                            ? <button onClick={this.handleNextDestClick}>Next Destination</button>
                            : <div></div> }
                        </ul>
                    })}
                 </ul>
            </div>
        );
    }
} 




export default UI;