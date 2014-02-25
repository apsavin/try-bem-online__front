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
            var p = this.params;
            this.setMod('disabled', 'true');
            BN('i-projects-api').writeFile(p.projectId, p.path, this._codeMirror.getDoc().getValue())
                .then(function () {
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