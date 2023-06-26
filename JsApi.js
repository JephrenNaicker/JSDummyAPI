console.log("Hello World");

let props = {};
fetch('https://dummyjson.com/products?limit=10')
.then(res => res.json())
.then(json => {
    props = json.products
    console.log(props);
})  
.catch(error => console.error(error));


function LogData()
{
    console.log(props);
}



function popData(){
 

    const arr = Array.from(props);

if(Array.isArray(arr))
{
    //document.getElementById("demo").innerHTML += "Its an Array" + "<br>";
//     Array.from(props).forEach(Element =>  {
//         //document.getElementById("demo").innerHTML += arr[0] + "<br>";
//            console.log(Element[0][0]);
//            console.log("Hello World");
//    });

//let myTable = document.getElementById("MyTable").getElementsByTagName("tr")[0];
//let myTableRow = document.getElementById("MyRow");

// var myTable = document.getElementById('myTable');
// var myTableRow = document.createElement('TR');
//  myTable.tBodies[0].appendChild(myTableRow);


const table = document.getElementById("demoA");





    for(let x= 0;x<arr.length;x++)
    {
         let row = table.insertRow();
         let cell = row.insertCell();
         cell.innerHTML = arr[x].title;
         cell = row.insertCell();
         cell.innerHTML = arr[x].description;
         cell = row.insertCell();
         cell.innerHTML = arr[x].price;
         cell = row.insertCell();
         cell.innerHTML = arr[x].rating;
         cell = row.insertCell();
         cell.innerHTML = arr[x].category;
         cell = row.insertCell();
         cell.innerHTML = "<img src="+arr[x].images[0]+" />";

        //  let row = table.insertRow();
        //  let cell = row.insertCell();
        //  cell.innerHTML = arr[x].title;

       // document.getElementById("demo").innerHTML += (arr[x].title+ "|" + arr[x].description);
        
    }

    console.log("Its an Array");
   

}else{
    document.getElementById("demo").innerHTML += "Not an Array" + "<br>";
    console.log("Not an array!");
}

//   const arr = Array.from(props);
//     arr.forEach(Element =>  {
//    // document.getElementById("demo").innerHTML += Element + "<br>";
//     console.log(Element);
// });


}