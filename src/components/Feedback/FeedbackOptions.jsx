import PropTypes from "prop-types";
import {Button} from './Feedback.styled'


const FeedbackOptions = ({ options, onLeaveFeedback }) => (
        <div>{
            options.map(option => {
                return (
                    <Button option = {option} key={option} type="button" onClick={() => onLeaveFeedback(option)}>{option}</Button> 
                )
            })
        }  
        </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    option: PropTypes.arrayOf(PropTypes.shape({
        option: PropTypes.string.isRequired,
    })),
    onLeaveFeedback: PropTypes.func.isRequired,
};