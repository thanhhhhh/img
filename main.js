window.addEventListener('DOMContentLoaded', function() {
    let input = document.getElementById('fileInput');
    
    input.addEventListener('change',function(e){
        let reader = new FileReader();
        let file = e.srcElement.files[0];
        reader.onload = function(e){
            console.log(`done loading`);
        }
        reader.readAsText(file);
        console.log(e);

    });

    console.log('adsfasdf')

});