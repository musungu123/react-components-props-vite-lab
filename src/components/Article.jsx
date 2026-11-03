import { React } from "react";

function Article({title, date, preview}) {
    return(
        <aticle>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}





export default Article