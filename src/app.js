import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import gridColumns from './util/columns';
import gridRowData from './util/data';
import Grid from './containers/Grid'

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <div className="app-container">
                <Grid
                    columns={gridColumns}
                    data={gridRowData}
                />
            </div>
        </Provider>,
        document.querySelector('[data-js="main"]'),
    );
}

render();
