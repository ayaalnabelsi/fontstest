function setHeadingSize(size){
    document.body.classList.remove(
        "heading-groot",
        "heading-middel",
        "heading-klein"
    );
    document.body.classList.add("heading-" + size);
}


function setSpacing(type){
    document.body.classList.remove(
        "spacing-normaal",
        "spacing-breed",
        "spacing-extra"
    );
    document.body.classList.add("spacing-" + type);
}