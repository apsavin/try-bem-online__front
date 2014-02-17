/*global CodeMirror*/
BN.addDecl('b-project-file-viewer')
    .instanceProp({
        /**
         * @private
         */
        _initCodeMirror: function () {
            /**
             * @type {CodeMirror}
             * @protected
             */
            this._codeMirror = CodeMirror.fromTextArea(this.elem('text')[0], {
                mode: this.params.mode,
                theme: 'solarized dark',
                readOnly: this.hasMod('w', 'true') ? false : 'nocursor',
                lineNumbers: true,
                styleActiveLine: true,
                matchBrackets: true
            });
        }
    })
    .onSetMod({
        js: {
            inited: function () {
                this._initCodeMirror();
            }
        }
    });