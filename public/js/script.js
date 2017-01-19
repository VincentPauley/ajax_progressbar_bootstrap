var progressElem = $('#progress-indicator');

$('#get-eggs').on('click', function() {
    console.log('send request for eggs!');
    $.ajax({
        type : 'GET',
        dataType : 'json',
        url : 'http://localhost:8080/get-eggs',
        xhr : function() {
            var xhr = new window.XMLHttpRequest();
            //Download progress
            xhr.addEventListener("progress", function (evt) {
                console.log(evt.lengthComputable);
                if (evt.lengthComputable) {
                    var percentComplete = evt.loaded / evt.total;
                    progressElem.html(Math.round(percentComplete * 100) + "%");
                }
            }, false);
            return xhr;
        },
        success : function( r ) {
            console.log( r );
        },
        error : function( req, res, err ) {
            console.error( err );
        }
    });
});
