import MenuItems from "../../../shared/MenuItem/menuItem"

const MenuCategory=({items})=>{
    return(
        <div>
<div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
        </div>
    )
}
export default MenuCategory