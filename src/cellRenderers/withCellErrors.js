import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const withCellErrors = ({ cellRendererFramework, ...renderParams }) => {
    const CellErrors = class extends React.Component {
        renderCellRendererFramework() {
            if (CellErrors.cellRendererFramework) {
                return <CellErrors.cellRendererFramework {...this.props} />;
            }

            return "";
        }

        render() {
            const error = this.props.value.error;
            const title = error ? error : '';
            return (
                <div title={title}>
                    {this.renderCellRendererFramework()}
                </div>
            );
        }
    };

    CellErrors.cellRendererFramework = cellRendererFramework;
    CellErrors.propTypes = {
        value: PropTypes.shape({
            error: PropTypes.string,
        })
    };

    const connectedCellErrors = connect(
        null,
        null,
        null,
        {forwardRef: true }
    )(CellErrors);

    return {
        cellRendererFramework: connectedCellErrors,
        ...renderParams
    }
};

export default withCellErrors;
