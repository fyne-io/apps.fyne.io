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
		posts = [];

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

	window.toggleSearch = function toggleSearch() {
		searchEl.classList.toggle('is-active');
		if (searchEl.classList.contains('is-active')) {
			// while opening
			searchInputEl.value = '';
		} else {
			// while closing
			searchResultsEl.classList.add('is-hidden');
		}
		setTimeout(function () {
			searchInputEl.focus();
		}, 210);
	}

	function handleInput() {
		var currentResultHash, d;

		currentInputValue = (searchInputEl.value + '').toLowerCase();
		if (!currentInputValue || currentInputValue.length < 3) {
			lastSearchResultHash = '';
			searchResultsEl.classList.add('is-hidden');
			return;
		}
		searchResultsEl.style.offsetWidth;

		var matchingPosts = posts.filter(function (post) {
			// Search `description` and `content` both to support 1.0 and 2.0 formats.
			if ((post.title + '').toLowerCase().indexOf(currentInputValue) !== -1 || ((post.description || post.content) + '').toLowerCase().indexOf(currentInputValue) !== -1) {
				return true;
			}
		});
		if (!matchingPosts.length) {
			searchResultsEl.classList.add('is-hidden');
		}
		currentResultHash = matchingPosts.reduce(function(hash, post) { return post.title + hash; }, '');
		if (matchingPosts.length && currentResultHash !== lastSearchResultHash) {
			searchResultsEl.classList.remove('is-hidden');
			searchResultsEl.innerHTML = matchingPosts.map(function (post) {				
				return '<a class="app-card w-inline-block" href='+post.link+'><img src="'+post.icon+'" loading="lazy" alt="app icon" class="app-icon" <div class="app-card-title"> <div class="subheader">games</div></div><h5>'+post.title+'</h5><div class="label">'+post.description+'</div></a>'
		
			}).join('');
		}
		lastSearchResultHash = currentResultHash;
	}

	// <a href="app-details.html" class="app-card w-inline-block"><img src="images/Icon-2.png" loading="lazy" srcset="images/Icon-2-p-500.png 500w, images/Icon-2.png 620w" sizes="100vw" alt="" class="app-icon">
    //         <div class="app-card-title">
    //           <div class="subheader">games</div>
    //           <h5 class="h5">FyneGameBoy</h5>
    //           <div class="label">A Fyne based interface for desktop and mobile</div>
    //         </div>
    //       </a>
	function init(options) {
		searchFile = options.searchFile || searchFile;
		searchEl = document.querySelector(options.searchSelector || '#js-super-search');
		searchInputEl = document.querySelector(options.inputSelector || '#js-super-search__input');
		searchResultsEl = document.getElementById("search-results")// document.querySelector(options.resultsSelector || '#js-super-search__results');
		console.log(searchResultsEl)

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
				toggleSearch();
			}
		});
		// Open on '/' key
		window.addEventListener('keypress', function onKeyPress(e) {
			if (e.which === 47 && !searchEl.classList.contains('is-active')) {
				toggleSearch();
			}
		});

		searchInputEl.addEventListener('input', function onInputChange() {
			handleInput();
		});
	}

	init.toggle = toggleSearch;

	window.superSearch = init;

})();
