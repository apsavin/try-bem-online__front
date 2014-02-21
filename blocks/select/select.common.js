BN.addDecl('select')
    .blockTemplate(function (ctx) {
        ctx.tag('select')
            .js(true)
            .content(ctx.param('options').map(function (option) {
                return {
                    elem: 'option',
                    content: option.content || option,
                    value: option.value || option
                };
            }))
            .attr('name', ctx.param('name'));
    });