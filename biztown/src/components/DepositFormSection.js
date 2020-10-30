import React, { Component } from "react";
import { RegisterSlip } from "./RegisterSlip.js";
import { DepositForm } from "./DepositForm.js";
import { CheckSlip } from "./CheckSlip.js";
import '../App.css';
import '../checkInput.css';

class DepositFormSection extends Component {
    render () {
        return (
            <div>
                <h3>Program Content Questions</h3>

                <p>11 - 13. Read the following information and complete the deposit ticket. <b>(3 points)</b></p>
                <p>Mark Hill received his $62 paycheck. He’s going to a movie tonight, so he wants to get $20 cash when he makes his deposit at the bank.</p>
                <DepositForm />
                <p>14 - 16. Read the following information and complete the deposit ticket. <b>(3 points)</b></p>
                <p>On March 14, James Dunn went shopping at the mall with his friends. He used his debit card to buy a new hat from Journeys for $5.00. He also bought a gift for his mom at Macy’s. The check he wrote was for $3.75.</p>
                <CheckSlip />
                <p>17 - 22. Use the information from the check above. to complete the two register entries. <b>(6 points)</b></p>
                <RegisterSlip />
            </div>
        );
    }
}

export { DepositFormSection };