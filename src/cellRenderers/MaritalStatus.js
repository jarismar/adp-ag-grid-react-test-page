import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

export default connect()(MaritalStatus);
