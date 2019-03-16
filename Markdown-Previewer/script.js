marked.setOptions({breaks: true,});

class TextInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markdown: `# Welcome to my Markdown Previewer
## This is a subheading
[FreeCodeCamp.Org](http://www.freecodecamp.org)
![A Rose, New York's state flower](http://1.bp.blogspot.com/-nt0BZeLUtAQ/UQWLgtHQZWI/AAAAAAAAAEE/Usf1MdOEYF4/s1600/Beautiful+Red+Rose+Flowers+Pictures+16.jpg)
\` console.log('Hello, World!') \`
\`\`\`
function helloWorld() { 
  console.log('Hello, World!')
} 
\`\`\` 
* List Item 1 
* List Item 2 
> Blockquote 
**Bolded Text**`
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      markdown: event.target.value
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-6">
          <h1>Markdown</h1>
          <div className="focusArea">
        <textarea autofocus id="editor" onChange={this.handleChange} defaultValue={this.state.markdown} rows="32"></textarea>
          </div>
        </div>
        <div className="col-xs-6">
        <h1>Preview</h1>
          <div className="previewArea">
          <span id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></span>
          </div>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<TextInput />, document.querySelector('.render-target'));