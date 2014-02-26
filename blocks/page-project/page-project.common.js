BN.addDecl('page-project', 'page', {
    route: /^\/clones\/([\w-]+)\/?(.*)?\/$/
}).staticProp({
    init: function (matchers) {

        BN('i-page').setTitle('Your project');

        var projectId = matchers[1],
            path = matchers[2] || '';

        return this.out([
            {
                block: 'b-text',
                elem: 'h1',
                content: 'Play with your project now!'
            },
            {
                block: 'b-project-layout',
                content: [
                    {
                        block: 'b-project-editor',
                        projectId: projectId,
                        path: path,
                        mix: {
                            block: 'b-project-layout',
                            elem: 'content'
                        }
                    },
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
    }
});
