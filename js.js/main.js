var $form = $('form'); // $=search the html for the 'form.'
var $todo = $('.todo'); //input
var $added = $('.added'); //list 
var $button = $('.addbutton'); //button that adds

$form.on('submit', function (e) { //an action that should happen when we submit the form

    e.preventDefault();
    var $li = $('<li>'); //making new li
    var $button = $('<button>'); //making a new button
    $button.html('X'); //connecting to html of button, putting text in the buttons html
    $button.addClass('check'); //adding rando class
    $button.on('click', function () { //whenever you click the button, the item will be removed.
        $li.remove(); 
    });   
    
    var $todoH2 = $('<h2>').html($todo.val()); //creates a new H2, also fills it with what is typed in
    $todoH2.append($button); //connecting the button to the H2
    
    $todoH2.on('click', function () {
    $todoH2.addClass ('strikethrough') ();
    });
    
    $li.append($todoH2); //adding the H2 to the li
    $added.append($li); //put li into list
  
});