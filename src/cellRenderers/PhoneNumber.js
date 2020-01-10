import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class PhoneNumber extends React.Component {
    render() {
        return (
            <div>
                {this.props.value.number}
            </div>
        );
    }
}

PhoneNumber.propTypes = {
    value: PropTypes.shape({
        countryCode: PropTypes.string,
        number: PropTypes.string,
    })
};

export default connect()(PhoneNumber);
