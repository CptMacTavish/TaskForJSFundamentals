//////////////////task1 Done/////////////////////////////

let head = $("h2.head");

head.css("background-color", "green");
head.children(".inner").css("font-size", "35px");

////////////////task2 Done//////////////////////////////

if($("a[href^='https://']")) {
    $("a[href^='https://']").attr("target", "_blank");
};

//////////////task3 Done////////////////////////////////

$("h3").each(function() {
    $(this).next("div").insertBefore(this);
  });

///////////////task4 Done////////////////////////////////////////

$('input[type="checkbox"]').on('change', function() {
  
  let checkedCount = $('input[type="checkbox"]:checked').length;

 
  if (checkedCount >= 3) {
    $('input[type="checkbox"]:not(:checked)').prop('disabled', true);
  } 
  else {
    $('input[type="checkbox"]').prop('disabled', false);
  }
});