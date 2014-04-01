/*global CodeMirror*/
BEM.DOM.decl('b-project-file-viewer', {

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
});
