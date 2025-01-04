import useCart from "../../../../hooks/useCart"

const Cart=()=>{
    const [cart]=useCart()
    return(
<div>
<div>
    <h2 className="text-xl">
        items:{cart.length}
    </h2>
</div>
</div>
    )
}
export default Cart