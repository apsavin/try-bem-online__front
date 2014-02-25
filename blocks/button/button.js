BN.addDecl('button')
    .onSetMod({
        disabled: {
            'true': function () {
                this.domElem.attr('disabled', 'disabled');
            },
            '': function () {
                this.domElem.removeAttr('disabled');
            }
        }
    });