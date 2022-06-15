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
    }

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
        <div>
            <img
                style={{ height: "20px", paddingLeft: "10px" }}
                src={likedImage}
                alt="LikePost"
                onClick={likedClick}
            />
            <img
                style={{ height: "20px", paddingLeft: "10px" }}
                src={disLikedImage}
                alt="DisLikePost"
                onClick={disLikedClick}
            />
        </div>
    );
};

export default LikePost;
