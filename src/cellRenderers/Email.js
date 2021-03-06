import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Email extends React.Component {
    render() {
        return (
            <div>
                {this.props.value.email}
            </div>
        );
    }
}

Email.propTypes = {
    value: PropTypes.shape({
        email: PropTypes.string,
    })
};

export default connect()(Email);
