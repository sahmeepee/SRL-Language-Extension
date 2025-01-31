# SRL Syntax Extension
This extension gives you the ability to view SRL syntax with appropriate colouring and some snippets.

## Installation
Install from the .vsix file:

1. Open the VS Code extensions pane
2. Click the ellipsis (...)
3. Choose "Install from VSIX..."
4. Select the VSIX file

(Install from the Marketplace coming soon!)

## Colouring support
The extension currently supports:
* \<\<normal syntax\>\>
* {{ conditionals }}
* [[ lists ]]

Within those elements it provides colouring for:
* --comments--
* #variables
* \$functions()
* \$\$registers
* @SLPs
* &Formats
* entities and keywords within conditionals and lists

## Snippet support
You can check what snippets are available in VS Code with ctrl+shift+P > "Snippets: Insert Snippet". Currently they include:
* "srl" to trigger \<\<x\>\>
* "sel:" to trigger {{SEL:( x ): y }{ z }}
* "list:" to trigger [[ent.dict:SEL:( x ): y ]]

TIP:To move between the different elements in the snippet just press Tab.

## Bracket support
The following are treated as brackets, highlighting where opening and closing brackets don't match:
* \{ \} - for conditionals each brace is matched separately to handle the if-else sections properly
* [[ ]] - for lists the brackets are always in pairs so only a pair is treated as a bracket
* ( ) - normal brackets (parentheses), typically used in conditions, are matched singly
