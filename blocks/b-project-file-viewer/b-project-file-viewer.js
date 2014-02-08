/*global CodeMirror*/
BN.addDecl('b-project-file-viewer')
    .onSetMod({
        js: {
            inited: function () {
                this._codeMirror = CodeMirror.fromTextArea(this.domElem[0], {
                    mode: this.params.mode,
                    theme: 'solarized dark',
                    readOnly: this.params.w ? false : 'nocursor',
                    lineNumbers: true,
                    styleActiveLine: true,
                    matchBrackets: true
                });
            }
        }
    });