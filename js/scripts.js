$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();

    let inputs = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
    inputs.forEach(function (input) {
      let all = $("input#" + input).val();
      $("." + input).text(all);
    });

    $("#story").show();
  });
});




