const heading = document.createElement("h1");
heading.innerText = "Nigga Library";

const Arr = objArr.map((val, idx, array) => {
    return getInputTag(val);
});

const mainInputDiv = document.getElementById("mainInputDiv");
mainInputDiv.appendChild(heading);
Arr.forEach((iterator) => {
    mainInputDiv.append(iterator);
})

const bnta = document.createElement("button");
bnta.id = "bntaKiId";
bnta.innerText = "Submit Details";

mainInputDiv.appendChild(bnta);

const outputTable = document.getElementById("OutputTable");

const tableLeAao = createTable();
console.log(tableLeAao);
outputTable.appendChild(tableLeAao);

bnta.addEventListener("click", dataDaaldo);

console.log(dataLekeAao());





