import PropTypes from 'prop-types';

export default function Contact(props){
    return (
        <div>
        <h2>{props.email}{props.phon} </h2>
        <p>Send me a message</p>
        </div>
    );
}

Contact.propTypes = {
    email: PropTypes.string.isRequire,
    phone : PropTypes.string.isRequire
};