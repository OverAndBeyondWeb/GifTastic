var cartoonCharacters = [
  'bugs bunny',
  'roadrunner',
  'sponge bob'
];
var url = 'https://api.giphy.com/v1/gifs/search?api_key=rgsRNl9LWGRa8eUxe0kdPR44lKJ23ETI&q=&limit=25&offset=0&rating=G&lang=en&q=bugs+bunny';

cartoonCharacters.forEach(function(item) {
  var button = $('<button>');

  button.attr('data-name', item);
  button.addClass('btn btn-primary m-5 gif');
  button.text(item);
  $('main').append(button);

  
});

$('button[type=submit]').click(function(e) {
  e.preventDefault();

  var button = $('<button>');
  var val = $('#add').val();
  button.attr('data-name', val);
  button.addClass('btn btn-primary m-5 gif');
  button.text(val);
  $('main').append(button);
  val = '';
});

$('main').on('click', 'button.gif', function() {
  console.log($(this).attr('data-name'));
  $.ajax({
    url: url,
    method: 'GET'
  })
  .then(function(response) {
    console.log(response);
  });
});