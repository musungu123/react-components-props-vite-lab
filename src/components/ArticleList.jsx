import { React } from "react";
import Article from "./components/Article";
import blogData from "../data/blog";

function ArticleList({posts}) {
    return(
        <main>
            {post.map((posts) =>(
                <Article
                key={posts.id}
                title={posts.title}
                date={posts.date}
                preview={post.preview}
                />
            ))};
        </main>
    )
}

export default ArticleList;