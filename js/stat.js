'use strict';

window.renderStatistics = function (ctx, names, times) {
  var container = document.querySelector('.demo');
  var message = 'Ура, вы победили!\nВот список результатов:';

  var drawCloud = function (x, y, fill) {
    ctx.fillStyle = fill;
    ctx.fillRect(x, y, 420, 270);
  };

  var drawGraph = function () {
    var max = function () {
      return Math.max.apply(null, times).toFixed(0);
    };
    var histoHeight = 150; // высота гистограмы
    var histoX = 140;
    var step = histoHeight / max(); // цена деления по вертикали
    var columnIndent = 90; // размер одной колонки

    for (var i = 0; i < times.length; i++) {
      var name = names[i];
      var time = times[i];

      var height = step * time;

      if (name === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0,0,' + ((Math.random() * 3) * 50).toFixed(0) + ',1)';
      }
      ctx.fillRect(histoX + columnIndent * i, container.clientHeight - height - 60, 40, height);

      ctx.fillStyle = '#000';
      ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 20);
      ctx.fillText(time.toFixed(0), histoX + columnIndent * i, container.clientHeight - height - 70);
    }
  };

  drawCloud(110, 20, 'rgba(0, 0, 0, 0.7)');
  drawCloud(100, 10, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';

  message.split('\n').forEach(function (line, i) {
    ctx.fillText(line, 125, 50 + 20 * i);
  });

  drawGraph();
};

