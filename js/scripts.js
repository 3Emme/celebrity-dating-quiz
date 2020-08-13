$(document).ready(function() {
  $("form#horse").submit(function(event) {
    const love = parseInt($("input#love").val());
    const hate = parseInt($("input#hate").val());
    const interest = $("select#interest").val();

    if (love) {
      let quote = (100 - love) * 3;
      if (interest === 'love' && love > 5) {
        quote += 50;
      }

      //if (interest === "love" && love > 5){
      //$("#date1").show();
      //} else if (interest ==="hate" && hate > 5){
      //$("date3").show();
      //} else {
      //$()
      //
      $("#rate").text(quote);
      $("#quote").show();
    } else {
      alert('Please enter how strongly you feel about your love/hate.');
    }

    event.preventDefault();
  });
});
