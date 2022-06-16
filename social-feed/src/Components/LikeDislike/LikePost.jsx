import React, { useState } from "react";
import GreyLikeImage from "./Images/GreyThumbUp.png";
import GreenLikeImage from "./Images/GreenThumbUp.png";
import GreyDisLikeImage from "./Images/GreyThumbDown.png";
import RedDisLikeImage from "./Images/RedThumbDown.png";

const LikePost = ({ likedPostProperty }) => {
    const [userLike, setUserLike] = useState(false);
    const [userDisLike, setUserDisLike] = useState(false);
    const [likedImage, setLikedImage] = useState(GreyLikeImage);
    const [disLikedImage, setDisLikedImage] = useState(GreyDisLikeImage);

    console.log(`isLiked property: ${likedPostProperty} ` );

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

    return (
            <img
                style={{ height: "20px", paddingLeft: "10px" }}
                src={likedImage}
                alt="LikePost"
                onClick={(event)=>likedClick(event, userLike)}
            />
    );
};

export default LikePost;
