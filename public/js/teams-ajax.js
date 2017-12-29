$('.delete-link').click(function(e){
  e.preventDefault()
  $.ajax({
    url: $(this).attr('href'),
    method: 'DELETE',
  }).done(function(data){
    window.location.href = '/teams';
  });
});

$('.edit-form').submit(function(e){
  e.preventDefault();
  $.ajax({
    method: 'PUT',
    url: $(this).attr('action'),
    data: {
      name: $('#new-name').val(),
      members: $('#members').val()
    }
  }).done(function(response){
    window.location.href = '/teams';
  });
});
