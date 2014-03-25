BN.addDecl('page-clean', 'page', {
    route: /^\/clean\/([\w-]+)\/$/
}).staticProp({
    init: function (matchers) {

        BN('i-page').setTitle('Project is in clean up process...');

        return this.out([
            {
                block: 'b-text',
                elem: 'h1',
                content: 'Project is in clean up process...'
            },
            {
                block: 'b-project-maker',
                mods: {position: 'global'},
                js: {
                    projectId: matchers[1],
                    method: 'clean'
                }
            }
        ]);
    }
});
