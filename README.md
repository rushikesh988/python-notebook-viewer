# Python Notebook Viewer
Help view pynb files in browser without running jupyter notebook server. 

## File Structure

 1. **renderer.js** : Contains code to fetch text from current python notebook file opened in firefox and convert it into HTML using notebook.min.js
 2. **js/notebook.min.js**: Notebook.JS library to convert Jupyter Notebook files into HTML code. [Official Repository](https://github.com/jsvine/notebookjs)
 3. **js/prism.min.js**: One of the dependencies of Notebook JS, Prism is a lightweight, extensible syntax highlighter. Available at: [Official Repository](https://github.com/PrismJS/prism)   , [Website](https://prismjs.com/#languages)
 4. **js/marked.min.js**: Dependency of Notebook JS, Marked JS is a markdown parser and compiler. [Offical Site](https://marked.js.org/#/README.md#README.md), [Repository](https://github.com/markedjs/marked)
 5. **js/katex-auto-render.min.js**: Dependency of Notebook JS , KaTeX is a math typesetting library for the web.[Offical Site](https://katex.org/), [Repository](https://github.com/KaTeX/KaTeX)
 6. **js/katex.min.js**: Same as Above
 7. **js/es5-shim.min.js** : Dependency of Notebook JS .  [Repository](https://github.com/es-shims/es5-shim)
 8. **js/ansi_up.min.js** : Notebook JS dependency . Used to convert\ ansi sequences in strings to colorful HTML
 9. **icons/***: Directory containing all the icon images.
 10. **css/***: Directory containing CSS files required by Notebook JS and its dependency libraries.
 11. **manifest.json**: Manifest file for Firefox containing all the information about this plugin.
 

## Licence 
This code is released under Mozilla Public License.  There are multiple JS as CSS files included in this repository each with different license terms. It is advised to go through them before using for any purpose. 



## Author 
![Rushikesh's Profile Image](https://github.com/rushikesh988/RushikeshTade/blob/master/rushi_round.jpg "Profile Image") 
</br>
**Rushikesh Tade** </br>
[rushikesh988@gmail.com](mailto:rushikesh988@gmail.com) </br>
[Github Profile](https://github.com/rushikesh988) </br>
[Linkedin](https://www.linkedin.com/in/rushikesh988/) </br>

