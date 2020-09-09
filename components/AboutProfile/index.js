import { Media } from 'reactstrap';

export default function AboutProfile({
  userName,
  userDescription,
  userImg
}) {
    return (
        <div className="my-5">
          <Media>
            <Media left href="#">
              <img src={userImg} alt="..." />
            </Media>
            <Media body>
                <Media heading>
                About {userName}
                </Media>
                {userDescription}
            </Media>
          </Media>
        </div>
    )
}