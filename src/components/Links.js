import React from "react";

function Links({github, linkedin}) {
  return (
    <div>
      <h3>Links</h3>
    <a href={github}>https://github.com/liza</a>
    <a href={linkedin}>https://www.linkedin.com/in/liza/</a>
    </div>
  );
}

export default Links;
