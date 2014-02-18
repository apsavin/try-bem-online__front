BN.addDecl('i-projects-api', 'ajax', {
    apiHost: BN('i-config').api
}).staticProp({

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
            data: {
                body: data
            }
        });
    },

    /**
     * @param {String} projectId
     * @returns {string}
     */
    getViewPath: function (projectId) {
        return '//' + projectId + '.' + BN('i-config').views + '/' + 'index.html';
    }
});
