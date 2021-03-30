function filter(os) {
    $(".app").each(function(index) {
        if (!$(this).hasClass("requires")) {
            return;
        }
        if ($(this).hasClass(os)) {
            return;
        }
        
        $(this).addClass(" incompatible");
    });
}

$(document).ready(function(){
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(ua)) {
        filter("android");
        return;
    } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
        filter("ios");
        return;
    }

    var os = window.navigator.platform;
    if (os == "win32") {
        filter("windows");
    } else if (os == "MacIntel") {
        filter("darwin");
    } else if (os == "Linux i686" || os == "Linux x86_64" ||
               os == "FreeBSD i386" || os == "FreeBSD amd64") {
        filter("linux");
    }
});
