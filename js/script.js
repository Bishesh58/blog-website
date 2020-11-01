const API = "http://localhost:5000/api/posts";
const BASE_URL ="http://localhost:5000/";

window.onload =()=>{
    getPosts()
}
   

  


const getPosts =()=>{
    fetch(API, {
        method: 'GET'
    }).then((response) =>{
        return response.json();
    }).then(data =>{
        showPosts(data);
    })
}

const showPosts =(posts)=>{
    let blogPostContent = "";
   
   
    for(post of posts){
        const postDate = new Date(parseInt(post.added_date)).toDateString();
        const postImage = `${BASE_URL}${post.post_image}`;
        const postLink = `/html/post.html?id=${post.id}`
        

       blogPostContent+= `
                    <a class="post__link" href="${postLink}">
                        <div class="post">
                            <div class="post__image" style="background-image: url(${postImage})"></div>
                            <div class="post__content">
                                <div class="post__date">${postDate}</div>
                                <div class="post__title">${post.title}</div>
                                <div class="post__text">${post.content}</div>
                            </div>
                         </div>
                    </a> `
    }
    document.querySelector(".blog__posts").innerHTML = blogPostContent;
}