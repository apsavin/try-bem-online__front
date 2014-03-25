BN.addDecl('b-project-cloner')
    .onSetMod({
        js: {
            inited: function () {
                BN('i-projects-api').createProject().then(function (response) {
                    BN('i-router').setPath('/clones/' + response.id + '/');
                }, function (err) {
                    BEM.channel('notification').trigger('notify', {
                        closable: true,
                        content: 'Clone error: ' + err.message
                    });
                });
            }
        }
    });