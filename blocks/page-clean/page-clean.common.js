BN.addDecl('page-clean', 'page', {
    route: /^\/clean\/(\w+)\/$/
}).staticProp({
    init: function (matchers) {

        BN('i-page').setTitle('Project is in clean up process...');

        BN('i-projects-api').cleanProject(matchers[1]).then(function (response) {
            BN('i-router').setPath('/cleaned/' + response.id + '/');
        });

        return this.out([
            {
                block: 'b-text',
                elem: 'h1',
                content: 'Project is in clean up process...'
            },
            {
                block: 'preloader'
            }
        ]);
    }
});
