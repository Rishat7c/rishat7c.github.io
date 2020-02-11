$(document).ready(function () {
    /* Home Section - btnContact transition content */
    $('#btnContact').hover(function () {
        $(this).text('xpan96@gmail.com');
    }, function () {
        $(this).text('Обратная связь');
    });

    /* Colors */
    var white = '#fff';
    var transparent = 'transparent';
    var lightBlue = 'lightskyblue';

    /* Chart Skills */
    var chartSkillsData = {
        type: 'radar',
        globals: {
            fontFamily: 'Raleway',
        },
        backgroundColor: transparent,
        plot: {
            aspect: 'area',
            alphaArea: '.6',
        },
        scaleK: {
            labels: ['HTML & CSS', 'PHP', 'Java', 'Laravel', 'JavaScript', 'SQL', '1C-Bitrix', 'Swift'],
            item: {
                fontColor: white,
                rules: [{
                    rule: '%i == 0 || %i == 1 || %i == 3 || %i == 5 || %i == 6',
                    fontColor: lightBlue
                }]
            },
            guide: {
                lineStyle: 'solid',
                lineColor: white,
                backgroundColor: transparent,
            },
            tick: {
                lineColor: white
            }
        },
        scaleV: {
            item: {
                visible: false
            },
            guide: {
                lineStyle: 'solid',
                lineColor: white,
                backgroundColor: transparent
            }
        },
        series: [{
            values: [50, 70, 40, 60, 30, 70, 60, 60],
            backgroundColor: lightBlue,
            lineColor: lightBlue,
            legendItem: {
                fontColor: lightBlue
            }
        }]
    }

    zingchart.render({
        id: 'chartSkills',
        data: chartSkillsData,
        height: '100%',
        width: '100%'
    });

});

document.querySelector('.open-menu').onclick = e => {
    e.currentTarget.classList.toggle('open-menu_active');
    e.currentTarget.nextElementSibling.classList.toggle('side-menu_opened')
}

document.body.addEventListener('click', e => {
    if (!e.target.closest('.open-menu') && !e.target.closest('.side-menu')) {
        document.querySelector('.open-menu').classList.remove('open-menu_active');
        document.querySelector('.open-menu').nextElementSibling.classList.remove('side-menu_opened')
    }
})

// steps active fade animation
const setVaribles = (() => {
    const steps = [...document.querySelectorAll('.steps__wrap')];
    return () => {
        steps.forEach(item => {
            new IntersectionObserver((entry) => {
                entry.forEach(({ isIntersecting, target }) => {
                    if (isIntersecting) {
                        showSteps(target)
                    }
                })
            }, {
                rootMargin: '0px',
                threshold: 0.5,
            }).observe(item)
        })
    }
})()

function showSteps(element) {
    element.classList.add('steps__wrap_active')
}
setVaribles()