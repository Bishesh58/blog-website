const API = "http://localhost:5000/api/posts";

const submitNewPost = () =>{
    const input = document.querySelector('input[type="file"]');
    const title = document.getElementById("form-post-title").value;
    const content = document.getElementById("form-post-content").value;
 

    let data = new FormData();
    data.append("post_image", input.files[0]);
    data.append("title", title);
    data.append("content", content);


    try {
        fetch(API, {
            method:'POST',
            body: data
        }).then(()=>{
            setTimeout(() => {
                window.location.href="index.html"; 
            },1000);
           
        })
    } catch (error) {
        console.log("Error is:", error);
    }

    
}