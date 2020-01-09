import React from 'react';
import PropTypes from 'prop-types';
import { AgGridReact } from 'ag-grid-react';

class Grid extends React.Component {
    render() {
        const gridStyle = {
            height: '600px'
        };

        const gridOptions = {
            /* debug: true, */
            defaultColDef: {
                filter: true,
                resizable: true,
                sortable: true
            }
        };

        return (
            <div className="ag-theme-fresh" style={gridStyle} >
                <AgGridReact
                    gridOptions={gridOptions}
                    columnDefs={this.props.columns}
                    rowData={this.props.data}
                    reactNext
                />
            </div>
        );
    }
}

Grid.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
};

export default Grid;
