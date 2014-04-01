/*global esprima:false, CodeMirror: false*/
BEM.DOM.decl({block: 'b-project-file-viewer', modName: 'w', modVal: 'true'}, {

    onSetMod: {
        js: {
            inited: function () {
                this.__base();
                this._initForm();

                /**
                 * @type {BEM[]}
                 * @private
                 */
                this._buttons = this.findBlocksInside('buttons');
                this._codeMirror.on('save', this._save.bind(this));
            }
        },
        disabled: {
            'true': function () {
                this.setMod(this.elem('preloader-holder'), 'visible', 'true');
                this._codeMirror.setOption('readOnly', true);
                this._buttons.forEach(function (button) {
                    button.setMod('disabled', 'true');
                });
            },
            '': function () {
                this.delMod(this.elem('preloader-holder'), 'visible');
                this._codeMirror.setOption('readOnly', false);
                this._buttons.forEach(function (button) {
                    button.delMod('disabled');
                });
            }
        }
    },

    /**
     * @private
     */
    _initForm: function () {
        this.domElem.on('submit', this._onSubmit.bind(this));
    },

    /**
     * @param {Event} e
     * @private
     */
    _onSubmit: function (e) {
        e.preventDefault();
        this._save();
    },

    /**
     * @private
     */
    _save: function () {
        var p = this.params,
            content = this._codeMirror.getDoc().getValue();
        if (p.path.split('.').pop() === 'js') {
            try {
                esprima.parse(content);
            } catch (e) {
                BEM.channel('notification').trigger('notify', {
                    closable: true,
                    content: 'Can not save. Error in file: ' + e.message
                });
                return;
            }
        }
        this.setMod('disabled', 'true');
        BN('i-projects-api').writeFile(p.projectId, p.path, content)
            .then(function () {
                BEM.channel('notification').trigger('notify', {
                    content: 'File successfully saved'
                });
            })
            .fail(function (e) {
                BEM.channel('notification').trigger('notify', {
                    closable: true,
                    content: 'Saving error: ' + e.message
                });
            })
            .always(function () {
                this.delMod('disabled');
            }.bind(this));
    },

    /**
     * @returns {Object}
     * @protected
     */
    _getCodeMirrorOptions: function () {
        return $.extend(this.__base(), {
            readOnly: false,
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
});
