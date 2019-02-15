import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({ message }) => {
    return (
        <div className={"inline-error"}>
            { message }
        </div>
    );
};
InlineError.propTypes = {
    message: PropTypes.string.isRequired
};
InlineError.defaultProps = {
};

export default InlineError;