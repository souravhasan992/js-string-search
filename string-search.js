const products =[
    'Dell hardcore i19 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    'silver color hp Laptop',
    'black color techno mobile with 2GB ram'
];

const searching ='laptop';

//index of
const output =[];
for (const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(product);
        console.log(output);
    }
}

/* //includes
for (const product of products){
    if ( product.toLowerCase().includes(searching.toLowerCase())){
        output.push(product);
        console.log(output);
    }
} */

/* //starts With
for (const product of products){
    if (product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product)
    }
} */
