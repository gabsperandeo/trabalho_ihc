$('#resp').click(function() {
  $('#eleicao').slideToggle("fast");

});

$('#resp2').click(function() {
  $('#prefeitos').slideToggle("fast");

});


$('#resp3').click(function() {
  $('#sobre').slideToggle("fast");

});

let x = window.matchMedia("(max-width: 768px)")

function teste(x){
    if(x.matches){
        $('#sobre').hide();
        $('#prefeitos').hide();
        $('#eleicao').hide();

    }
    
}

teste(x);
x.addListener(teste);
