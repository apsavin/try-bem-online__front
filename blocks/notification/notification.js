BN.addDecl('notification')
    .onSetMod({
        js: {
            inited: function () {
                BEM.channel('notification')
                    .on('notify', function (e, options) {
                        this.notify(options);
                    }, this);
            }
        }
    })
    .instanceProp({

        /**
         * @param {{content: String, closable: Boolean, delay: Number}} options
         */
        notify: function (options) {

            var content = options.closable ? [
                {elem: 'closer', content: 'x'},
                {elem: 'content', content: options.content}
            ] : options.content;

            var $notification = $(BEMHTML.apply({
                block: 'notification',
                elem: 'popup',
                content: content
            }));

            this.domElem.append($notification);

            if (!options.closable || options.delay) {
                $notification.delay(options.delay || 3000)
                    .fadeOut(300, function () {
                        $(this).remove();
                    });
            }
        }

    }).staticProp({

        live: function () {
            this.liveBindTo('closer', 'click', function (e) {
                $(e.target).closest(this.__self.buildSelector('popup')).remove();
            });
            return false;
        }

    });