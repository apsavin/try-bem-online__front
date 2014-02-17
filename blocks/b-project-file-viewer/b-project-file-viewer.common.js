BN.addDecl('b-project-file-viewer')
    .blockTemplate({
        w_true: function (ctx) {
            ctx.tag('form');
            var submit = {
                block: 'button',
                type: 'submit',
                content: 'Save'
            };
            ctx.content([
                submit,
                {
                    elem: 'text',
                    content: ctx.content()
                },
                submit
            ], true);
        },
        w_false: function (ctx) {
            ctx.content({
                elem: 'text',
                content: ctx.content()
            }, true);
        }
    })
    .elemTemplate({
        text: function (ctx) {
            ctx.tag('textarea');
        }
    });