"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
// This function is called when your extension is activated.
function activate(context) {
    console.log('SRL Language extension is now active.');
    // Register a command to perform a specific action.
    let disposable = vscode.commands.registerCommand('srl-language.sayHello', () => {
        vscode.window.showInformationMessage('Hello from SRL Language!');
    });
    // Add the command to the context subscriptions so it can be disposed of when the extension is deactivated.
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// This function is called when your extension is deactivated.
function deactivate() {
    // Clean up resources if needed.
}
exports.deactivate = deactivate;
