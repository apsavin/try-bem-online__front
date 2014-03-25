BN.addDecl('b-create-block-form')
    .staticProp({
        live: function () {
            this.liveBindTo('submit', function (e) {
                this._onSubmit(e);
            });
        }
    })
    .instanceProp({
        /**
         * @param {Event} e
         * @private
         */
        _onSubmit: function (e) {
            e.preventDefault();
            var form = this.domElem[0],
                elements = form.elements,
                params = {},
                element;
            for (var i = 0, l = elements.length; i < l; i++) {
                element = elements[i];
                params[element.name] = element.value;
            }
            params['projectId'] = this.params.projectId;
            form.send.disabled = true;
            BN('i-projects-api').createBlockFile(params)
                .then(function (response) {
                    BN('i-router').setPath('/clones/' + response.projectId + '/' + response.path + '/');
                }, function (err) {
                    BEM.channel('notification').trigger('notify', {
                        closable: true,
                        content: 'Creation error: ' + err.message
                    });
                })
                .always(function () {
                    form.send.disabled = false;
                });
        }
    });