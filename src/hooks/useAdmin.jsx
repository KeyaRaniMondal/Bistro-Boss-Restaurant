import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useEffect, useState } from "react";

const useAdmin = () => {
    const { user } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (user?.email) {
            axiosSecure
                .get(`/users/admin/${user.email}`)
                .then(res => {
                    setIsAdmin(res.data.isAdmin);
                    setIsAdminLoading(false);
                })
                .catch(err => {
                    console.error('Error checking admin status:', err);
                    setIsAdmin(false);
                    setIsAdminLoading(false);
                });
        } else {
            setIsAdmin(false);
            setIsAdminLoading(false);
        }
    }, [user, axiosSecure]);

    return [isAdmin, isAdminLoading];
};

export default useAdmin;