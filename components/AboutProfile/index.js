import { Media } from 'reactstrap';

export default function AboutProfile({
  userName,
  userDescription,
  userDescriptionShort,
  userImg
}) {
    return (
        <div className="my-5">
          <Media>
            <Media left href="#" className="mr-3">
              <img src={userImg} alt="..." />
            </Media>
            <Media body>
                <Media heading className="font-weight-bold">
                About {userName}
                </Media>
                <div className="d-none d-md-block">
                  {userDescription}
                </div>
                <div className="d-md-none">
                {userDescriptionShort}
                <a href="" className="text-primary font-weight-bold"><u>view more</u></a>
                </div>
            </Media>
          </Media>
        </div>
    )
}