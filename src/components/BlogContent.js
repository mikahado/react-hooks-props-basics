import React from "react";

function BlogContent(props) {
  console.log(props);

  if(!props.isPublished){
    return null
  } else {
    return (
    <div>
      <h1>{props.articleText}</h1>
      <p>{props.minutesToRead} minutes to read the thing ok?</p>
    </div>
  )}

  // return <div id="blog-content">{props.articleText}</div>;
}

export default BlogContent;
