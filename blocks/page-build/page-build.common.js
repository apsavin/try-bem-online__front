BN.addDecl('page-build', 'page', {
    route: /^\/build\/([\w-]+)\/$/
}).staticProp({
    /**
     * @param {Array} matchers
     * @protected
     */
    _makeRequest: function (matchers) {
        return BN('i-projects-api').buildProject(matchers[1]).then(function (response) {
            BN('i-router').setPath('/built/' + response.id + '/');
        });
    },

    /**
     * @protected
     */
    _setTitle: function () {
        this.setTitle('Project is in build process...');
    }
});
