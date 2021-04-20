import { useHistory, useParams } from "react-router";
import useFetch from "../../useFetch";
import Comment from "../Blog/comment";

const BlogDetails = () => {

    const {id} = useParams();
    const {data : blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+ id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method : 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            
            { isPending && <div>Loading....</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title}</h2>
                    <p style={{fontWeight: "bold", fontSize:"1.2rem"}}>Written by { blog.author}</p>
                    <div style={{fontWeight: "bold", fontSize:"1rem"}}>{ blog.body }</div>
                    <button onClick ={handleClick}>Delete Blog</button>
                    <Comment />
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;