BN.addDecl('i-projects-api', 'ajax', {
    apiHost: BN('i-config').api
}).staticProp({

    TIMEOUT: 20000,

    /**
     * @param {string} projectId
     * @param {string} path
     * @returns {string}
     * @private
     */
    _buildResourcePath: function (projectId, path) {
        return 'project/' + projectId + '/' + path;
    },

    /**
     * @param {String} resource
     * @param {Object} [options]
     * @returns {Vow.Promise}
     */
    post: function (resource, options) {
        return this._request('post', resource, options);
    },

    /**
     * @returns {Vow.Promise}
     */
    createProject: function () {
        return this.post('project');
    },

    /**
     * @param {String} projectId
     * @param {String} path
     * @returns {Vow.Promise}
     */
    getProjectResource: function (projectId, path) {
        return this.get(this._buildResourcePath(projectId, path));
    },

    /**
     * @param {String} projectId
     * @param {String} path
     * @param {String} data
     * @returns {Vow.Promise}
     */
    writeFile: function (projectId, path, data) {
        return this.post(this._buildResourcePath(projectId, path), {
            body: {
                content: data
            }
        });
    },

    /**
     * @param {String} projectId
     * @returns {string}
     */
    getViewPath: function (projectId) {
        return BN('i-config').views + '/' + projectId + '/' + 'index.html';
    },

    /**
     * @param {String} projectId
     * @returns {Vow.Promise}
     */
    buildProject: function (projectId) {
        return this._projectAction(projectId, 'build');
    },

    /**
     * @param {String} projectId
     * @returns {Vow.Promise}
     */
    cleanProject: function (projectId) {
        return this._projectAction(projectId, 'clean');
    },

    /**
     * @param {String} projectId
     * @param {String} method
     * @param {?Number} queue
     * @returns {Vow.Promise}
     */
    getProjectStatus: function (projectId, method, queue) {
        return this._projectAction(projectId, 'status', {
            method: method,
            queue: queue
        });
    },

    /**
     * @param {String} projectId
     * @param {String} action
     * @param {Object} [params]
     * @returns {Vow.Promise}
     * @private
     */
    _projectAction: function (projectId, action, params) {
        params = params || {};
        params.action = action;
        return this.post('project/' + projectId, {
            params: params
        });
    },

    /**
     * @returns {Vow.Promise}
     */
    getTechs: function () {
        return this.get('techs');
    },

    /**
     * @param {Object} params
     * @param {String} params.projectId
     * @param {String} params.block
     * @param {String} params.elem
     * @param {String} [params.modName]
     * @param {String} [params.modVal]
     * @returns {Vow.Promise}
     */
    createBlockFile: function (params) {
        return this.post('block', {
            params: params
        });
    }
});
