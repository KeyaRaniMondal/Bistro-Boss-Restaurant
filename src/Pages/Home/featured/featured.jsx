import SectionTitle from "../../../components/sectionTitle/sectionTitle"
import featured from '../../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
    return (
        <div className="featured-items bg-fixed text-white pt-10 my-10">
            <SectionTitle
                subheading="check it Out"
                heading="Featured Items"
            ></SectionTitle>
            <div className="md:flex bg-slate-500 bg-opacity-40 justify-center items-center py-8 px-16">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20,2029</p>
                    <p className="uppercase">Where can I get some money?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, alias praesentium. Blanditiis itaque nostrum autem, voluptatibus ullam amet. Impedit porro fuga dolores vel nostrum? Ab explicabo similique quibusdam quia totam.</p>
                    <button className="btn btn-outline">Read more</button>
                </div>
            </div>

        </div>
    )
}
export default Featured