const MenuItems = ({ item }) => {
    const { name, image, price, recipe } = item
    return (
        <div className="flex space-x-4">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{recipe}</p>
        </div>
    )
}
export default MenuItems