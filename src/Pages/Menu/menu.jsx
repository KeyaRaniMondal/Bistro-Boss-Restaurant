import { Helmet } from "react-helmet-async"
import Cover from "../../shared/cover/cover"
import menuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from "../Home/popularmenu/popularMenu"
import UseMenu from "../../hooks/useMenu"
import SectionTitle from "../../components/sectionTitle/sectionTitle"
import MenuCategory from "./menuCategory/menuCategory"
const Menu = () => {
    const [menu]=UseMenu()
    const desert = menu.filter((item) => item.category === "desert")
    const soup = menu.filter((item) => item.category === "soup")
    const salad = menu.filter((item) => item.category === "salad")
    const pizza = menu.filter((item) => item.category === "pizza")
    const offered = menu.filter((item) => item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg}></Cover>
            <SectionTitle 
            subheading="Don't miss"
            heading="Today's Offer" 
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
        </div>
    )
}
export default Menu