import '../formInput.css';
import React, { Component, Fragment } from "react";
import { AboutSection } from "./AboutSection.js";
import { MultipleChoiceSection } from "./MultipleChoiceSection.js";
import { DepositFormSection } from "./DepositFormSection.js";

class FormInputLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            aboutData: {},
            multipleChoiceData: {},
            email:  '',
            username: '',
            password: '', 
            pageTitle: [
                'Tell Us About You',
                'Questions About The Program Content',
                'Fill in the appropriate blanks to complete the checkbook components'
            ]
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })    
    }

    handleAboutSectionChange = event => {
        const {name, value} = event.target
        this.setState(prevState => {
            var aboutData = JSON.parse(JSON.stringify(prevState.aboutData));
            aboutData[name] = value;
            return { aboutData };
        })    
    }

    handleMultipleSectionChange = event => {
        const {name, value} = event.target
        this.setState(prevState => {
            var multipleChoiceData = JSON.parse(JSON.stringify(prevState.multipleChoiceData));
            multipleChoiceData[name] = value;
            return { multipleChoiceData };
        })    
    }
     
    handleSubmit = event => {
        event.preventDefault()
        const { email, username, password } = this.state
        console.log("state",this.state)
        alert(`Your registration detail: \n 
               Email: ${email} \n 
               Username: ${username} \n
               Password: ${password}`)
    }
    
    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }
      
    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    /*
    * the functions for our button
    */
    previousButton() {
        let currentStep = this.state.currentStep;
        if(currentStep !==1){
            return (
                <button 
                    className="btn btn-secondary navigation-btn" 
                    type="button" onClick={this._prev}>
                Previous
                </button>
            )
        }
        return null;
    }

    nextButton(){
        let currentStep = this.state.currentStep;
        if(currentStep <3){
            return (
                <button 
                    className="btn btn-primary float-right navigation-btn" 
                    type="button" onClick={this._next}>
                    Next
                </button>        
            )
        }
        return null;
    }

    submitButton(){
        let currentStep = this.state.currentStep;
        if(currentStep === 3){
            return (
                <button className="btn btn-success btn-block float-right navigation-btn">Submit</button>       
            )
        }
        return null;
    }
  
    render() {
        var currentStep = this.state.currentStep;
        return (
            <div className="form-input">
                <Fragment>
                <p className="form-header">{this.state.pageTitle[this.state.currentStep - 1]} </p> 

                <form className="form-body" onSubmit={this.handleSubmit}>
                    {(currentStep === 1) && 
                        <AboutSection
                            handleChange={this.handleAboutSectionChange}
                            data={this.state.aboutData}
                        />
                    }
                    {(currentStep === 2) && 
                        <MultipleChoiceSection
                            handleChange={this.handleMultipleSectionChange}
                            data={this.state.multipleChoiceData}
                        />
                    }
                    {(currentStep === 3) && 
                        <DepositFormSection
                            currentStep={this.state.currentStep} 
                            handleChange={this.handleChange}
                            password={this.state.password}
                        />
                    }
                    <div className="page-nav-buttons">
                        {this.previousButton()}
                        {this.nextButton()}
                        {this.submitButton()}
                    </div>
                </form>
                </Fragment>
            </div>
        );
    }
}


export { FormInputLayout };
