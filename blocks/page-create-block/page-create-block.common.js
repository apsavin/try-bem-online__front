BN.addDecl('page-create-block', 'page', {
    route: /^\/create_block\/(\w+)\/$/
}).staticProp({
    init: function (matchers) {

        BN('i-page').setTitle('Create something new.');

        var projectId = matchers[1];

        return this.out([
            {
                block: 'b-text',
                elem: 'h1',
                content: 'Create something new.'
            },
            {
                block: 'b-project-layout',
                content: [
                    {
                        block: 'b-create-block-form',
                        js: {
                            projectId: projectId
                        },
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
