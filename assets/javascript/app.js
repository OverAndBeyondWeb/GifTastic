var cartoonCharacters = [
  'bugs bunny',
  'roadrunner',
  'sponge bob'
];


cartoonCharacters.forEach(function(item) {
  var button = $('<button>');

  button.attr('data-name', item);
  button.addClass('btn btn-primary m-5 gif-btn');
  button.text(item);
  $('#buttons').append(button);

  
});

$('button[type=submit]').click(function(e) {
  e.preventDefault();

  var button = $('<button>');
  var val = $('#add').val();
  button.attr('data-name', val);
  button.addClass('btn btn-primary m-5 gif-btn');
  button.text(val);
  $('#buttons').append(button);
  val = '';
});

$('main').on('click', 'button.gif-btn', function() {
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
      cartoon.addClass('d-inline-block');
      var html = '<img class="gif" data-state="still" src="' + item.images.fixed_height_still.url +
                   '" data-still="' + item.images.fixed_height_still.url + '" data-animated="' + item.images.fixed_height.url + '"/>' +
                     '<div>rating: ' + item.rating + '</div>'  + ';'

      cartoon.html(html);
      
      $('#content').append(cartoon);
    });
  });
});

$('#content').on('click', '.gif', function() {
  console.log();
  if ($(this).data('state') === 'still') {
    $(this).data('state', 'animated');
    $(this).attr('src', $(this).data('animated'));
    console.log(true, $(this).attr('src'), $(this).data('animated'));
  } else {
    $(this).data('state', 'still');
    $(this).attr('src', $(this).data('still'));
  }
});

