import { useState } from "react";
import { useHistory, useParams } from "react-router";
import useFetch from "./../../../src/useFetch";

const Comment = (props) => {

    const {id} = useParams();
    const {data : blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+ id);
    const history = useHistory();

    const [comment, setComment] = useState(null);
    //const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        
        const comm = {comment};
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method : 'POST',
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(comm)
        }).then(() => {
            setComment(comm);
            console.log('new comment added',comm);
            // setIsPending(false);
            e.preventDefault();
            // history.push('/');
        })
    }


    return ( 
        <div className="comment">
           <form onSubmit ={handleSubmit}>                 
                <label>Your Comment:</label>
                    <textarea
                        required
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        
                    ></textarea>                
                { !isPending  &&<button>Post Your Comment</button>}
                { isPending && <button disabled>Processing.....</button>}
                {JSON.stringify(props)};      
      </form>
        </div>

    
     );
}
 
export default Comment;
