(function () {
	var originalQuerySelectorAll = document.querySelectorAll
	document.querySelectorAll = function (s) { 
		return Array.prototype.slice.call(originalQuerySelectorAll.call(document, s)); 
	};
})();