var cartoonCharacters = [
  'bugs bunny',
  'roadrunner',
  'sponge bob'
];

cartoonCharacters.forEach(function(item) {
  var button = $('<button>');

  button.attr('data-name', item);
  button.addClass('btn btn-primary m-5');
  button.text(item);
  $('body').append(button);

  button.click(function() {
    console.log($(this).attr('data-name'));
  });
});