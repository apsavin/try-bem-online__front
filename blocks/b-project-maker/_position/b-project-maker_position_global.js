/**
 * @class BProjectMakerPositionGlobal
 * @name BProjectMakerPositionGlobal
 * @extends BProjectMaker
 */
BEM.DOM.decl({block: 'b-project-maker', modName: 'position', modVal: 'global'}, /**@lends BProjectMakerPositionGlobal*/{

    onSetMod: {
        js: {
            /**
             * @this BProjectMakerPositionGlobal
             * @constructs
             */
            inited: function () {
                this.__base();
                this._make();
            }
        }
    },

    /**
     * @param {Number} projectId
     * @protected
     */
    _onBuild: function (projectId) {
        BN('i-router').setPath('/built/' + projectId + '/');
    },

    /**
     * @param {Number} projectId
     * @protected
     */
    _onClean: function (projectId) {
        BN('i-router').setPath('/cleaned/' + projectId + '/');
    }

});
