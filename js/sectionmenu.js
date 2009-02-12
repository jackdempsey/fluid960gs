window.addEvent('domready', function() {

  //should add a check here to make sure stuff exisgs:w
  var accordion = new Accordion('a.menuitem', 'ul.submenu', {
    opacity: false,
    onActive: function(toggler, element){
      toggler.addClass('current');
      element.addClass('current');
    },
    onBackground: function(toggler, element){
      toggler.removeClass('current');
      element.removeClass('current');
    }
  }, $('section-menu'));

});
