modules.define('b-project-maker', [
    'i-bem__dom', 'events__channels', 'i-projects-api'
], function (provide, BEMDOM, channel, projectsApiRequester) {
    /**
     * @class BProjectMaker
     * @name BProjectMaker
     * @extends BEM.DOM
     */
    provide(BEMDOM.decl('b-project-maker', /**@lends BProjectMaker*/{

        onSetMod: {
            js: {
                /**
                 * @this BProjectMaker
                 * @constructs
                 */
                inited: function () {
                    this._onCleanResponse = this._onCleanResponse.bind(this);
                    this._onBuildResponse = this._onBuildResponse.bind(this);
                    this._onFail = this._onFail.bind(this);
                }
            }
        },

        /**
         * @protected
         */
        _make: function () {
            if (this.params.method === 'clean') {
                this._clean();
            } else {
                this._build();
            }
        },

        /**
         * @private
         */
        _clean: function () {
            channel('notification').emit('notify', {
                content: 'Clean process started'
            });
            projectsApiRequester.cleanProject(this.params.projectId).then(this._onCleanResponse, this._onFail);
        },

        /**
         * @param {{body:{id: Number, queue: ?Number}}} response
         * @private
         */
        _onCleanResponse: function (response) {
            var responseBody = response.body;
            if (responseBody.queue === undefined) {
                this._onClean(responseBody.id);
            } else {
                this._showQueue(responseBody.queue);
                projectsApiRequester.getProjectStatus(responseBody.id, 'clean', responseBody.queue).then(this._onCleanResponse, this._onFail);
            }
        },

        /**
         * @param {Number} projectId
         * @protected
         */
        _onClean: function (projectId) {
            channel('notification').emit('notify', {
                content: 'Clean process successfully finished'
            });
        },

        /**
         * @param {{error: String}} response
         * @protected
         */
        _onFail: function (response) {
            channel('notification').emit('notify', {
                closable: true,
                content: 'Make (' + this._getMethod() + ') error: ' + response.error
            });
        },

        /**
         * @returns {String}
         * @protected
         */
        _getMethod: function () {
            return this.params.method || 'build';
        },

        /**
         * @private
         */
        _build: function () {
            channel('notification').emit('notify', {
                content: 'Build process started'
            });
            projectsApiRequester.buildProject(this.params.projectId).then(this._onBuildResponse, this._onFail);
        },

        /**
         * @param {{body:{id: Number, queue: ?Number}}} response
         * @private
         */
        _onBuildResponse: function (response) {
            var responseBody = response.body;
            if (responseBody.queue === undefined) {
                this._onBuild(responseBody.id);
            } else {
                this._showQueue(responseBody.queue);
                projectsApiRequester.getProjectStatus(responseBody.id, 'make', responseBody.queue).then(this._onBuildResponse, this._onFail);
            }
        },

        /**
         * @param {Number} projectId
         * @protected
         */
        _onBuild: function (projectId) {
            channel('notification').emit('notify', {
                content: 'Build process successfully finished'
            });
        },

        /**
         * @param {Number} queue
         * @protected
         * @abstract
         */
        _showQueue: function (queue) {
        }
    }));
});
