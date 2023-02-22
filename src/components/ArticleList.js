import React from "react";
import Article from "./Article";


function ArticleList({posts}){
    const articlePost=posts.map((posts) => {
        return(
        <Article 
        key={posts.id} 
        title={posts.title} 
        date={posts.date} 
        preview={posts.preview} 
        minutes={posts.minutes}/>
        )})
    return(
        <main>
            {articlePost}
        </main>
    
    )
}

export default ArticleList;