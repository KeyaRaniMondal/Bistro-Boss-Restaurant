import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import MenuItems from "../../../shared/MenuItem/menuItem";
import UseMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu, loading] = UseMenu(); // Destructure menu and loading state
  const popular = menu ? menu.filter((item) => item.category === "popular") : []; // Fallback for undefined menu

  if (loading) {
    return <p>Loading...</p>; // Show loading state while data is being fetched
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
