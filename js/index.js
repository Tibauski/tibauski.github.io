var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var ENTER_KEY = 13;
var fileSystem = {
  'README.md': 'Welcome to the portfolio of Tibo De Clercq\nSupported commands are:\n  - ls: list directory contents\n  - cat: concatenate and print files\n  - clear: clear the terminal screen \n',
  'contact.txt': '\nEmail: tibo.declercq[at]gmail.com \nTel: +32 488 37 99 49\nTwitter: @tibauski \nGithub: TiboDeClercq \n\n',
  'resume.pdf': 'My resume is open in a new window.\n',
  'tools.txt': 'Hier zijn competenties uitgebreid beschreven. \n' 
  };


new (function () {
  function Terminal() {_classCallCheck(this, Terminal);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.clearHistory = this.clearHistory.bind(this);
    this.addHistory = this.addHistory.bind(this);
    this.listFiles = this.listFiles.bind(this);
    this.catFile = this.catFile.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);

    this.history = [];
    this.elements = {
      input: document.querySelector('.input'),
      terminal: document.querySelector('.terminal'),
      outputContainer: document.querySelector('.outputContainer') };

    this.prompt = '$';
    this.commands = {
      clear: this.clearHistory,
      ls: this.listFiles,
      cat: this.catFile };

    this.elements.input.addEventListener('keydown', this.onKeyDown);
    this.catFile('README.md');
  }_createClass(Terminal, [{ key: 'clearHistory', value: function clearHistory()

    {
      this.history = [];
      this.elements.outputContainer.innerHTML = '';
    } }, { key: 'catFile', value: function catFile(

    fileName) {
      if(fileName == 'Competenties.pdf')
      window.open('Competenties.pdf','_blank','fullscreen=yes');
      if(fileName == 'resume.pdf')
      window.open('resume.pdf','_blank','fullscreen=yes');
      if (fileName in fileSystem)
      this.addHistory(fileSystem[fileName]);
      else
      this.addHistory('cat: ' + fileName + ': No such file or directory');
    } }, { key: 'scrollToBottom', value: function scrollToBottom()

    {
      this.elements.terminal.scrollTop = this.elements.terminal.scrollHeight;
    } }, { key: 'addHistory', value: function addHistory(

    output) {
      this.history.push(output);

      var outputText = document.createTextNode(output);
      var outputEl = document.createElement('pre');

      outputEl.classList.add('output');
      outputEl.appendChild(outputText);

      this.elements.outputContainer.appendChild(outputEl);
    } }, { key: 'listFiles', value: function listFiles(

    dir) {
      var output = Object.keys(fileSystem).reduce(function (acc, curr, index) {
        var deliminator = index % 3 === 0 && index !== 0 ? '\n' : '\t';
        return '' + acc + curr + deliminator;
      }, '');

      this.addHistory(output);
    } }, { key: 'clearInput', value: function clearInput()

    {this.elements.input.value = '';} }, { key: 'onKeyDown', value: function onKeyDown(

    e) {
      // Only respond to Enter key presses
      if (e.keyCode !== ENTER_KEY) return;

      var inputText = this.elements.input.value;
      var inputArray = inputText.split(' ');
      var inputCommand = inputArray[0];
      var arg = inputArray[1];

      this.addHistory(this.prompt + ' ' + inputText);
      this.clearInput();

      /* If the command line was empty, stop. 
                            We don't want to interpret it as a command.
                            It's fine to feed a lint to the terminal */
      if (inputCommand === '') return;

      var command = this.commands[inputCommand];

      if (command)
      command(arg);else

      this.addHistory('sh: command not found: ' + inputCommand);

      this.scrollToBottom();
    } }]);return Terminal;}())();