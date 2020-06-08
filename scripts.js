$('.button1').on('click', () => {
    console.log ('Yeah, you clicked me');
  });
$('.button2').on('click', () => {
    $('.button1').text('hello world');
  });
  

  $('.button3').on('click', () => {
    var chosenColor = document.getElementById("color").value;
    $ ('button').css('backgroundColor', chosenColor);
  });

