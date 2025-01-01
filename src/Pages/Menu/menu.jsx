import { Helmet } from "react-helmet-async"
import Cover from "../../shared/cover/cover"
import menuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from "../Home/popularmenu/popularMenu"
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    )
}
export default Menu