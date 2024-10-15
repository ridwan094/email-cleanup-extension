import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  let unsubscribeCommand = vscode.commands.registerCommand('email-extension.unsubscribe', () => {
    vscode.window.showInformationMessage('Unsubscribing from newsletters...');
  });

  let cleanCommand = vscode.commands.registerCommand('email-extension.cleanInbox', () => {
    vscode.window.showInformationMessage('Cleaning up your inbox...');
  });

  context.subscriptions.push(unsubscribeCommand);
  context.subscriptions.push(cleanCommand);
}

export function deactivate() {}
