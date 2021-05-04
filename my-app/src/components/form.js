import React from "react";
import withComponent from "./HOC";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis feugiat vivamus at augue eget arcu. Ac odio tempor orci dapibus ultrices. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Vel pharetra vel turpis nunc eget lorem dolor sed. Metus vulputate eu scelerisque felis imperdiet proin. Mattis aliquam faucibus purus in massa. Quis ipsum suspendisse ultrices gravida dictum fusce. Pretium lectus quam id leo in vitae turpis. Dolor sit amet consectetur adipiscing. Et odio pellentesque diam volutpat commodo sed. Enim facilisis gravida neque convallis a cras semper auctor neque. Commodo ullamcorper a lacus vestibulum. Molestie at elementum eu facilisis sed.";

  function SearchForm(props) {
  return <div>
      {
          content.indexOf(props.inputText)!==-1?<h1>yaa got it!! :)</h1>:<h1>Better luck next time :(</h1>
      }
  </div>;
}

export default withComponent(SearchForm);
