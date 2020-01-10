import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Date extends React.Component {
    render() {
        return (
            <div>
                {this.props.value.date}
            </div>
        );
    }
}

Date.propTypes = {
    value: PropTypes.shape({
        date: PropTypes.string,
    })
};

export default connect()(Date);
