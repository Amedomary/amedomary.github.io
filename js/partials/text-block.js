// ====================

define(['jquery'], function ($) {
    const $hr = document.getElementById('read-line');
    const $textBlock = document.getElementsByClassName('b-text-block')[0];
    const textBlockPosition = $textBlock.getBoundingClientRect().top + pageYOffset;
    const $btnLine = document.getElementById('read-btn-line');
    const $btnColor = document.getElementById('read-btn-color');
    const $btnSize = document.getElementById('read-btn-size');
    const $html = document.getElementsByTagName('html')[0];
    const $toTopScrollBlock = document.getElementsByClassName('to-top-scroller')[0];


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

    function scrollToTop() {
        // console.log($pageWithScroll.scrollTop);
        $pageWithScroll.scrollTop(0);
    }

    $btnColor.onclick = onClickColor;
    $btnSize.onclick = onClickSize;
    $btnLine.onclick = onClickLine;
    $toTopScrollBlock.onclick = scrollToTop;
    addEventListener('mousemove', positionLine);


    let $pageWithScroll = $('.b-page-wrapper--scroll');
    let scrollPositionTop;
    // скролим страницу 
    $pageWithScroll.scroll(function () {
        scrollPositionTop = $pageWithScroll.scrollTop();

        if (scrollPositionTop > textBlockPosition) {
            $toTopScrollBlock.classList.add("show");
        } else {
            $toTopScrollBlock.classList.remove("show");            
        }
    });    
});
