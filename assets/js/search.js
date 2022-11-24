/* super-search
Author: Kushagra Gour (http://kushagragour.in)
MIT Licensed
*/
(function () {
	var searchFile = '/feed.xml',
		searchEl,
		searchInputEl,
		searchResultsEl,
		currentInputValue = '',
		lastSearchResultHash,
		posts = [],
		resultsContainer;

	// Changes XML to JSON
	// Modified version from here: http://davidwalsh.name/convert-xml-json
	function xmlToJson(xml) {
		// Create the return object
		var obj = {};
		if (xml.nodeType == 3) { // text
			obj = xml.nodeValue;
		}

		// do children
		// If all text nodes inside, get concatenated text from them.
		var textNodes = [].slice.call(xml.childNodes).filter(function (node) { return node.nodeType === 3; });
		if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
			obj = [].slice.call(xml.childNodes).reduce(function (text, node) { return text + node.nodeValue; }, '');
		}
		else if (xml.hasChildNodes()) {
			for(var i = 0; i < xml.childNodes.length; i++) {
				var item = xml.childNodes.item(i);
				var nodeName = item.nodeName;
				if (typeof(obj[nodeName]) == "undefined") {
					obj[nodeName] = xmlToJson(item);
				} else {
					if (typeof(obj[nodeName].push) == "undefined") {
						var old = obj[nodeName];
						obj[nodeName] = [];
						obj[nodeName].push(old);
					}
					obj[nodeName].push(xmlToJson(item));
				}
			}
		}
		return obj;
	}

	function getPostsFromXml(xml) {
		var json = xmlToJson(xml);
		// Atom 1.0 format
		if (json.entry && json.entry instanceof Array) {
			return json.entry;
		}
		// Atom 2.0 format
		else {
			return json.channel.item;
		}
	}

	window.openSearch = function openSearch (){
		const t = document.getElementById("js-search__input");
		t.classList.toggle("search-open");
		t.classList.toggle("search-close");
		if (t.classList.contains("search-open")){
			setTimeout(function () {
				t.focus();
			}, 210);
		} else {		
			resultsContainer.classList.add("results-container-closed")
			resultsContainer.classList.remove("results-container-open")
			t.value = '';
			t.blur();
		}
	}

	function handleInput() {
		var currentResultHash, d;

		currentInputValue = (searchInputEl.value + '').toLowerCase();
		if (!currentInputValue || currentInputValue.length < 3) {
			lastSearchResultHash = '';
			resultsContainer.classList.add("results-container-closed")
			resultsContainer.classList.remove("results-container-open")
			
			return;
		}

		var matchingPosts = posts.filter(function (post) {
			// Search `description` and `content` both to support 1.0 and 2.0 formats.
			if ((post.title + '').toLowerCase().indexOf(currentInputValue) !== -1 || ((post.description || post.content) + '').toLowerCase().indexOf(currentInputValue) !== -1) {
				return true;
			}
		});

		currentResultHash = matchingPosts.reduce(function(hash, post) { return post.title + hash; }, '');
		if (matchingPosts.length && currentResultHash !== lastSearchResultHash) {
			searchResultsEl.classList.remove('is-hidden');
			searchResultsEl.innerHTML = matchingPosts.map(function (post) {
				return '<a class="app-card w-inline-block" href='+post.link+'><img src="'+post.icon+'" loading="lazy" alt="app icon" class="app-icon" <div class="app-card-title"> <div class="subheader">games</div></div><h5 class="h5">'+post.title+'</h5><div class="label">'+post.excerpt+'</div></a>'
		
			}).join('');
		}
		lastSearchResultHash = currentResultHash;

		if (searchInputEl.value != '' && matchingPosts.length > 0) {		
			resultsContainer.classList.add("results-container-open")
			resultsContainer.classList.remove("results-container-closed")
		} else {
			resultsContainer.classList.add("results-container-closed")
			resultsContainer.classList.remove("results-container-open")
			
		}
		
	}

	function init(options) {
		searchFile = options.searchFile || searchFile;
		searchEl = document.querySelector(options.searchSelector || '#js-super-search');
		searchInputEl = document.querySelector(options.inputSelector || '#js-super-search__input');
		searchResultsEl = document.getElementById("search-results");
		resultsContainer = document.getElementById("results-container");

		var xmlhttp=new XMLHttpRequest();
		xmlhttp.open('GET', searchFile);
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState != 4) return;
			if (xmlhttp.status != 200 && xmlhttp.status != 304) { return; }
			var node = (new DOMParser).parseFromString(xmlhttp.responseText, 'text/xml');
			node = node.children[0];
			posts = getPostsFromXml(node);
		}
		xmlhttp.send();

		// Toggle on ESC key
		window.addEventListener('keyup', function onKeyPress(e) {
			if (e.which === 27) {
				openSearch();
			}
		});
		// Open on '/' key
		window.addEventListener('keypress', function onKeyPress(e) {
			if (e.which === 47 && !searchInputEl.classList.contains('search-open')) {
				openSearch();
			}
		});

		searchInputEl.addEventListener('input', function onInputChange() {
			handleInput();
		});
	}

	window.superSearch = init;

})();
