PullToRefresh.init({
  mainElement: 'body',
  onRefresh: function(){ window.location.reload(); }
});

// função para atualizar a frase no onload da página

window.onload = function() {
  //para pegar qualquer div ou frase
	var div = document.getElementsByClassName('frase');
  // vai criar uma array vazia de todas as frases do banco-de-frases
	var arr = [];
  // função que vai escolher uma frase aleatória para
	var randomArray = function(array){
		return array[Math.floor(Math.random() * array.length)];
	}
	for(var i = 0; i < div.length; i++) {
		arr.push(div[i].cloneNode(true));
	}
	var random = randomArray(arr);
	var tudo = document.getElementById('banco-de-frases');
	tudo.innerHTML = '';
	tudo.style.display = 'block';
	tudo.appendChild(random);
}

// função para copiar a frase
function copiar(){
  var text = document.getElementById('texto');
  var range = document.createRange();
  //marca o texto e copia
  range.selectNode(text);
  window.getSelection().addRange(range);
  document.execCommand('copy');
};
