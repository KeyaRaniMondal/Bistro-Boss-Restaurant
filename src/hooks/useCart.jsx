import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () => {
            if (!user?.email) return []; 
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        },
        enabled: !!user?.email,
    });
    return [cart, refetch];
};
export default useCart;
