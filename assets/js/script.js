$(document).ready(function () {
    /* Home Section - btnContact transition content */
    $('#btnContact').hover(function () {
        $(this).text('xpan96@gmail.com');
    }, function () {
        $(this).text('CONTACT ME');
    });

    /* Data for Zing Chart - chartSkills in Skills Section */
    ZC.LICENSE = ['7b185ca19b4be2cba68fdcd369c663a9'];

    /* Colors */
    var white = '#fff';
    var transparent = 'transparent';
    var lightRed = '#e84855';

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
            labels: ['HTML & CSS', 'PHP', 'Java', 'Laravel', 'JavaScript', 'MySQL', '1C-Bitrix', 'Swift'],
            item: {
                fontColor: white,
                rules: [{
                    rule: '%i == 0 || %i == 1 || %i == 3 || %i == 5 || %i == 6',
                    fontColor: lightRed
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
            backgroundColor: lightRed,
            lineColor: lightRed,
            legendItem: {
                fontColor: lightRed
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