let htmlTemp = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" id="viewport" content="target-densitydpi=device-dpi,width=750,user-scalable=no" />
    <title>Document</title>
    <script src="//static.ws.126.net/163/activity/tools/newsapp-share/1.5.0/newsapp-share.min.js"></script>
    <script type="text/javascript"
        src="https://fps-pro.ws.126.net/fps-pro/frontends/libs/jquery/jquery-3.2.1.min.js"></script>
</head>

<body>

</body>
<script type='text/javascript'>
    (function (w, d, s, n) {
        var f = d.getElementsByTagName(s)[0], k = d.createElement(s); k.async = true;
        k.src = '//static.ws.126.net/163/frontend/antnest/' + n + '.js';
        f.parentNode.insertBefore(k, f);
    })(window, document, 'script', 'NTM-FNE8K648-14');
</script>

</html>
`
let jsTemp = `import '../css/index.less';`
exports.htmlTemp = htmlTemp;
exports.jsTemp = jsTemp;