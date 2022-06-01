/* import {useState, useEffect} from "react"
import { BACK_URL_API } from "../../variables"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeSelectpostCommentCount } from "../../containers/PostShowInfo/selectors";
import { requestPostCommentCount } from "../../containers/PostShowInfo/actions";


const showInfoState = createStructuredSelector({
    postCommentCount: makeSelectpostCommentCount(),
  });


const LazyComment = () => {

    const dispatch = useDispatch();
    const {postCommentCount} = useSelector(showInfoState)
    const [comments, setComments] = useState([] as any)
    const [commentsCount, setCommentsCount] = useState(0)
    const [seensCommentIds, setseensCommentIds] = useState([] as string[])
 

    useEffect(() => {
        dispatch(requestPostCommentCount('628be480233e5536f33ba7e9'))
        getCommentsCount()
        getComments()
    },[])

    const getCommentsCount = async () =>{
        if (typeof window.localStorage !== "undefined") {
            let jwt = localStorage.getItem("jwt");
            let accessToken = JSON.parse(jwt!).accessToken;
            const { data } = await axios.get(`${BACK_URL_API}/comment/getCommentCountByPostId/628be480233e5536f33ba7e9`
            ,{
                headers: {
                authorization: "Bearer " + accessToken,
                },
                });
            console.log(data)
            setCommentsCount(data)
        }
    }

    const getComments = async () =>{
        
        if (typeof window.localStorage !== "undefined") {
          let jwt = localStorage.getItem("jwt");
          let accessToken = JSON.parse(jwt!).accessToken;
          const { data } = await axios.post(`${BACK_URL_API}/comment/getCommentByPostId/628be480233e5536f33ba7e9`
           ,{ 
            "seenIds": seensCommentIds
            },{
            headers: {
              authorization: "Bearer " + accessToken,
            },
            });
          
          let seenIds: string[] = [];
          data.map((item: { _id: string; })=>{
              seenIds.push(item._id)
          })
          setseensCommentIds([...seensCommentIds, ...seenIds])
          setComments([...comments,...data]);
        }
    };

    
    return (
        <div>
            <h1>LazyComment number {postCommentCount}</h1>
            
            {comments.map((item:any,index:number)=><h3 key={index}>{item['comment']}</h3> )}
            {(seensCommentIds.length < commentsCount) && <button onClick={getComments}>View more comments</button>}
        </div>
    )
}

export default LazyComment */

export {}