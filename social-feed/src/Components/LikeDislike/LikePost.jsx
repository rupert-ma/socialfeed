import React, { useState } from "react";
import GreyLikeImage from "./Images/GreyThumbUp.png";
import GreenLikeImage from "./Images/GreenThumbUp.png";
import GreyDisLikeImage from "./Images/GreyThumbDown.png";
import RedDisLikeImage from "./Images/RedThumbDown.png";

const LikePost = ({ likedPostProperty, dislikedPostProperty }) => {
    const [userLike, setUserLike] = useState(likedPostProperty);
    const [userDisLike, setUserDisLike] = useState(dislikedPostProperty);
    const [likedImage, setLikedImage] = useState(GreyLikeImage);
    const [disLikedImage, setDisLikedImage] = useState(GreyDisLikeImage);

    function likedClick(event) {
        event.preventDefault();
        switch (userLike) {
            case true:
                setLikedImage(GreyLikeImage);
                setUserLike(false);
                break;

            case false:
                setLikedImage(GreenLikeImage);
                setDisLikedImage(GreyDisLikeImage);
                setUserLike(true);
                break;
        }
        console.log(
            `isLiked property: ${likedPostProperty} isDisLiked property: ${dislikedPostProperty} `
        );
    }

    return (
            <img
                style={{ height: "30px", paddingLeft: "10px" }}
                src={likedImage}
                alt="LikePost"
                onClick={(event) => likedClick(event, userLike)}
            />
    );
};

export default LikePost;
