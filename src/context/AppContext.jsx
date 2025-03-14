import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import toast from "react-hot-toast";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchBlog(page = 1) { 
        setLoading(true);
        let url = `${baseUrl}?page=${page}`; 
        try {
            const result = await fetch(url);
            const data = await result.json();


            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        } catch (error) {
            toast.error("Error in fetching data: Check your network");
        }

        setLoading(false);
    }

    function handlePageChange(page) {
        setPage(page);
        fetchBlog(page); 
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchBlog
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
