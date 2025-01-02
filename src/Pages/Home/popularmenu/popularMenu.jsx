import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import MenuItems from "../../../shared/MenuItem/menuItem";
import UseMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu, loading] = UseMenu(); 
  const popular = menu ? menu.filter((item) => item.category === "popular") : []; 

  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <SectionTitle heading="From our Menu" subheading="Popular Items" />
      <div className="grid grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
