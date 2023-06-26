console.log("Hello World");

let props = {};
fetch('https://dummyjson.com/products?limit=10')
.then(res => res.json())
.then(json => {
    props = json.products
    console.log(props);
})  
.catch(error => console.error(error));



// const f = props.entries();

// for (let x of f) {
//     document.getElementById("demo").innerHTML += x + "<br>";
//   }

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

document.getElementById("demo").innerHTML = props[0].title;

// for (let y in arr)
// {
//     document.getElementById("demo").innerHTML +=( y +" :"+ arr[0].title[y])
// }
    for(let x= 0;x<arr.length;x++)
    {
        document.getElementById("demo").innerHTML +=  arr[x].title+ "<br>";
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