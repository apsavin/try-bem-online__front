/*global CodeMirror*/
/**
 * @param {CodeMirror} cm
 */
CodeMirror.commands.save = function (cm) {
    CodeMirror.signal(cm, 'save');
};
