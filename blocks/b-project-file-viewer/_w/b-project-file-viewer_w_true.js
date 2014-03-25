/*global esprima:false*/
BN.addDecl('b-project-file-viewer')
    .instanceProp({

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
        }
    })
    .onSetMod({
        js: {
            inited: function () {
                this.__base();
                if (this.hasMod('w', 'true')) {
                    this._initForm();

                    /**
                     * @type {BEM[]}
                     * @private
                     */
                    this._buttons = this.findBlocksInside('buttons');
                }
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
    });