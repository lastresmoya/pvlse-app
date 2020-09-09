import CardPvlse from '../Card'

export default function UpcomingActivites() {
    return (
         <div>
            <div>
              <div>
                <h3 className="font-weight-bold"><span className="text-primary">Upcoming</span> Activities</h3>
              </div>
            </div>
            <div className="d-flex my-4">
              <div className="mx-4">
                  <CardPvlse
                    img="./img/profile/yoga-activity.png"
                    title="Yoga for beginners"
                    category="Sports & Fitness"
                    categoryColor="#63C378"
                    price="25"
                    hostPic="https://via.placeholder.com/150"
                    hostName="Emma Fischer"
                  />
                </div>
                <div className="mx-4">
                  <CardPvlse
                    img="./img/profile/dance-activity.png"
                    title="Yoga for beginners"
                    category="Sports & Fitness"
                    categoryColor="#63C378"
                    price="25"
                    hostPic="https://via.placeholder.com/150"
                    hostName="Emma Fischer"
                  />
                </div>
            </div>
          </div>
    )
}