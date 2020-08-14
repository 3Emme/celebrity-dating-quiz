$(document).ready(function() {

  $("select#interest").change(function(event) {
    const interest = $("select#interest").val();

    if (interest === "love"){
      $("#hate-scale").hide()
      $("#love-scale").show()
      } else {
      $("#love-scale").hide()
      $("#hate-scale").show();
      }

    event.preventDefault()
  });

  $("form#horse").submit(function(event) {
    const love = parseInt($("input#love").val())
    const hate = parseInt($("input#hate").val());
    const interest = $("select#interest").val();

      if (interest === "love" && love > 5){
      $("#foxx").show();
      } else if (interest ==="hate" && hate > 5){
      $("#stewart").show();
      } else if (interest === "hate" || interest === "love"){
      $("#busey").show();
      }

      if (!interest || !love && !hate){
      alert('Please enter how strongly you feel about your love/hate.');
    }

    event.preventDefault();
  });
});
