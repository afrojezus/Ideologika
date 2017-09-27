import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default
        ReactDOM.render(
            <NextApp />,
            document.getElementById('root')
        )
    })
}
