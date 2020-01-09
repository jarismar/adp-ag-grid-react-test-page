import React from 'react';
import ReactDOM from 'react-dom';
import gridColumns from './util/columns';
import gridRowData from './util/data';
import Grid from './containers/Grid'

function render() {
    ReactDOM.render(
        <div className="app-container">
            <Grid
                columns={gridColumns}
                data={gridRowData}
            />
        </div>,
        document.querySelector('[data-js="main"]'),
    );
}

render();
