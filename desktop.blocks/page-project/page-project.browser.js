modules.define('page-project', ['i-page'], function (provide, Page) {
    "use strict";

    /**
     * @class PageProject
     * @extends IPage
     * @exports
     */
    provide(Page.decl(this.name, /**@lends PageProject*/{

        /**
         * @param {Object} data
         * @returns {Promise}
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
