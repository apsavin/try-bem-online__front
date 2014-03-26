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
        BEM.channel('notification').trigger('notify', {
            content: 'Clean process started'
        });
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
     */
    _onClean: function (projectId) {
        BEM.channel('notification').trigger('notify', {
            content: 'Clean process successfully finished'
        });
    },

    /**
     * @param {Error} err
     * @protected
     */
    _onFail: function (err) {
        BEM.channel('notification').trigger('notify', {
            closable: true,
            content: 'Make (' + this._getMethod() + ') error: ' + err.message
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
        BEM.channel('notification').trigger('notify', {
            content: 'Build process started'
        });
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
     */
    _onBuild: function (projectId) {
        BEM.channel('notification').trigger('notify', {
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
});
