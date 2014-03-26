/**
 * @class BProjectMakerPositionLocal
 * @name BProjectMakerPositionLocal
 * @extends BProjectMaker
 */
BEM.DOM.decl({block: 'b-project-maker', modName: 'position', modVal: 'local'}, /**@lends BProjectMakerPositionLocal*/{

    onSetMod: {
        js: {
            inited: function () {
                this.__base();
                /**
                 * @type {number}
                 * @private
                 */
                this._prevQueue = 0;
                this.domElem.on('click', this._onClick.bind(this));
            }
        }
    },

    /**
     * @param {Event} e
     * @private
     */
    _onClick: function (e) {
        e.preventDefault();
        if (this.hasMod('disabled')) {
            return;
        }
        this.setMod('disabled', 'yes');
        this._make();
    },

    /**
     * @param {Number} projectId
     * @protected
     */
    _onBuild: function (projectId) {
        this.__base(projectId);
        this.delMod('disabled');
    },

    /**
     * @param {Number} projectId
     * @protected
     */
    _onClean: function (projectId) {
        this.__base(projectId);
        this.delMod('disabled');
    },

    /**
     * @param {Error} err
     * @protected
     */
    _onFail: function (err) {
        this.__base(err);
        this.delMod('disabled');
    },

    /**
     * @param {Number} queue
     * @protected
     */
    _showQueue: function (queue) {
        if (queue || this._prevQueue) {
            this._prevQueue = queue;
            BEM.channel('notification').trigger('notify', {
                content: 'Make (' + this._getMethod() + ') queue: ' + queue
            });
        }
    }

});
