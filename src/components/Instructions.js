import React from 'react';
import {connect} from "react-redux";
import {expandInstructions, collapseInstructions} from "../actions/settings";



 const Instructions = props => {
     const {instructionsExpanded, expandInstructions, collapseInstructions} = props;
     if (instructionsExpanded) {
         return (
             <div>
                 <h3>♥♣Instructions♠♦</h3>
                 {
                     expandInstructions ? (
                         <div>
                             <p>Welcome to evens or odds. </p>
                             <p>......then you win the game</p>
                             <br/>
                             <h3>Finished Learning?</h3>
                             <button onClick={collapseInstructions}>Go Back</button>
                         </div>
                     ) : (
                         <div>
                             <h3> Need Help?</h3>
                             <br/>
                             <button onClick={expandInstructions}>Read Me</button>
                         </div>
                     )}
             </div>
         )}}

     export default connect(
         state => ({instructionsExpanded: state.instructionsExpanded}),
         {expandInstructions, collapseInstructions})
  (Instructions);

