$(document).ready(function() {

  $("select#interest").select(function(event) {
    const interest = $("select#interest").val();

    if (interest === "love"){
      $("#love-scale").show();
      } else {
      $("#hate-scale").show();
      }
      
    event.preventDefault();
  });

  $("form#horse").submit(function(event) {
    const love = parseInt($("input#love").val());
    const hate = parseInt($("input#hate").val());
    const interest = $("select#interest").val();

      if (interest === "love" && love > 5){
      $("#foxx").show();
      } else if (interest ==="hate" && hate > 5){
      $("#stewart").show();
      } else {
      $("#busey").show();
      }

      if (!interest || !love || !hate){
      alert('Please enter how strongly you feel about your love/hate.');
    }

    event.preventDefault();
  });
});
