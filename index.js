const URL = "./data.json";
async function getData(url){
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

function renderizarDatos(data){
    const $lista = document.getElementById("");
    let $fragment = document.createDocumentFragment();

    data.forEach( element =>{
        let $li = document.createElement("li");
        let $id = document.createElement("p")
        let $text = document.createElement("p");
        let $check = document.createElement("input").type="checkbox";
        
        $id.innerText = element.id;
        $text.innerText = element.text;
        $check.checked = element.marked;

        $li.appendChild($id);
        $li.appendChild($text);
        $li.appendChild($check)
        $fragment.appendChild($li);
    });
    $lista.appendChild($fragment);

}

const data = await getData(URL);
renderizarDatos(data);