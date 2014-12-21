modules.define('button', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            disabled: {
                'true': function () {
                    this.domElem.attr('disabled', 'disabled');
                },
                '': function () {
                    this.domElem.removeAttr('disabled');
                }
            }
        }
    }))
});
