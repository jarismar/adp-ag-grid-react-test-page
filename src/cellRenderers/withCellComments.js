import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const withCellComments = ({ cellRendererFramework, ...renderParams }) => {
    const CellComments = class extends React.Component {
        renderCellRendererFramework() {
            if (CellComments.cellRendererFramework) {
                return <CellComments.cellRendererFramework {...this.props} />;
            }

            return "";
        }

        render() {
            // in the real system we render an anchor on
            // the cell, on clicked we show the comments
            const comments = this.props.value.comments;
            const title = comments && commments.length ? 'has comments' : '';
            return (
                <div title={title}>
                    {this.renderCellRendererFramework()}
                </div>
            );
        }
    };

    CellComments.cellRendererFramework = cellRendererFramework;
    CellComments.propTypes = {
        value: PropTypes.shape({
            comments: PropTypes.string,
        })
    };

    const connectedCellComments = connect(
        null,
        null,
        null,
        {forwardRef: true }
    )(CellComments);

    return {
        cellRendererFramework: connectedCellComments,
        ...renderParams
    }
};

export default withCellComments;
