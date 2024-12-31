import { useEffect, useState } from "react"
import SectionTitle from "../../../components/sectionTitle/sectionTitle"
import MenuItems from "../../../shared/MenuItem/menuItem"

const PopularMenu=()=>{

    const[menu,setMenu]=useState([])
    useEffect(()=>{
fetch('menu.json')
.then(res=>res.json())
.then(data=>{
    const popularItems=data.filter(item=>item.category==='popular');
    setMenu(popularItems)})
    },[])

    return(
        <div>
<SectionTitle 
heading="From our Menu"
subheading="Popular Items"
>

</SectionTitle>
<div className="grid grid-cols-2 gap-4">
    {
        menu.map(item=><MenuItems key={item._id} item={item}></MenuItems>)
    }
</div>
        </div>
    )
}
export default PopularMenu