BN.addDecl('b-create-block-form')
    .dataTemplate(function (ctx) {
        return BN('i-projects-api').getTechs()
            .then(function (techs) {
                ctx.param('techs', techs);
            })
            .fail(function (err) {
                ctx.content({
                    block: 'b-project-error',
                    content: err.message
                });
            });
    })
    .blockTemplate(function (ctx) {

        var textInput = function (name, label) {
            return {
                block: 'b-text',
                elem: 'p',
                content: {
                    block: 'label',
                    content: [
                        {
                            elem: 'content',
                            content: label
                        },
                        {
                            block: 'input',
                            name: name
                        }
                    ]
                }
            };
        };

        ctx.tag('form')
            .content([
                textInput('block', 'Name of the block:'),
                textInput('elem', 'Name of the element (optional):'),
                textInput('modName', 'Name of the modifier (optional):'),
                textInput('modVal', 'Value of the modifier (optional):'),
                {
                    block: 'b-text',
                    elem: 'p',
                    content: {
                        block: 'label',
                        content: [
                            {
                                elem: 'content',
                                content: 'Technology: '
                            },
                            {
                                block: 'select',
                                name: 'tech',
                                options: ctx.param('techs')
                            }
                        ]
                    }
                },
                {
                    block: 'b-text',
                    elem: 'p',
                    content: {
                        block: 'button',
                        type: 'submit',
                        content: 'Create'
                    }
                }
            ]);
    });