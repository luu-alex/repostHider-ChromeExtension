// this is the code which will be injected into a given page...

(function() {

	// just place a div at top right
	// var div = document.createElement('div');
	// div.style.position = 'fixed';
	// div.style.top = 0;
	// div.style.right = 0;
	// div.textContent = 'Injected';
	// document.body.appendChild(div);
	var b = []
	var a = document.getElementsByClassName('soundContext__line');
	for (var i=0, l=a.length; i<l; i++){
		console.log(a[i].children.length)
		if (a[i].children.length==4){
			b.push(i);
		}
	}
	b.sort(function(a, b){return b-a});
		console.log(b);
	b.forEach(function(element){
		a[element].parentNode.parentNode.remove();
		console.log(element)
	})
})();