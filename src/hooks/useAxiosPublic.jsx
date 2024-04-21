import axios from "axios";

const axiosPublic = axios.create({
    baseURL: ('https://salam-server.vercel.app')
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;