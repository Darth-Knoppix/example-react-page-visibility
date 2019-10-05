import React from "react";

export default function Info() {
  return (
    <header>
      <h1 className="title">Page Visibility API with React</h1>
      <p>See some ways to use the Page Visibility API using React JS.</p>
      <h4>How is the API being used in this example?</h4>
      <p>There are a couple of things you may notice:</p>
      <ol>
        <li>
          The counters at the bottom of the page increment unless you switch
          tabs.
        </li>
        <li>
          The page title in the tab changes to "inactive" when you switch tabs.
        </li>
      </ol>

      <h4>More resources</h4>
      <ul>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API">
            Check out MDN for more details
          </a>
        </li>
      </ul>
    </header>
  );
}
