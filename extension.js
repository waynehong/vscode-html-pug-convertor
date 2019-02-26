const vscode = require('vscode');
const {transformHtml,transformPug} = require('./commands');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.transformHtmlToPug', transformHtml);
    let disposable2 = vscode.commands.registerCommand('extension.transformPugToHtml', transformPug);
    context.subscriptions.push(disposable);
    context.subscriptions.push(disposable2);
}
exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;