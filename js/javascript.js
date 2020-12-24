const cars = [{
    id:1,
    model: "focus",
    brand: "ford",
    color: "black",
    year: '2018',
    price: 200000
},
{
    id:2,
    model: "mustang",
    brand: "ford",
    color: "blue",
    year: '2020',
    price: 1000000
},
{
   id:3,
    model: "mazda-6",
    brand: "mazda",
    color: "red",
    year: '2019',
    price: 250000
},
{
    id:4,
    model: "fluence",
    brand: "renault",
    color: "black",
    year: '2017',
    price: 150000
},
]

function addNewCar(){

    const model = document.getElementById('model').value;
    const brand = document.getElementById('brand').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    let id = cars[cars.length-1].id+1
    let newCar = {model,brand, color, year, price,id}

    //console.log("resultado del id es: "+id)
    cars.push(newCar)
    printCar()

  document.getElementById('form-car').reset()
}



function printCar(){
    const containerCar = document.getElementById("container-cars")

    let html = ''

    cars.forEach((car) => {

        html+=`
        <tr >
            <td >${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.color}</td>
            <td>${car.year}</td>
            <td>${car.price}</td>
            <td>
                <div class="space-left">
                <button onclick="editCar(${car.id})" class="btn btn-outline-danger" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                <i onclick="editCar(${car.id})" class="fas fa-edit" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"></i>
                </button>       
                <button onclick="deleteCar(${car.id})" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i>  </button>
                </div>
            </td>
            
           
        </tr>`
    });
    
    containerCar.innerHTML=html;
}

printCar()

function deleteCar (id) {
    const index=cars.findIndex((car)=>{ car.id === id })

    cars.splice(index,1)
    printCar()


}

function editCar (id) {
    //alert('este es el index: '+ id)
    const index = cars.findIndex((car)=> car.id === id)
    
    document.getElementById('brand-modal').value=cars[index].brand
    document.getElementById('model-modal').value=cars[index].model
    //alert(index)
    document.getElementById('saveEdit').onsubmit= function (index){
        
        let brandEdit = document.getElementById('brand-modal').value
        brandEdit= index.value
        if(brandEdit){
            self.cars.splice(index,1, brandEdit.trim())

            printCar()

            document.getElementById('exampleModal').style.display = 'none';
        }
    }
}

   
  

   
