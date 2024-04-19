import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSkills = () => {
    const axiosPublic = useAxiosPublic()
    const { data: skill = [],  refetch} = useQuery({
        queryKey: ['skill'],
        queryFn: async () => {
            const res = await axiosPublic.get('/skills')
            return res.data
        }
    })
    return [skill, refetch]
};

export default useSkills;