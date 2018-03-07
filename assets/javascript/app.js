var cartoonCharacters = [
  'bugs bunny',
  'roadrunner',
  'sponge bob'
];


cartoonCharacters.forEach(function(item) {
  var button = $('<button>');

  button.attr('data-name', item);
  button.addClass('btn btn-primary m-5 gif');
  button.text(item);
  $('#buttons').append(button);

  
});

$('button[type=submit]').click(function(e) {
  e.preventDefault();

  var button = $('<button>');
  var val = $('#add').val();
  button.attr('data-name', val);
  button.addClass('btn btn-primary m-5 gif');
  button.text(val);
  $('#buttons').append(button);
  val = '';
});

$('main').on('click', 'button.gif', function() {
  console.log($(this).attr('data-name'));
  $('#content').empty();
  var character = $(this).attr('data-name');
  var url = 'https://api.giphy.com/v1/gifs/search?api_key=rgsRNl9LWGRa8eUxe0kdPR44lKJ23ETI&q=&limit=10&offset=0&lang=en&q=' + character + ';'
  $.ajax({
    url: url,
    method: 'GET'
  })
  .then(function(response) {
    console.log(response);

    var gifArray = response.data;

    gifArray.forEach(function(item) {
      var cartoon = $('<div>');
      var html = '<img src="' + item.images.fixed_height.url + '"/>';

      cartoon.html(html);
      
      $('#content').append(html);
    });

    

    
  });
});