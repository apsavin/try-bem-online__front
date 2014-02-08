/*global prettyPrint*/
BN.addDecl('page-project').staticProp({
    update: function (matchers) {
        return this.__base(matchers).then(function () {
            prettyPrint();
        });
    }
});
