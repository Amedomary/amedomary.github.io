// ====================

define([], function () {
    const $hr = document.getElementById('read-line');
    const $textBlock = document.getElementsByClassName('b-text-block')[0];
    const $btnLine = document.getElementById('read-btn-line');
    const $btnColor = document.getElementById('read-btn-color');
    const $btnSize = document.getElementById('read-btn-size');
    const $html = document.getElementsByTagName('html')[0];

    // functions
    function positionLine(e) {
        $hr.style.top = `${e.y}px`;
    }

    function toggleColorTheme() {
        switch ($html.dataset.theme) {
            case 'blue':
                $html.dataset.theme = 'dark'
                break;

            case 'dark':
                $html.dataset.theme = 'light'
                break;

            default:
                $html.dataset.theme = 'blue'
                break;
        }
    }

    function toggleFontSize() {
        switch ($textBlock.dataset.activeSize) {
            case 's':
                $textBlock.dataset.activeSize = 'm'
                break;

            case 'm':
                $textBlock.dataset.activeSize = 'l'
                break;

            default:
                $textBlock.dataset.activeSize = 's'
                break;
        }
    }

    function onClickColor() {
        toggleColorTheme();
    }

    function onClickSize() {
        toggleFontSize();
    }

    function onClickLine() {
        switch ($textBlock.dataset.line) {
            case 'yes':
                $textBlock.dataset.line = 'no';
                break;
        
            default:
                $textBlock.dataset.line = 'yes';
                break;
        }
    }

    $btnColor.onclick = onClickColor;
    $btnSize.onclick = onClickSize;
    $btnLine.onclick = onClickLine;
    addEventListener('mousemove', positionLine);
});
