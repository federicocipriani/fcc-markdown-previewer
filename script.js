marked.setOptions({
    renderer: new marked.Renderer(),
    breaks: true,
    gfm: true
});

var defaultText = 
`# Header
## Subheader
### Paragraph  

\`<span></span>\`
\`\`\`
// This is a multiline code
function hello() {
    console.log("Hello World!");
}
\`\`\`
**Bold Text**

Markdown in lists:
* List 1 
  - Sub-list 1
    - Sub-sub-list 1
- List 2

It is possible to have [links](https://www.freecodecamp.com)

But also nice block quotes
> Block Quotes

It is possible to display an image

![JS Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png)
`;

document.getElementById('editor').innerHTML = defaultText;
document.getElementById('preview').innerHTML = marked(defaultText);

function sync() {
    var text = document.getElementById('editor').value;
    document.getElementById('preview').innerHTML = marked(text);
}