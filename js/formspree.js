$(document).ready(function() {

    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        //get the name field value
        var name = $('#name').val();
        //get the name field value
        var email = $('#email').val();
        //get the comments
        var comments = $('#message').val();
                    
        //pretend we don't need validation
        
        //send to formspree
        $.ajax({
            url:'https://formspree.io/jdmwoods@googlemail.com',
            method:'POST',
            data:{
                name:name,
                 email:email,
                comments:comments,
                _subject:'joshuawoods.uk Form Submission',
            },
            dataType:"json",
            success:function() {
                console.log('success'); 
                $('#contactform').hide();
                $('#thankyouBlock').show();
            }   

        });     
        
    });

}); 