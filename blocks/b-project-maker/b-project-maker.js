BN.addDecl('b-project-maker')
    .onSetMod({
        js: {
            inited: function () {
                var promise = this.params.method === 'clean' ? this._clean() : this._build();
                promise.fail(function (err) {
                    window.alert(err.message);
                });
            }
        }
    })
    .instanceProp({

        /**
         * @returns {Vow.Promise}
         * @private
         */
        _clean: function () {
            return BN('i-projects-api').cleanProject(this.params.projectId).then(function (response) {
                BN('i-router').setPath('/cleaned/' + response.id + '/');
            });
        },

        /**
         * @returns {Vow.Promise}
         * @private
         */
        _build: function () {
            return BN('i-projects-api').buildProject(this.params.projectId).then(function (response) {
                BN('i-router').setPath('/built/' + response.id + '/');
            });
        }
    })
    .blockTemplate(function (ctx) {
        ctx.content({
            block: 'preloader'
        });
    });