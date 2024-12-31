import Banner from "./Banner/banner"
import Catagory from "./catagory/catagory"
import PopularMenu from "./popularmenu/popularMenu"

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Catagory></Catagory>
           <PopularMenu></PopularMenu>
        </div>
    )
}
export default Home