BN.addDecl('page-build')
    .staticProp({
        init: function (matchers) {

            this._setTitle();

            this._makeRequest(matchers);

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
