import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div className='answer'>
           <div>
                <h3>How react works:</h3>
                <p>React is a JavaScript for building user interface.React is open source,components based front-end library for building the user interface.When the data of a website is changed,react efficiently update and render the reght component.Many component is created is a react application and the component is reusable.When the data of a website needs to chage or update then if we change the DOM data.The DOM is very slow and this is a difficult process.On the other hands,React efficiently update and ernder the right data or component,when your data is changed.On the Process React create a virtual dom.And compare with the virtual DOM and Actual DOM.Then react understand where data is changed and accroding the change react change the actual DoM.So this process is so efficient</p>
           </div>
           <div>
               <h3>What is the different between props and state:</h3>
               <p>
                   In react props and state used to control data into a component.
                   The state of a component is an object that holds some information that change.And state generally update eventHandler.It use class component and functional component with hooks.
                   Props are immutable and read only.props use to sent data from parent component to a child component.If you want to change props you can do from parent component and pass it to child component.
               </p>
           </div>
        </div>
    );
};

export default Answer;