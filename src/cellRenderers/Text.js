import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Text extends React.Component {
    render() {
        return (
            <div>
                {this.props.value.text}
            </div>
        );
    }
}

Text.propTypes = {
    value: PropTypes.shape({
        text: PropTypes.string,
    })
};

export default connect()(Text);
