BN.addDecl('page-build', 'page', {
    route: /^\/build\/([\w-]+)\/$/
}).staticProp({
    init: function (matchers) {

        BN('i-page').setTitle('Project is in build process...');

        BN('i-projects-api').buildProject(matchers[1]).then(function (response) {
            BN('i-router').setPath('/built/' + response.id + '/');
        });

        return this.out([
            {
                block: 'b-text',
                elem: 'h1',
                content: 'Project is in build process...'
            },
            {
                block: 'preloader'
            }
        ]);
    }
});
