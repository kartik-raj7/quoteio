import React, { useEffect } from "react";

function User(props) {
  const vars = props.quote.author
  console.log(vars)
  useEffect(() => {
    window.location.href = "https://en.wikipedia.org/wiki/+vars";
  }, []);

  return (
    <div>
      <h2>{props.quote.author}</h2>
    </div>
  );
}
export default User;