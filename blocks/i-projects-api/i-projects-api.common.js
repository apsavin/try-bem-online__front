BN.addDecl('i-projects-api', 'ajax', {
    apiHost: BN('i-config').api
}).staticProp({

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
     * @returns {*|Vow.promise}
     */
    getProjectResource: function (projectId, path) {
        return this.get('project/' + projectId + '/' + path);
    }
});
