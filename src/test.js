//console.log("Hello, You can see emon's creation");
// let arr=['Apple','Banana','Orange']
/*arr.splice(1,0,'Mango');
arr.splice(4,0,'Guava');
arr.splice(4,0,'Guava');//slice is a Non-mutating method.
let chosenFruits=arr.slice(1,2);*/
let fruit1={id: 1, name:'Mango',                 
                print: function(){
                    console.log(fruit1.id+':'+fruit1.name);
                }
}
fruit1.print();
// let indexOf=arr.indexOf('Orange');
// console.log(indexOf);

//===============================================================

let arr=['Apple','Banana','Orange'];
/*arr.splice(1,0,'Mango');
arr.splice(4,0,'Guava');
arr.splice(4,0,'Guava');//slice is a Non-mutating method.
let chosenFruits=arr.slice(1,2);*/
let fruit1={id: 1, name:'Mango',                 
                print: function(){
                    console.log(fruit1.id+':'+fruit1.name);
                }
}
let fruitObjects=arr.map((elem,i)=>{
    return{id: i+1,name: elem};
});
console.log(fruitObjects);

// let indexOf=arr.indexOf('Orange');
// console.log(indexOf);




/*
export const DataTable=({rowes, columns})=>{
    return<table>
           <thead>
    {columns.map((column)=> <td key={column.prop}>{column.title}</td>)}
</thead>
<tbody>
{columns.map((column)=> <td key={column.prop}>{row(columns.prop)}</td>)}
</tbody>
        </table>
}
  */
