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

        /**
         * @param {Object} input
         * @param {String} label
         * @returns {Object}
         */
        var someInput = function (input, label) {
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
                        input
                    ]
                }
            };
        };
        /**
         * @param {String} name
         * @param {String} label
         * @param {Boolean} [required]
         * @returns {Object} text input json
         */
        var textInput = function (name, label, required) {
            return someInput({
                block: 'input',
                name: name,
                attrs: {
                    pattern: '^[a-z][0-9a-z-]*$',
                    maxlength: 25,
                    title: 'Only lowercase latin letters, numbers and dash'
                },
                required: !!required
            }, label);
        };

        ctx.tag('form')
            .content([
                textInput('block', 'Name of the block:', true),
                textInput('elem', 'Name of the element (optional):'),
                textInput('modName', 'Name of the modifier (optional):'),
                textInput('modVal', 'Value of the modifier (optional):'),
                someInput({
                    block: 'select',
                    name: 'tech',
                    options: ctx.param('techs')
                }, 'Technology:'),
                {
                    block: 'b-text',
                    elem: 'p',
                    content: {
                        block: 'button',
                        name: 'send',
                        type: 'submit',
                        content: 'Create'
                    }
                }
            ]);
    });
