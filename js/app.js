// Start Jquery Area

$(document).ready(function(){
    
    // Start Header
    
        // Strat Navbar
            $('.navbuttons').click(function(){
                $(this).toggleClass('crossxs');
            });

        // End Navbar
    // End Header
});

// End Jquery Area


// -------------------------------------------------------------


// Start Javascript Area

    // Start Student Counter Section

    var getcountervalues = document.querySelectorAll('.countervalues')
    // console.log(getcountervalues);

    getcountervalues.forEach(function(getcountervalue){
        getcountervalue.textContent = 0;
        // console.log(getcountervalue);


    })

    // End Student Counter Section

// End Javascript Area