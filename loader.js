
$(function () {
    $.ajax({
        dataType: "text",
        url: 'https://michelelucini.github.io/lolsquare/version.txt', // window.location.href
        cache: false,
        success: function (data) {
            // Bundle css - <link rel="stylesheet" href="lolsquare.css" />
            var link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = 'lolsquare.css?' + data;
            document.head.appendChild(link);

            // Bundle js - <script defer="defer" src="lolsquare.js"></script>
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.defer = true;
            script.src = 'lolsquare.js?' + data;
            // link.crossOrigin = "anonymous";
            document.head.appendChild(script);
        }
    });
});
