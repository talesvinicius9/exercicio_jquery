$(document).ready(function() {
    $('form :submit').click(function(e) {
    e.preventDefault();
    var linha = $("input[id='nome-tarefa']").val();
        var li = '<li>'+ linha +'</li>';
        $('#text').append(li);
        $('#nome-tarefa').each(function(){
            $(this).val('');
        });
    });
    $('form').on('click', 'li',function() {
        $(this).addClass('selected').css('text-decoration', 'line-through');
    });     
});
