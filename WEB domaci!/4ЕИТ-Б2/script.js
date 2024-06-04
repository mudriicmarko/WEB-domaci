let pas = document.getElementById('pasZvuk');
let patka = document.getElementById('patkaZvuk');
let macka = document.getElementById('mackaZvuk');
let pile = document.getElementById('pileZvuk');
let krava = document.getElementById('kravaZvuk');
 
function playSound(id) {
  switch (id) {
    case 'pas':
      pas.play();
      break;
    case 'patka':
      patka.play();
      break;
    case 'macka':
      macka.play();
      break;
    case 'pile':
      pile.play();
      break;
    case 'krava':
      krava.play();
      break;
  }
}
 
function stopSound(id) {
  switch (id) {
    case 'pas':
      pas.pause();
      break;
    case 'patka':
      patka.pause();
      break;
    case 'macka':
      macka.pause();
      break;
    case 'pile':
      pile.pause();
      break;
    case 'krava':
      krava.pause();
      break;
  }
}
 
function openWindow(id) {
    switch (id) {
      case 'pas':
        window.open('./pages/' + id + '.html',
            'Pas',
            'width=300px,height=300px');
        break;
      case 'patka':
        window.open(
            './pages/' + id + '.html',
            'Patka',
            'width=300px,height=300px'
        );
        break;
      case 'macka':
        window.open(
          './pages/' + id + '.html',
            'Macka',
            'width=300px,height=300px'
        );
        break;
      case 'pile':
        window.open(
          './pages/' + id + '.html',
            'Pile',
            'width=300px,height=300px'
        );
        break;
      case 'krava':
        window.open(
          './pages/' + id + '.html',
            'Krava',
            'width=300px,height=300px'
        );
        break;
    }
  }