/* exported $editor */
var $editor = (function() {
  var $DOM = $(''
      + '<div class="notepad-editor">'
        + '<textarea spellcheck="false"></textarea>'
      + '</div>');

  var $textArea = $DOM.find('textarea');
  
  $textArea.css({ 
    'font-family':'Agency FB',
    'font-style':'italic',
    'font-weight':'bold',
    'font-size':'20px'
  });
  
  function setWords(family,style,weight,size){
    $textArea.css({ 
      'font-family':family,
      'font-style':style,
      'font-weight':weight,
      'font-size':size
    });
    
  }
  

  function resize(isBig) {
    if(isBig) {
      $DOM.css({bottom: '21px'});
    } else {
      $DOM.css({bottom: '0'});
    }
  }

  function show() {
    $('body').append($DOM);
    $textArea.trigger('focus');
  }

  return {show: show, resize: resize,setWords:setWords};
}());
