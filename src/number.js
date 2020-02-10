function number() {
    var div = document.createElement('div');
    div.innerHTML = 3000;
    div.setAttribute('id', 'number');
    document.body.appendChild(div);

    div.onclick = function() {
        div.innerHTML = parseInt(div.innerHTML, 10) + 1;
    };
}

export default number;