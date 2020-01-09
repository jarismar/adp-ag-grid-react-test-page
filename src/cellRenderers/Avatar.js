import React from 'react';
import PropTypes from 'prop-types';

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

export default Avatar;
