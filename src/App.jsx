import {useCreatePostMutation} from "./store/postAPI.js";
import {useEffect} from "react";

function App() {

    const [createPost, {isLoading}] = useCreatePostMutation();

    useEffect(() => {
        setTimeout(() => {
            createPost();
        }, 1000)
    }, [])
    return (
        <>
            <div>Hello World {isLoading + ''}</div>
        </>
    )

}

export default App;
