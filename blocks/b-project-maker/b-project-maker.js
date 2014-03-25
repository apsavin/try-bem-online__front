/**
 * @class BProjectMaker
 * @name BProjectMaker
 * @extends BEM.DOM
 */
BEM.DOM.decl('b-project-maker', /**@lends BProjectMaker*/{

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
        BN('i-projects-api').cleanProject(this.params.projectId).then(this._onCleanResponse, this._onFail);
    },

    /**
     * @param {{id: Number, queue: ?Number}} response
     * @private
     */
    _onCleanResponse: function (response) {
        if (response.queue === undefined) {
            this._onClean(response.id);
        } else {
            this._showQueue(response.queue);
            BN('i-projects-api').getProjectStatus(response.id, 'clean', response.queue).then(this._onCleanResponse, this._onFail);
        }
    },

    /**
     * @param {Number} projectId
     * @protected
     * @abstract
     */
    _onClean: function (projectId) {
    },

    /**
     * @param {Error} err
     * @protected
     */
    _onFail: function (err) {
        window.alert(err.message);
    },

    /**
     * @private
     */
    _build: function () {
        BN('i-projects-api').buildProject(this.params.projectId).then(this._onBuildResponse, this._onFail);
    },

    /**
     * @param {{id: Number, queue: ?Number}} response
     * @private
     */
    _onBuildResponse: function (response) {
        if (response.queue === undefined) {
            this._onBuild(response.id);
        } else {
            this._showQueue(response.queue);
            BN('i-projects-api').getProjectStatus(response.id, 'make', response.queue).then(this._onBuildResponse, this._onFail);
        }
    },

    /**
     * @param {Number} projectId
     * @protected
     * @abstract
     */
    _onBuild: function (projectId) {
    },

    /**
     * @param {Number} queue
     * @protected
     */
    _showQueue: function (queue) {
        if (queue || this.elem('queue').text()) {
            this.elem('queue').text('Queue: ' + queue);
        }
    }
});
