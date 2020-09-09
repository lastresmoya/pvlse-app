import Review from './review'

export default function Reviews() {
    return (
        <div>
            <div>
              <div>
                <h3 className="font-weight-bold">Reviews</h3>
              </div>
            </div>
            <div className="d-flex my-4">
              <div className="mx-2">
                  <Review
                  reviewerImg="./img/profile/review-img.svg"
                  reviewerName="Adriana Hale"
                  reviewerActivity="Yoga for begginers"
                  reviewerReaction="./img/profile/review-icon.svg"
                  reviewerComments="Emma’s yoga sessions are a must have for people who are trying to reach a peace of mind, I’ve been taking them for a year now"
                  />
                </div>
                <div className="mx-2">
                  <Review
                    reviewerImg="./img/profile/review-img.svg"
                    reviewerName="Adriana Hale"
                    reviewerActivity="Yoga for begginers"
                    reviewerReaction="./img/profile/review-icon.svg"
                    reviewerComments="Emma’s yoga sessions are a must have for people who are trying to reach a peace of mind, I’ve been taking them for a year now"
                  />
                </div>
            </div>
            <div className="d-flex my-4">
              <div className="mx-2">
                  <Review
                  reviewerImg="./img/profile/review-img.svg"
                  reviewerName="Adriana Hale"
                  reviewerActivity="Yoga for begginers"
                  reviewerReaction="./img/profile/review-icon.svg"
                  reviewerComments="Emma’s yoga sessions are a must have for people who are trying to reach a peace of mind, I’ve been taking them for a year now"
                  />
                </div>
                <div className="mx-2">
                  <Review
                    reviewerImg="./img/profile/review-img.svg"
                    reviewerName="Adriana Hale"
                    reviewerActivity="Yoga for begginers"
                    reviewerReaction="./img/profile/review-icon.svg"
                    reviewerComments="Emma’s yoga sessions are a must have for people who are trying to reach a peace of mind, I’ve been taking them for a year now"
                  />
                </div>
            </div>
          </div>
    )
}
