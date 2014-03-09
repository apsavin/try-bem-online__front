BN.addDecl('page-project', 'page', {
    route: /^\/clones\/([\w-]+)\/?(.*)?\/$/
}).staticProp({

    /**
     * @param {Array} matchers
     * @returns {Vow.Promise}
     */
    init: function (matchers) {

        BN('i-page').setTitle('Your project');

        var projectId = matchers[1];

        return this.out([
            {
                block: 'b-text',
                elem: 'h1',
                content: 'Play with your project now!'
            },
            {
                block: 'b-project-layout',
                content: [
                    this._getProjectEditorJson(matchers),
                    {
                        block: 'b-project-layout',
                        elem: 'sidebar',
                        content: {
                            block: 'b-project-menu',
                            projectId: projectId
                        }
                    }
                ]
            }
        ]);
    },

    /**
     * @param {Array} matchers
     * @returns {Object}
     * @private
     */
    _getProjectEditorJson: function (matchers) {
        var projectId = matchers[1],
            path = matchers[2] || '';
        return {
            block: 'b-project-editor',
            projectId: projectId,
            path: path,
            mix: {
                block: 'b-project-layout',
                elem: 'content'
            }
        };
    },

    /**
     * @param {Array} matchers
     * @returns {Vow.Promise}
     */
    update: function (matchers) {
        return this.html(this._getProjectEditorJson(matchers)).then(function (html) {
            try {
                BEM.DOM.update(
                    jQuery('.b-project-editor'),
                    html
                );
            } catch (ex) { console.error(ex); }
            jQuery('body, html').scrollTop(0);
            return html;
        }.bind(this));
    }
});
