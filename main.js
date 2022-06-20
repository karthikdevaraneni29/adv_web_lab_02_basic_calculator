
(function($) {
    $.fn.displayVal = function(val) {
        let existingVal = $("#displayOperation").val();
        $("#displayOperation").val(existingVal += val);
    };

    $.fn.execute = function() {
        try { 
            $().clearAll(eval($("#displayOperation").val()))
        } catch(e){
            console.log(e.message); 
        } 
    }
    $.fn.clearAll = function(val){
        $("#displayOperation").val(val || "");
    }

    $.fn.trigonometricFn = function(val){
        if(val=="sin"){
            $("#displayOperation").val(Math.sin($("#displayOperation").val()));
        }
        if(val=="cos"){
            $("#displayOperation").val(Math.cos($("#displayOperation").val()));
        }
        if(val=="inverse"){
            $("#displayOperation").val(eval(1 / $("#displayOperation").val()));
        }
        if(val=="sqrt"){
            $("#displayOperation").val(Math.sqrt($("#displayOperation").val()));
        }
    }
})(jQuery);
