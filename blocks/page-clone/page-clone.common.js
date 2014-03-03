BN.addDecl('page-clone', 'page', {
    route: /^\/clone\/$/
}).staticProp({
    init: function () {

        BN('i-page').setTitle('Project is cloning...');

        return this.out([
            {
                block: 'b-text',
                elem: 'h1',
                content: 'Project is cloning right now...'
            },
            {
                block: 'preloader',
                mix: {
                    block: 'b-project-cloner',
                    js: true
                }
            },
            {
                block: 'b-text',
                elem: 'p',
                content: '...just for you.'
            }
        ]);
    }
});
