import React from "react";
import PropTypes from "prop-types";
import { Text } from "./Feedback/Feedback.styled";



const Notification = ({message}) => (
        <>
            {<Text>{message}</Text>}  
        </>
);

export default Notification;



Notification.propTypes = {
    title: PropTypes.string,
};