modules.define('b-project-cloner', [
    'i-bem__dom', 'events__channels', 'i-projects-api', 'app-navigation'
], function (provide, BEMDOM, channel, projectsApiRequester, navigation) {
    provide(BEMDOM.decl(this.name, {onSetMod: {
        js: {
            inited: function () {
                projectsApiRequester.createProject().then(function (response) {
                    navigation.navigate('page-project', {projectId: response.body.id});
                }, function (result) {
                    channel('notification').emit('notify', {
                        closable: true,
                        content: 'Clone error: ' + result.error
                    });
                });
            }
        }
    }}));
});
