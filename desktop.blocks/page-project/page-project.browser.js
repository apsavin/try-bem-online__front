modules.define('page-project', function (provide, PageProject) {
    "use strict";

    /**
     * @class PageProject
     * @extends IPage
     * @exports
     */
    provide(PageProject.decl(/**@lends PageProject*/{

        /**
         * @param {Object} data
         * @returns {vow:Promise}
         */
        update: function (data) {
            return this._replace('b-project-editor', {
                block: 'b-project-editor',
                projectId: data.route.parameters.projectId,
                path: data.route.parameters.path,
                currentPath: data.request.url,
                mix: {
                    block: 'b-project-layout',
                    elem: 'content'
                }
            });
        }

    }));
});
