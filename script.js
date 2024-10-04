function accordion(params) {
    element = document.getElementById(params.id + '-collapse');

    console.log(element);
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}