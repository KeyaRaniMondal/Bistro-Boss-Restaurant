import Banner from "./Banner/banner"
import Catagory from "./catagory/catagory"
import Featured from "./featured/featured"
import PopularMenu from "./popularmenu/popularMenu"

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Catagory></Catagory>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
        </div>
    )
}
export default Home