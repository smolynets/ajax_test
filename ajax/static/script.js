function initJournal() {
    $('.day-box').click(function(event){
        var box = $(this);
    $.ajax(box.data('url'), {
      'type': 'POST',
      'async': true,
      'dataType': 'json',
      'data': {
        'name': box.data('name'),
        'cnt': box.data('cnt'),
        'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val()
      },
    
    });
    var t = box.data('cnt');
    console.log(t);
    location.reload(true);
    });
}

$(document).ready(function(){
    initJournal();
});
