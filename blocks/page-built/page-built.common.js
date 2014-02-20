BN.addDecl('page-built', 'page', {
    route: /^\/built\/(\w+)\/$/
}).staticProp({
    init: function (matchers) {

        BN('i-page').setTitle('Project is built.');

        return this.out([
            {
                block: 'b-text',
                elem: 'h1',
                content: 'Project is built.'
            },
            {
                block: 'b-project-menu',
                projectId: matchers[1]
            }
        ]);
    }
});
