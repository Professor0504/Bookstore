// function to get input from the user 
function getInputTag(objArr) {

    const { id, key, type } = objArr;
    let input = null;

    switch (type) {
        case NUMBER:
        case TEXT:
        case DATE:
            input = document.createElement("input");
            input.type = type;
            input.name = key;
            input.id = id;
            break;
        case BOOLEAN:
            input = document.createElement("select");
            input.name = key;
            input.id = id;

            const options = {
                default: "choose option",
                option1: "true",
                option2: "false"
            }

            for (let idx of Object.keys(options)) {
                let optionVal = document.createElement("option");
                optionVal.value = options[idx];
                optionVal.text = optionVal.value;
                input.append(optionVal);


            }
            break;

        default:
            input = document.createElement("input");
            input.type = type;
            input.name = key;
            break;

    }
    // makes one div for each input

    const inputDiv = document.createElement("div");  // div type ka
    if (input) {
        const label = document.createElement("label");
        label.setAttribute("for", id);
        label.innerText = key;
        inputDiv.append(label);
        inputDiv.append(input);

        // good smjh aa gya
    }

    return inputDiv;

}

function createTable() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");


    for (let { key } of objArr) {
        const th = document.createElement("th");
        th.innerText = key;
        thead.appendChild(th);
    }
    table.appendChild(thead);
    table.appendChild(tbody);

    return table;

}

function dataLekeAao() {
    const dataArr = [];
    for (let { id, key, type } of objArr)  // easy for understanding
    {
        if (type == BOOLEAN) {
            let bulao = document.getElementById(`${id}`);
            dataArr.push(bulao.value);
            bulao.val = '';

        }
        else {
            let dusraBulao = document.getElementById(`${id}`);
            if (dusraBulao.value) {
                dataArr.push(dusraBulao.value);
                dusraBulao.value = '';
            }
        }

    }

    return dataArr;



}
function dataDaaldo() {
    const reslut = dataLekeAao();
    if (reslut.length != objArr.length) {
        alert("pura bharde please");
    }
    else {
        const tbody = document.querySelector("#OutputTable table tbody");
        const tr = document.createElement("tr");
        for (let idx of reslut) {
            const td = document.createElement("td");
            td.innerText = idx;  // clear krni hai ye cheez ek baar 
            tr.appendChild(td);
        }
        tbody.appendChild(tr);

    }

}

