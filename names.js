let nameee = document.getElementById("namee")
let pep = ['Micheal','Esther', 'mary','Segun']
index = 0
nameee .innerHTML = pep[index]

function next() {
    if (index == pep.lenght -1) {
        index = 0
    } else {
        index ++
    }
nameee .innerHTML= pep[index]
    
}
function prev(){
    if (index==0) {
        index = pep.length -1
    } else {
        index --
    }
    nameee .innerHTML = pep[index]
    }