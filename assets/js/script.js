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