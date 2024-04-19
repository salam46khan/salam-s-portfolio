import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useResume = () => {
    const axiosPublic = useAxiosPublic()
    const {data: resume = [], refetch} = useQuery({
        queryKey: ['resume'],
        queryFn: async () => {
            const res = await axiosPublic.get('/resume')
            return res.data
        }
    })
    return [resume, refetch]
};

export default useResume;