
$(function () {
    $.ajax({
        dataType: "text",
        url: (window.location.href + '/version.txt').replace("//", "/"),
        cache: false,
        success: function (data) {
            // Bundle css - <link rel="stylesheet" href="https://static.lolsquare.com/lolsquare.css" />
            var link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = 'https://static.lolsquare.com/lolsquare.css?' + data;
            document.head.appendChild(link);

            // Bundle js - <script defer="defer" src="https://static.lolsquare.com/lolsquare.js"></script>
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.defer = true;
            script.src = 'https://static.lolsquare.com/lolsquare.js?' + data;
            link.crossOrigin = "anonymous";
            document.head.appendChild(script);
        }
    });
});
