import { createContext ,useState,useEffect} from "react";
import { baseUrl } from "../BaseUrl";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [page,setPage]=useState(1);
    const [post,setPosts]=useState([]);
    const [totalPages,setTotalPages]=useState(null);
    const [likes, setLikes] = useState([]);
    const navigate = useNavigate();


    let url=baseUrl;
    

    async function fetchApidata(page=1, tagsID=null,categoriesID=null){
        url=`${baseUrl}?page=${page}`
        if(tagsID){
            url+=`&tag=${tagsID}`;
        }
        if(categoriesID){
            url+=`&category=${categoriesID}`;
        }
        try{
            const fetchData=await fetch(url);
            const data=await fetchData.json();
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            setPage(data.page);

            
            // console.log(data);

        }
        catch(err){
            console.log(err);
        }
    }

    function tooglePostsHandler(value){
        setPage(value);
        navigate({search:`?page=${value}`});
    }
    

    let obj={
        page,
        setPage,
        post,
        setPosts,
        fetchApidata,
        totalPages,
        tooglePostsHandler,
        likes, 
        setLikes
    }
    
    return(
        <AppContext.Provider value={obj}>
            {children}
        </AppContext.Provider>
    )
}
