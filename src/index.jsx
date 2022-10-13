// import React from 'React';
// import * as ReactDOM from 'react-dom';

import './index.scss';

class Portfolio extends React.Component {
    render() {
        return (
            <div className='portfolio'>
                <div>Good morning</div>
            </div>
        );
    }
}

//Finds the root of the app
const container = document.getElementsByClassName('app-container')[0];

//Tells React to render your app in the root DOM element 
ReactDOM.render(React.createElement(Portfolio), container); 