import styles from'../../styles/profile.module.scss'

export default function Review({
    userName,
    loveReactions,
    likeReactions,
    dislikeReactions,
    angryReactions,
    featureFan
}) {
    return (
        <div className={`${styles.card_profile} card px-3 py-3 my-3`}>
            <div>
                <h5 className="font-weight-bold">People reacts {userName}'s activities</h5>
            </div>
            <div className="d-flex justify-content-between my-4">
                <div className="d-flex">
                    <div className="mr-1">
                        <img src="./img/profile/love-reaction.svg" />
                    </div>
                    <div className="ml-1">
                      <p className="font-weight-bold text-primary mb-0">{loveReactions}</p>
                      <p className="font-weight-bold">Love</p>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="mr-1">
                        <img src="./img/profile/like-reaction.svg" />
                    </div>
                    <div className="ml-1">
                      <p className="font-weight-bold text-primary mb-0">{likeReactions}</p>
                      <p className="font-weight-bold">Like</p>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="mr-1">
                        <img src="./img/profile/dislike-reaction.svg" />
                    </div>
                    <div className="ml-1">
                      <p className="font-weight-bold text-primary mb-0">{dislikeReactions}</p>
                      <p className="font-weight-bold">Dislike</p>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="mr-1">
                        <img src="./img/profile/angry-reaction.svg" />
                    </div>
                    <div className="ml-1">
                      <p className="font-weight-bold text-primary mb-0">{angryReactions}</p>
                      <p className="font-weight-bold">Angry</p>
                    </div>
                </div>
            </div>
            <div className="d-none d-md-block">
                <div>
                    <h5 className="font-weight-bold">Featured Fan</h5>
                </div>
                <div className={`${styles.feature_fan_border} d-flex mx-5 my-3 p-3`}>
                <div className="ml-1 mr-3">
                <img src="./img/profile/feature-fan-img.svg" alt="..." className="img-fluid" />
                </div>
                <div>
                        <h6 className="font-weight-bold">{featureFan}</h6>
                        <div className="d-flex">
                            <div className="d-flex mr-3">
                                <div>
                                    <img src="./img/profile/love-reaction.svg" width="25" />
                                </div>
                                <div className="ml-1">
                                <p className="font-weight-bold text-primary mb-0">{loveReactions}</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <img src="./img/profile/like-reaction.svg" width="25" />
                                </div>
                                <div className="ml-1">
                                <p className="font-weight-bold text-primary mb-0">{likeReactions}</p>
                                </div>
                            </div>    
                        </div>     
                </div> 
                </div>
                <div>
                    <h5 className="font-weight-bold mb-4">Followers</h5>
                </div>
                <div className="d-flex">
                    <div>
                        <img src="./img/profile/followers-followings.svg" alt="..." className="img-fluid mr-5" />
                    </div>
                    <div>
                        <p><span className="font-weight-bold">Tom White, Siya Morris, Saira Shea</span> and 117 friends follows Emma Fischer.</p>
                    </div>
                </div>
                <div>
                    <h5 className="font-weight-bold mb-4">Followings</h5>
                </div>
                <div className="d-flex">
                    <div>
                        <img src="./img/profile/followers-followings.svg" alt="..." className="img-fluid mr-5" />
                    </div>
                    <div>
                        <p><span className="font-weight-bold">Tom White, Siya Morris, Saira Shea</span> and 117 friends follows Emma Fischer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
