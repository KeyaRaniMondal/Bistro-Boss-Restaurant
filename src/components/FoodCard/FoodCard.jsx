
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
    const {name, image, price, recipe,_id} = item;
    const {user}=useAuth()
    const axiosSecure=useAxiosSecure()
    const [,refetch]=useCart()
    const handleAddToCart=food=>{
        if(user &&user.email)
       { 
        console.log(user.email,food)
        const cartItem={
            menuId:_id,
            email:user.email,
            name,
            image,
            price
        }
        axiosSecure.post('/carts',cartItem)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId)
            {
                alert('food added to cart')
            }
        })
        refetch()
    }
    else{
        //here i need to do complete error handleing and user validation
        alert("login first")
    }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToCart} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;