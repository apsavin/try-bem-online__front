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
            BN('i-projects-api').writeFile(p.projectId, p.path, this._codeMirror.getDoc().getValue());
        }
    })
    .onSetMod({
        js: {
            inited: function () {
                this.__base();
                if (this.hasMod('w', 'true')) {
                    this._initForm();
                }
            }
        }
    });