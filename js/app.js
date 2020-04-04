/*global $menubar,$editor*/
/*eslint no-undef: "error"*/

var note = {};               
note.config = {
  'appContainer': '.notepad-app'
};   

$(function() {
  $menubar.show(note.menuData);
  $editor.show();
});

