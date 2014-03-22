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
                readOnly: !this.hasMod('w', 'true'),
                lineNumbers: true,
                styleActiveLine: true,
                matchBrackets: true,
                indentUnit: 4,
                extraKeys: {
                    Tab: function (cm) {
                        if (cm.doc.somethingSelected()) {
                            return CodeMirror.Pass;
                        }
                        var spacesPerTab = cm.getOption('indentUnit'),
                            spacesToInsert = spacesPerTab - (cm.doc.getCursor('start').ch % spacesPerTab),
                            spaces = (new Array(spacesToInsert + 1)).join(' ');
                        cm.replaceSelection(spaces, 'end', '+input');
                    }
                }
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