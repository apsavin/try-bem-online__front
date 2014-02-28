BN.addDecl('page-build', 'page', {
    route: /^\/build\/([\w-]+)\/$/
}).staticProp({
    init: function (matchers) {

        BN('i-page').setTitle('Project is in build process...');

        return this.out([
            {
                block: 'b-text',
                elem: 'h1',
                content: 'Project is in build process...'
            },
            {
                block: 'b-project-maker',
                js: {
                    projectId: matchers[1]
                }
            }
        ]);
    }
});
