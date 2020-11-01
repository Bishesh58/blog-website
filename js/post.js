const API = "http://localhost:5000/api/posts/";
const BASE_URL ="http://localhost:5000/";

window.onload =()=>{
    getPosts()
    getPostIdParams();
}
  
const getPostIdParams =()=>{
   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   return urlParams.get("id");
}
const getPosts =()=>{
    const postId = getPostIdParams();
    const url = `${API}${postId}`
    fetch(url, {
        method:'GET'
    })
    .then((response) =>{
        return response.json();
    })
    .then((data)=>{
        showContentPosts(data)
    })
}

const showContentPosts =(data)=>{
   
    const postImage = `${BASE_URL}${data.post_image}`;
    const postDate = new Date(parseInt(data.added_date)).toDateString();

    document.querySelector('header').style.backgroundImage = `url(${postImage})`
    document.getElementById("individual-post-title").innerHTML = data.title;
    document.getElementById("individual-post-content").innerHTML = data.content;
    document.getElementById("individual-post-date").innerHTML = `Published on ${postDate}`;
    
}