// useEffect(()=>{
//     async function getUser(){
//         try{
//             setLoading(true);
//             const resp = await fetch ("https://jsonplaceholder.typicode.com/users/1");
//             const user = await resp.json();
//             console.log(user);
//             setUser(user);
//         }
//         catch(err){
//             setError(err);
//         }
//         finally{
//             setLoading(false);
//         }
//     }
//     getUser()
// },[])

import UserSlice from "../../redux/userSlice";

const actions = UserSlice.actions;
//dispatch is provided to the middleware
export const fetchUserMiddleware = (param) =>{
    return async (dispatch) => {
        try{
            // setLoading(true);
            dispatch(actions.userLoading())
            const resp = await fetch (`https://jsonplaceholder.typicode.com/users/${param}`);
            const user = await resp.json();
            console.log(user);
            dispatch(actions.userData(user))
        }catch(err){
            dispatch(actions.userError())
        }
    }
    
}