import React from 'react';
import PropTypes from 'prop-types';

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

    return {
        cellRendererFramework: CellErrors,
        ...renderParams
    }
};

export default withCellErrors;
