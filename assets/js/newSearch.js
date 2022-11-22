function openSearch (element){
    const s = "search-open"
    const t = element.parentElement.getElementsByClassName("text-field w-input")
    if (!element.parentElement.classList.contains(s)){
        element.parentElement.classList.add(s);        
        t[0].style.display = "block";
        t[0].style.width = "100%";
    } else {
        element.parentElement.classList.remove(s);
        t[0].style.display = "none";
        t[0].style.width = "0";
    }    
}