var React = require('react');
var Presentation = require('react-presentation');
var Slide = Presentation.Slide;


React.render(
  <Presentation>
    <Slide>
      <h1><%- title %></h1>
      <p>This is a react presention</p>
    </Slide>
    <Slide>
      <h1>Header</h1>
      <p>Content</p>
    </Slide>
  </Presentation>
  , document.getElementById('presentation'));
