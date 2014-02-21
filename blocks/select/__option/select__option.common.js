BN.addDecl('select')
    .elemTemplate({
        option: function (ctx) {
            ctx.bem(false).tag('option').attr('value', ctx.param('value'));
        }
    });