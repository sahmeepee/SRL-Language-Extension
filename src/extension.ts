import * as vscode from 'vscode';

// This function is called when your extension is activated.
export function activate(context: vscode.ExtensionContext) {
    console.log('SRL Language extension is now active.');

    // Register a command to perform a specific action.
    let disposable = vscode.commands.registerCommand('srl-language.sayHello', () => {
        vscode.window.showInformationMessage('Hello from SRL Language!');
    });

    // Add the command to the context subscriptions so it can be disposed of when the extension is deactivated.
    context.subscriptions.push(disposable);
}

// This function is called when your extension is deactivated.
export function deactivate() {
    // Clean up resources if needed.
}
