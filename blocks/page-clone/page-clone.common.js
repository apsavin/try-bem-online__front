BN.addDecl('clone', 'page', {
    route: /^\/clone\/$/
}).staticProp({
    init: function () {

        BN('i-page').setTitle('Project is cloning...');

        BN('i-projects-api').post('clone').then(function (response) {
            BN('i-router').setPath('/clones/' + response.id + '/');
        });

        return this.out([
            {
                block: 'b-text',
                elem: 'h1',
                content: 'Project is cloning right now...'
            },
            {
                block: 'preloader'
            },
            {
                block: 'b-text',
                elem: 'p',
                content: '...just for you.'
            }
        ]);
    }
});
