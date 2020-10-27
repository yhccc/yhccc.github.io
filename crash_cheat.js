var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/favicon.png");
        document.title = '�q(��A��`)�r ҳ������� ~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/images/favicon.png");
        document.title = '(?>��<*?) ���ֺ���~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});