import React from "react";

function Article({props}) {
    
    // console.log(props.posts)
    const articleElement = props.posts.map(prop => (
        <article key={prop.id}>
            <h3>
                {prop.title}
            </h3>
            <small>
                {prop.date}
            </small>
            <p>
                {prop.preview}
            </p>
        </article>
    ))
    
    return (<div>
        { articleElement }
    </div>
    )
}

export default Article