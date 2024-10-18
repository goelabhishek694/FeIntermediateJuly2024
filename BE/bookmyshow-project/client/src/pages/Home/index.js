import { useEffect, useState } from "react";
import { GetCurrentUser } from "../../calls/users"

const Home = () => {
    const [user,setUser] = useState(null);
    useEffect(() => {
        const getUser = async () => {
            let resp = await GetCurrentUser();
            console.log(resp.data);
        }
        getUser();

    },[]);
    return (
        <div>
            This is my home page
            {/* <button on}></button> */}
        </div>
    )
}

export default Home