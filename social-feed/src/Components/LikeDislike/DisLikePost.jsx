import React, { useState } from "react";
import GreyLikeImage from "./Images/GreyThumbUp.png";
import GreenLikeImage from "./Images/GreenThumbUp.png";
import GreyDisLikeImage from "./Images/GreyThumbDown.png";
import RedDisLikeImage from "./Images/RedThumbDown.png";

const DisLikePost = ({ dislikedPostProperty, likedPostProperty }) => {
    const [userLike, setUserLike] = useState(likedPostProperty);
    const [userDisLike, setUserDisLike] = useState(dislikedPostProperty);
    const [likedImage, setLikedImage] = useState(GreyLikeImage);
    const [disLikedImage, setDisLikedImage] = useState(GreyDisLikeImage);

    function disLikedClick(event) {
        event.preventDefault();
        switch (userDisLike) {
            case true:
                setDisLikedImage(GreyDisLikeImage);
                setUserDisLike(false);
                break;
            case false:
                setDisLikedImage(RedDisLikeImage);
                setLikedImage(GreyLikeImage);
                setUserDisLike(true);
                break;
        }
        console.log(
            `isLiked property: ${likedPostProperty} isDisLiked property: ${dislikedPostProperty} `
        );
    }

    return (
        <img
            style={{ height: "30px", paddingLeft: "10px" }}
            src={disLikedImage}
            alt="DisLikePost"
            onClick={(event) => disLikedClick(event, userDisLike)}
        />
    );
};

export default DisLikePost;
