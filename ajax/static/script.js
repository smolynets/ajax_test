function initJournal() {
    $('.day-box').click(function(event){
        var box = $(this);
    $.ajax(box.data('url'), {
      'type': 'POST',
      'async': true,
      'dataType': 'json',
      'data': {
        'name': box.data('name'),
        'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val()
      },
    
    });
    });
}

$(document).ready(function(){
    initJournal();
});
