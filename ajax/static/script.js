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
    $('.menu-container ul').append('<li>'+ box.data('name') +'</li');
    });
}

function showingMenu(){
        $('.basket-items').toggleClass('hidden');
    }

    $('.menu-container').mouseover(function(){
        showingMenu();
    })

    $('.menu-container').mouseout(function(){
        showingMenu();
    })

$(document).ready(function(){
    initJournal();
});
