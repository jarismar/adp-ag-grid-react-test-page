import React from 'react';
import PropTypes from 'prop-types';

class MaritalStatus extends React.Component {
    render() {
        return (
            <div>
                {this.props.value.maritalStatus}
            </div>
        );
    }
}

MaritalStatus.propTypes = {
    value: PropTypes.shape({
        maritalStatus: PropTypes.string,
    })
};

export default MaritalStatus;
