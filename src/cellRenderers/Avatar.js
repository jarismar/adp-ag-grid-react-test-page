import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Avatar extends React.Component {
    render() {
        return (
            <div>
                {this.props.value.name}
            </div>
        );
    }
}

Avatar.propTypes = {
    value: PropTypes.shape({
        name: PropTypes.string,
    })
};

export default connect()(Avatar);
