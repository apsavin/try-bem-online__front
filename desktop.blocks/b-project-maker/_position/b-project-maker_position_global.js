modules.define('b-project-maker', ['i-bem__dom', 'app-navigation'], function (provide, BEMDOM, navigation) {
    /**
     * @class BProjectMakerPositionGlobal
     * @name BProjectMakerPositionGlobal
     * @extends BProjectMaker
     */
    provide(BEMDOM.decl({block: this.name, modName: 'position', modVal: 'global'}, /**@lends BProjectMakerPositionGlobal*/{

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
            navigation.navigate('page-built', {projectId: projectId});
        },

        /**
         * @param {Number} projectId
         * @protected
         */
        _onClean: function (projectId) {
            navigation.navigate('page-cleaned', {projectId: projectId});
        },

        /**
         * @param {Number} queue
         * @protected
         */
        _showQueue: function (queue) {
            if (queue || this.elem('queue').text()) {
                this.elem('queue').text('Queue: ' + queue);
            }
        }

    }));
});
