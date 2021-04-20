import React from "react";
import BlogList from './Blog/BlogList';
import useFetch from '../useFetch';

const Home = () => {
  const { data : blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
   
  return(
  <div className="home">
            {error && <div>{error}</div>}
            { isPending && <div>Loading....</div>}
           {blogs &&<BlogList blogs = {blogs} title ="All Blogs..." style ={{color:"White"}}/>}
           {blogs &&<BlogList blogs = {blogs.filter((blog) => blog.author === 'Kazama')} title = "Web-Dev!"/>}
           {blogs &&<BlogList blogs = {blogs.filter((blog) => blog.author === 'Massao')} title = "Android!"/>}
           {blogs &&<BlogList blogs = {blogs.filter((blog) => blog.author === 'Roushan')} title = "Java!"/>}
           {blogs &&<BlogList blogs = {blogs.filter((blog) => blog.author === 'Elon Musk')} title = "BlockChain!"/>}
           {blogs &&<BlogList blogs = {blogs.filter((blog) => blog.author === 'Isha')} title = "Laravel!"/>}
           {blogs &&<BlogList blogs = {blogs.filter((blog) => blog.author === 'Pallavi')} title = "MERN Stack!"/>}
           </div>


          
  )
  
}

export default Home;
/* 
<Card cover =

{error && <div>{error}</div>}
            { isPending && <div>Loading....</div>}
           {blogs &&<BlogList blogs = {blogs} title = "All Blogs!" />}
           {blogs &&<BlogList blogs = {blogs.filter((blog) => blog.author === 'Kazama')} title = "Kaxama Blogs!"/>}
           >
        <Card/>









*/

