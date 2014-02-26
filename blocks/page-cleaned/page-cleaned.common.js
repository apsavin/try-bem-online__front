BN.addDecl('page-cleaned', 'page', {
    route: /^\/cleaned\/([\w-]+)\/$/
}).staticProp({
    init: function (matchers) {

        BN('i-page').setTitle('Project is cleaned up.');

        return this.out([
            {
                block: 'b-text',
                elem: 'h1',
                content: 'Project is cleaned up.'
            },
            {
                block: 'b-project-menu',
                projectId: matchers[1]
            }
        ]);
    }
});
