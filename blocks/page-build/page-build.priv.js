BN.addDecl('page-build')
    .staticProp({
        init: function (matchers) {

            this._setTitle();

            return this._makeRequest(matchers);
        }
    });
