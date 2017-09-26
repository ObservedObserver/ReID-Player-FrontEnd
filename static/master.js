sec2std = function(sec){
    sec = Number(sec)
    var h,m,s;
    h = parseInt(sec / 3600);
    sec -= h*3600;
    m = parseInt(sec / 60);
    sec -= m*60;
    s = parseInt(sec);
}
