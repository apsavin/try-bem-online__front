/**@module i-projects-api*/
modules.define('i-projects-api', ['i-bem', 'app-api-requester'], function (provide, BEM, requester) {
    "use strict";

    /**
     * @class ProjectsApi
     * @extends BEM
     * @exports
     */
    var ProjectsApi = BEM.decl(this.name, /**@lends ProjectsApi.prototype*/{


        /**
         * @returns {Vow.Promise}
         */
        createProject: function () {
            return requester.post('new_project');
        },

        /**
         * @param {String} projectId
         * @param {String} path
         * @returns {Vow.Promise}
         */
        getProjectResource: function (projectId, path) {
            return requester.get('project', {projectId: projectId, path: path});
        },

        /**
         * @param {String} projectId
         * @param {String} path
         * @param {String} data
         * @returns {Vow.Promise}
         */
        writeFile: function (projectId, path, data) {
            return requester.post('project', {projectId: projectId, path: path}, {
                content: data
            });
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
            return requester.post('project', {projectId: projectId}, params);
        },

        /**
         * @returns {Vow.Promise}
         */
        getTechs: function () {
            return requester.get('techs');
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
            return requester.post('block', null, params);
        }
    });
    provide(new ProjectsApi);
});
