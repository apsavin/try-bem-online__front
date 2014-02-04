BN.addDecl('i-projects-api', 'ajax', {
    apiHost: 'http://api.try-bem-online.dev'
}).staticProp({

    post: function (resource, options) {
        return this._request('post', resource, options);
    }

});