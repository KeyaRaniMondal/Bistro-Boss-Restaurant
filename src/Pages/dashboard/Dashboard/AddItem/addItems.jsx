import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from '../../../../hooks/useAxiosSecure'

const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic=useAxiosPublic()
    const axiosSecure=useAxiosSecure()
    const [data, setData] = useState("");
    const onSubmit=async(data)=>{
        console.log(data)
        const imageFile={image: data.image[0]}
        const res=await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        if(res.data.success){
            const menuItem={
                name:data.name,
                category:data.category,
                image:res.data.data.display_url
            }
            const menuRes=await axiosSecure.post('/menu',menuItem)
            console.log(menuRes.data)
            if(menuRes.data.insertedId)
            {
                
            }
        }
        console.log(res.data)
    }
    return (
        <div>
            <h2 className="text-xl">Add Items</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
            {/* <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}> */}

                <input {...register("foodName")} placeholder="Food name" />
                <select {...register("category", { required: true })}>
                    <option value="">Select...</option>
                    <option value="salad">salad</option>
                    <option value="pizza">Pizza</option>
                </select>
                <textarea {...register("aboutYou")} placeholder="About you" />
                <p>{data}</p>
                <input {...register("image")} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                <input type="submit" />
            </form>
        </div>
    )
}
export default AddItem