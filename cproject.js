$(document).ready(function() {

    // Attach a keydown event listener to the document
    $(document).keydown(function(event) {
        if (event.shiftKey) {
            $('nav').focus();
        }
    });

    // Add more event listeners here as needed

});