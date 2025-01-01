import { Helmet } from "react-helmet-async"
import Banner from "./Banner/banner"
import Catagory from "./catagory/catagory"
import Featured from "./featured/featured"
import PopularMenu from "./popularmenu/popularMenu"
import Testimonials from "./testimonials/testimonials"

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    )
}
export default Home