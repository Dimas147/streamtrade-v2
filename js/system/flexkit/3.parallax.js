// Parallax(if you use imageonly for background image)
function _parallax() {
    if (document.getElementsByClassName('parallax').length && document.getElementsByClassName('take-from-widget').length) {
        var i = 0, href, listWhichTake = document.getElementsByClassName('take-from-widget');
        for (; i < listWhichTake.length; i++) {
            href = listWhichTake[i].childNodes[1].src;
            listWhichTake[i].style.backgroundImage = 'url(' + href + ')';
        }
    }
}
_parallax();
$(".show-more").click(function () {
    setTimeout(function(){
        console.log("clicked");
        _parallax();
    }, 1000);
});