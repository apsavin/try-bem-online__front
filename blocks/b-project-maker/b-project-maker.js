BN.addDecl('b-project-maker')
    .onSetMod({
        js: {
            inited: function () {
                this._onClean = this._onClean.bind(this);
                this._onBuild = this._onBuild.bind(this);
                this._onFail = this._onFail.bind(this);
                if (this.params.method === 'clean') {
                    this._clean();
                } else {
                    this._build();
                }
            }
        }
    })
    .instanceProp({

        /**
         * @private
         */
        _clean: function () {
            BN('i-projects-api').cleanProject(this.params.projectId).then(this._onClean, this._onFail);
        },

        /**
         * @private
         */
        _onClean: function (response) {
            if (response.queue === undefined) {
                BN('i-router').setPath('/cleaned/' + response.id + '/');
            } else {
                this._showQueue(response.queue);
                BN('i-projects-api').getProjectStatus(response.id, 'clean', response.queue).then(this._onClean, this._onFail);
            }
        },

        /**
         * @private
         */
        _onFail: function (err) {
            window.alert(err.message);
        },

        /**
         * @private
         */
        _build: function () {
            BN('i-projects-api').buildProject(this.params.projectId).then(this._onBuild, this._onFail);
        },

        /**
         * @private
         */
        _onBuild: function (response) {
            if (response.queue === undefined) {
                BN('i-router').setPath('/built/' + response.id + '/');
            } else {
                this._showQueue(response.queue);
                BN('i-projects-api').getProjectStatus(response.id, 'make', response.queue).then(this._onBuild, this._onFail);
            }
        },

        /**
         * @param {Number} queue
         * @private
         */
        _showQueue: function (queue) {
            if (queue || this.elem('queue').text()) {
                this.elem('queue').text('Queue: ' + queue);
            }
        }
    });