<html>
    <head>
        <title>menu</title>
        <link rel="stylesheet" href="MainStyleSheet.css" type="text/css" />
    
        <script language="javascript" type="text/javascript" src="MenuJavaScript.js"></script>
        <script language="javascript" type="text/javascript">
            var oMenu;
            var isClickComponentMenu;
            var widthListComponentMenu = '130px';
            var heightItemComponentMenu = '30px';

            function componentMenu_onMouseDown() {
                isClickComponentMenu = true;
            }

            function hideAllComponentMenu() {
                if (isClickComponentMenu == false) {
                    oMenu.hideItens();
                }

                isClickComponentMenu = false;
            }

            function document_OnLoad() {
                isClickObject = false;
                
                oMenu = new Menu('oMenu', '30px', '100%');

                //################ FILE #################
                var fileMenu = oMenu.addItemMenu('fileMenu', 'File', '', '');

                var newFileMenu = fileMenu.addItemMenu('newFileMenu', 'New', '', '');
                var notePadNewFileMenu = newFileMenu.addItemMenu('notePadNewFileMenu', 'Notepad', '', 'Notepad.png');
                notePadNewFileMenu.onClick = menu_OnClick;
                var wordPadNewFileMenu = newFileMenu.addItemMenu('wordPadNewFileMenu', 'WordPad', '', 'WordPad.png');
                wordPadNewFileMenu.onClick = menu_OnClick;

                var openFileMenu = fileMenu.addItemMenu('openFileMenu', 'Open', '', 'Open.png');
                openFileMenu.onClick = menu_OnClick;

                var saveFileMenu = fileMenu.addItemMenu('saveFileMenu', 'Save', '', 'Save.png');
                saveFileMenu.onClick = menu_OnClick;

                var saveAsFileMenu = fileMenu.addItemMenu('saveAsFileMenu', 'Save As', '', 'Save.png');
                saveAsFileMenu.onClick = menu_OnClick;

                fileMenu.addItemMenuSeparator('separator1');
                var printFileMenu = fileMenu.addItemMenu('printFileMenu', 'Print', '', 'Print.png');
                printFileMenu.onClick = menu_OnClick;

                fileMenu.addItemMenuSeparator('separator2');
                var exitFileMenu = fileMenu.addItemMenu('exitFileMenu', 'Exit', '', 'Exit.png');
                exitFileMenu.onClick = menu_OnClick;
                //################ FILE #################

                //################ EDIT #################
                var editMenu = oMenu.addItemMenu('editMenu', 'Edit', '', '');
                var undoMenu = editMenu.addItemMenu('undoMenu', 'Undo', '', 'Undo.png');
                undoMenu.onClick = menu_OnClick;

                var redoMenu = editMenu.addItemMenu('redoMenu', 'Redo', '', 'Redo.png');
                redoMenu.onClick = menu_OnClick;

                editMenu.addItemMenuSeparator('separator3');
                var cutMenu = editMenu.addItemMenu('cutMenu', 'Cut', '', 'Cut.png');
                cutMenu.onClick = menu_OnClick;

                var copyMenu = editMenu.addItemMenu('copyMenu', 'Copy', '', 'Copy.png');
                copyMenu.onClick = menu_OnClick;

                var pasteMenu = editMenu.addItemMenu('pasteMenu', 'Paste', '', 'Paste.png');
                pasteMenu.onClick = menu_OnClick;

                var deleteMenu = editMenu.addItemMenu('deleteMenu', 'Delete', '', 'Delete.png');
                deleteMenu.onClick = menu_OnClick;

                editMenu.addItemMenuSeparator('separator4');
                var findMenu = editMenu.addItemMenu('findMenu', 'Find', '', 'Find.png');
                findMenu.onClick = menu_OnClick;

                var replaceMenu = editMenu.addItemMenu('replaceMenu', 'Replace', '', 'Replace.png');
                replaceMenu.onClick = menu_OnClick;

                //################ EDIT #################

                //################ FORMAT #################
                var formatMenu = oMenu.addItemMenu('formatMenu', 'Format', '', '');
                var fontMenu = formatMenu.addItemMenu('fontMenu', 'Font', '', 'Font.png');
                fontMenu.onClick = menu_OnClick;

                //################ FORMAT #################

                //################ VIEW #################
                var viewMenu = oMenu.addItemMenu('viewMenu', 'View', '', '');
                var statusBarMenu = viewMenu.addItemMenu('statusBarMenu', 'Status bar', '', 'statusBar.png');
                statusBarMenu.onClick = menu_OnClick;

                //################ VIEW #################

                //################ HELP #################
                var helpMenu = oMenu.addItemMenu('helpMenu', 'Help', '', '');
                var helpTopicsMenu = helpMenu.addItemMenu('helpTopicsMenu', 'Help Topics', '', '');
                helpTopicsMenu.onClick = menu_OnClick;

                helpMenu.addItemMenuSeparator('separator5');
                var aboutMenu = helpMenu.addItemMenu('aboutMenu', 'About', '', '');
                aboutMenu.onClick = menu_OnClick;
                //################ HELP #################

                oMenu.createMenu(document.getElementById('recipientTD'));
            }

            function menu_OnClick(oItemMenu) {
                document.getElementById('clickMenuLabel').innerHTML = oItemMenu.text;
                document.getElementById('clickMenuImg').src = (oItemMenu.image == null || oItemMenu.image == '' ? 'Nulo.png' : oItemMenu.image);
            }

            function document_OnMouseUp() {
                hideAllComponentMenu();
            }

            document.onmouseup = document_OnMouseUp;
        </script>
    </head>
    <body onload="document_OnLoad();" >
        <table cellpadding="0" cellspacing="0" border="0" width="100%" >
            <tr>
                <td id="recipientTD">
                </td>
            </tr>
            <tr >
                <td align="center" valign="middle">
                    <img id="clickMenuImg" alt="" src="Nulo.png" />
                    <label id="clickMenuLabel"></label>
                </td>
            </tr>
        </table>
    </body>
</html>