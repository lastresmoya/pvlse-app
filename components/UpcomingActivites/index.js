import CardPvlse from '../Card'

export default function UpcomingActivites() {
    return (
         <div>
            <div>
              <div>
                <h3 className="font-weight-bold"><span className="text-primary">Upcoming</span> Activities</h3>
              </div>
            </div>
            <div className="d-flex my-4 overflow-y-mobile">
              <div className="mr-2">
                  <CardPvlse
                    img="./img/profile/yoga-activity.png"
                    title="Yoga for beginners"
                    category="Sports & Fitness"
                    categoryColor="#63C378"
                    price="25"
                    hostPic="https://via.placeholder.com/150"
                    hostName="Emma Fischer"
                    modality="Online"
                    date="22 July, 2020"
                    hour="15:00 hr"
                  />
                </div>
                <div className="ml-2">
                  <CardPvlse
                    img="./img/profile/dance-activity.png"
                    title="Yoga for beginners"
                    category="Sports & Fitness"
                    categoryColor="#63C378"
                    price="25"
                    hostPic="https://via.placeholder.com/150"
                    hostName="Emma Fischer"
                    modality="Online"
                    date="22 July, 2020"
                    hour="15:00 hr"
                  />
                </div>
            </div>
          </div>
    )
}