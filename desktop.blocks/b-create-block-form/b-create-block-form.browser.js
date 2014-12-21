/**@module b-create-block-form*/
modules.define('b-create-block-form', [
    'i-bem__dom', 'i-projects-api', 'app-navigation'
], function (provide, BEMDOM, projectsApiRequester, navigation) {
    "use strict";

    /**
     * @class CreateBlockForm
     * @extends BEMDOM
     * @exports
     */
    provide(BEMDOM.decl(this.name, /**@lends CreateBlockForm.prototype*/{

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
            projectsApiRequester.createBlockFile(params)
                .then(function (response) {
                    navigation.navigate('page-project', {projectId: response.body.projectId, path: response.body.path});
                }, function (err) {
                    BEMDOM.channel('notification').emit('notify', {
                        closable: true,
                        content: 'Creation error: ' + err.message
                    });
                })
                .always(function () {
                    form.send.disabled = false;
                });
        }

    }, {
        live: function () {
            this.liveBindTo('submit', function (e) {
                this._onSubmit(e);
            });
        }
    }));
});
