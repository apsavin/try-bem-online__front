modules.define('b-project-file-viewer', ['i-bem__dom'], function (provide, BEMDOM) {
    /*global CodeMirror*/
    provide(BEMDOM.decl(this.name, {

        onSetMod: {
            js: {
                inited: function () {
                    this._initCodeMirror();
                }
            }
        },

        /**
         * @private
         */
        _initCodeMirror: function () {
            /**
             * @type {CodeMirror}
             * @protected
             */
            this._codeMirror = CodeMirror.fromTextArea(this.elem('text')[0], this._getCodeMirrorOptions());
        },

        /**
         * @returns {Object}
         * @protected
         */
        _getCodeMirrorOptions: function () {
            return {
                mode: this.params.mode,
                theme: 'solarized dark',
                readOnly: true,
                lineNumbers: true,
                styleActiveLine: true,
                matchBrackets: true
            };
        }
    }));
});
