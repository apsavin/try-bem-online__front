modules.define('select', ['i-bem__dom'], function (provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {
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
    }));
});
