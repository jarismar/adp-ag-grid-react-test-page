import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';

class Grid extends React.Component {
    render() {
        const gridStyle = {
            height: '700px'
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
                    enableRangeSelection="true"
                    rowSelection="single"
                />
            </div>
        );
    }
}

Grid.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
};

export default connect()(Grid);
