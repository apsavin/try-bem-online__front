BN.addDecl('select')
    .instanceProp({

        /**
         * @param {String} value
         * @returns {String|select}
         */
        val: function (value) {
            if (typeof value === undefined) {
                return this.domElem.val();
            }
            this.domElem.val(value);
            return this;
        }
    });