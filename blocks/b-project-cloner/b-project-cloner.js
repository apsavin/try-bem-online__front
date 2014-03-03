BN.addDecl('b-project-cloner')
    .onSetMod({
        js: {
            inited: function () {
                BN('i-projects-api').createProject().then(function (response) {
                    BN('i-router').setPath('/clones/' + response.id + '/');
                }, function (e) {
                    window.alert(e.message);
                });
            }
        }
    });