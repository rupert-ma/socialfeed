import React, { useState } from "react";
import GreyLikeImage from "./Images/GreyThumbUp.png";
import GreenLikeImage from "./Images/GreenThumbUp.png";
import GreyDisLikeImage from "./Images/GreyThumbDown.png";
import RedDisLikeImage from "./Images/RedThumbDown.png";

const DisLikePost = ({ dislikedPostProperty }) => {
    const [userLike, setUserLike] = useState(false);
    const [userDisLike, setUserDisLike] = useState(false);
    const [likedImage, setLikedImage] = useState(GreyLikeImage);
    const [disLikedImage, setDisLikedImage] = useState(GreyDisLikeImage);

    console.log(`isDisLiked property: ${dislikedPostProperty} ` );

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
    }

    return (
            <img
                style={{ height: "20px", paddingLeft: "10px" }}
                src={disLikedImage}
                alt="DisLikePost"
                onClick={(event)=>disLikedClick(event,userDisLike)}
            />
    );
};

export default DisLikePost;
