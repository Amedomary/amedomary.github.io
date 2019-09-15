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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aWFscy90ZXh0LWJsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5kZWZpbmUoWydqcXVlcnknXSwgZnVuY3Rpb24gKCQpIHtcclxuICAgIGNvbnN0ICRociA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFkLWxpbmUnKTtcclxuICAgIGNvbnN0ICR0ZXh0QmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdiLXRleHQtYmxvY2snKVswXTtcclxuICAgIGNvbnN0IHRleHRCbG9ja1Bvc2l0aW9uID0gJHRleHRCbG9jay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBwYWdlWU9mZnNldDtcclxuICAgIGNvbnN0ICRidG5MaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWQtYnRuLWxpbmUnKTtcclxuICAgIGNvbnN0ICRidG5Db2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFkLWJ0bi1jb2xvcicpO1xyXG4gICAgY29uc3QgJGJ0blNpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhZC1idG4tc2l6ZScpO1xyXG4gICAgY29uc3QgJGh0bWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdO1xyXG4gICAgY29uc3QgJHRvVG9wU2Nyb2xsQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0by10b3Atc2Nyb2xsZXInKVswXTtcclxuXHJcblxyXG4gICAgLy8gZnVuY3Rpb25zXHJcbiAgICBmdW5jdGlvbiBwb3NpdGlvbkxpbmUoZSkge1xyXG4gICAgICAgICRoci5zdHlsZS50b3AgPSBgJHtlLnl9cHhgO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZUNvbG9yVGhlbWUoKSB7XHJcbiAgICAgICAgc3dpdGNoICgkaHRtbC5kYXRhc2V0LnRoZW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JsdWUnOlxyXG4gICAgICAgICAgICAgICAgJGh0bWwuZGF0YXNldC50aGVtZSA9ICdkYXJrJ1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdkYXJrJzpcclxuICAgICAgICAgICAgICAgICRodG1sLmRhdGFzZXQudGhlbWUgPSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAkaHRtbC5kYXRhc2V0LnRoZW1lID0gJ2JsdWUnXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlRm9udFNpemUoKSB7XHJcbiAgICAgICAgc3dpdGNoICgkdGV4dEJsb2NrLmRhdGFzZXQuYWN0aXZlU2l6ZSkge1xyXG4gICAgICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgICAgICAgICR0ZXh0QmxvY2suZGF0YXNldC5hY3RpdmVTaXplID0gJ20nXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ20nOlxyXG4gICAgICAgICAgICAgICAgJHRleHRCbG9jay5kYXRhc2V0LmFjdGl2ZVNpemUgPSAnbCdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICR0ZXh0QmxvY2suZGF0YXNldC5hY3RpdmVTaXplID0gJ3MnXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DbGlja0NvbG9yKCkge1xyXG4gICAgICAgIHRvZ2dsZUNvbG9yVGhlbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrU2l6ZSgpIHtcclxuICAgICAgICB0b2dnbGVGb250U2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2xpY2tMaW5lKCkge1xyXG4gICAgICAgIHN3aXRjaCAoJHRleHRCbG9jay5kYXRhc2V0LmxpbmUpIHtcclxuICAgICAgICAgICAgY2FzZSAneWVzJzpcclxuICAgICAgICAgICAgICAgICR0ZXh0QmxvY2suZGF0YXNldC5saW5lID0gJ25vJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgJHRleHRCbG9jay5kYXRhc2V0LmxpbmUgPSAneWVzJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzY3JvbGxUb1RvcCgpIHtcclxuICAgICAgICAkcGFnZVdpdGhTY3JvbGwuc2Nyb2xsVG9wKDApO1xyXG4gICAgfVxyXG5cclxuICAgICRidG5Db2xvci5vbmNsaWNrID0gb25DbGlja0NvbG9yO1xyXG4gICAgJGJ0blNpemUub25jbGljayA9IG9uQ2xpY2tTaXplO1xyXG4gICAgJGJ0bkxpbmUub25jbGljayA9IG9uQ2xpY2tMaW5lO1xyXG4gICAgJHRvVG9wU2Nyb2xsQmxvY2sub25jbGljayA9IHNjcm9sbFRvVG9wO1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcG9zaXRpb25MaW5lKTtcclxuXHJcblxyXG4gICAgbGV0ICRwYWdlV2l0aFNjcm9sbCA9ICQoJy5iLXBhZ2Utd3JhcHBlci0tc2Nyb2xsJyk7XHJcbiAgICBsZXQgc2Nyb2xsUG9zaXRpb25Ub3A7XHJcbiAgICAvLyDRgdC60YDQvtC70LjQvCDRgdGC0YDQsNC90LjRhtGDIFxyXG4gICAgJHBhZ2VXaXRoU2Nyb2xsLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Nyb2xsUG9zaXRpb25Ub3AgPSAkcGFnZVdpdGhTY3JvbGwuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGxQb3NpdGlvblRvcCA+IHRleHRCbG9ja1Bvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICR0b1RvcFNjcm9sbEJsb2NrLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICR0b1RvcFNjcm9sbEJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pOyAgICBcclxufSk7XHJcbiJdLCJmaWxlIjoicGFydGlhbHMvdGV4dC1ibG9jay5qcyJ9
