

/* Counter section*/
let valueDisplays = document.querySelectorAll('.num');
let interval = 3000;

valueDisplays.forEach(valueDisplay =>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;

        if(startValue == endValue){
            clearInterval(counter);
        }

    }, duration)
});

/* Skills section*/

var delay = 300;
$('.progress-bar').each(function(i) {
  $(this).delay(delay * i).animate({
    width: $(this).attr('aria-valuenow') + '%'
  }, delay);

});
