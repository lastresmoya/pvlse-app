import CardPvlse from '../Card'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default function AllActivites() {
    return (
         <div>
            <div>
                <div>
                  <h3 className="font-weight-bold mt-5">All Activities</h3>
                </div>
                <div>
                </div>
            </div>
            <div className="d-flex my-4">
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
            <div className="d-flex my-4">
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
            <div className="d-flex justify-content-center">
                <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink href="#">
                        1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next href="#" />
                    </PaginationItem>
                </Pagination>
            </div>
        </div>
    )
}