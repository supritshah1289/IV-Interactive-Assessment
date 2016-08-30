$(document).ready(function(){
  console.log("connected")
  // $("#my-menu").mmenu();

  //hiding form

  // $('#send').click(function(){
  //   console.log('clicked');
  //   $('#hide').hide();
  // })

  $(".ajax").submit(function(){
    var data = {
      "action" : "test"
    }

    data = $(this).serialize() + "&" +$.param(data);
    $.ajax({
      url: 'response.php',
      type: 'POST',
      dataType: 'json',
      data: data,
    })
    .done(function() {
      console.log("success");
      alert("success")
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });


  });

});
