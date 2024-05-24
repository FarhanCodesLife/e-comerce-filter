







const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "Logitech",
        image:"https://f.nooncdn.com/p/pzsku/ZD14F0D33CF887697250EZ/45/_/1705142384/cd3fce42-aaf9-4ac6-9200-295bcd151895.jpg?format=avif&width=240"
        // image:"https://media.istockphoto.com/id/1312767657/photo/esport-rgb-mouse-and-keyboard.webp?b=1&s=170667a&w=0&k=20&c=oLU3blPlyCmLXyP9ZxFvz5k3RcFuxLuAYJaX9kJlN0w="
        // Image: 'https://media.istockphoto.com/id/1312767657/photo/esport-rgb-mouse-and-keyboard.webp?b=1&s=170667a&w=0&k=20&c=oLU3blPlyCmLXyP9ZxFvz5k3RcFuxLuAYJaX9kJlN0w='
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify",
        image:"https://f.nooncdn.com/p/pzsku/Z2CAA076499AA26E146FBZ/45/_/1710583306/fe888524-2624-4547-8fea-d48a73f7e120.jpg?format=avif&width=240"

    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton",
        image:"https://f.nooncdn.com/p/pzsku/ZFBC4DFFDE6DB665B9DDEZ/45/_/1713351781/0b558ec0-4e48-4a2d-a9e5-e483088143d6.jpg?format=avif&width=240"

    },

    // Kitchen Appliances
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen Appliances",
        brand: "Keurig",
        image:"https://f.nooncdn.com/p/v1668601992/N38849950A_1.jpg?format=avif&width=240"

    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung",
        image:"https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&width=240"
        // image:"https://images.unsplash.com/photo-1533228100845-08145b01de14?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "LED Monitor",
        price: 129.99,
        category: "Electronics",
        brand: "Dell",
        image:"https://f.nooncdn.com/p/v1678696829/N53390363A_1.jpg?format=avif&width=240"
    },
    
    {
        name: "Sneakers",
        price: 75.99,
        category: "Footwear",
        brand: "Adidas",
        image:"https://f.nooncdn.com/p/pzsku/Z20EC3281AA4735849076Z/45/_/1715407859/c871df90-37db-4dd0-b781-5b2ea16eee45.jpg?format=avif&width=240"

    },
      {
        name: "Boots",
        price: 150.00,
        category: "Footwear",
        image:"https://f.nooncdn.com/p/pzsku/Z1112ACF18D35BF572C44Z/45/_/1715407879/f0ac4895-1079-474f-bb9b-e1b3d3c6753c.jpg?format=avif&width=240"
        ,      brand: "Timberland"
    },

    // Home Appliances
    {
        name: "Blender",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster",
        image:"https://f.nooncdn.com/p/pnsku/N70046871V/45/_/1708059657/cb0ec4cb-269c-44a6-a295-e96f333b457e.jpg?format=avif&width=240"

    },
    {
        name: "Microwave Oven",
        price: 99.99,
        category: "Home Appliances",
        brand: "Panasonic",
        image:"https://f.nooncdn.com/p/pnsku/N21719641A/45/_/1716319179/ca0db2f9-45f5-4df2-b4b8-4a4a71d15d9b.jpg?format=avif&width=240"

    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        brand: "JBL",
        image:"https://f.nooncdn.com/p/v1642665585/N52423195A_1.jpg?format=avif&width=240"
    },
    {
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        brand: "Apple",
        image:"https://f.nooncdn.com/p/v1656599539/N53259583A_1.jpg?format=avif&width=240"
    },

    // Footwear
    {
        name: "Running Shoes",
        price: 59.99,
        category: "Footwear",
        brand: "Nike",
        image:"https://f.nooncdn.com/p/pzsku/Z55DA10778C761DDACDFBZ/45/_/1681111689/51eb4c36-be04-4f2e-ad07-ce28973bb9db.jpg?format=avif&width=240"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG",
        image:"https://f.nooncdn.com/p/pzsku/Z9B9F6CC7F627688C3333Z/45/_/1712646517/aa49d692-d4c6-4233-90b1-8b4bcb916ed5.jpg?format=avif&width=240"

    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson",
        image:"https://f.nooncdn.com/p/pzsku/Z84327EAC4EC09E22085CZ/45/_/1709368736/14c13336-eb7b-48bc-ba19-45da9150b5bb.jpg?format=avif&width=240"

    },
    {
        name: "Sandals",
        price: 25.99,
        category: "Footwear",
        brand: "Teva"
,        image:"https://f.nooncdn.com/p/pzsku/Z41D7A0254256AE3F456EZ/45/_/1706604674/18329031-8981-43e6-8241-d143acb62366.jpg?format=avif&width=240"
    },
    {
        name: "Formal Shoes",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks"
 ,       image:"https://f.nooncdn.com/p/pzsku/ZA225F71AB0DE22194174Z/45/_/1693463049/12c289ab-5f42-4762-b533-1fffd08025af.jpg?format=avif&width=240"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville",
        image:"https://f.nooncdn.com/p/pzsku/Z84327EAC4EC09E22085CZ/45/_/1709368736/14c13336-eb7b-48bc-ba19-45da9150b5bb.jpg?format=avif&width=240"
        
    },

    // Stationery
    {
        name: "Notebook",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine",
        image:"https://f.nooncdn.com/p/pzsku/Z40B246C28532486FCC63Z/45/_/1700727418/7341635d-26a5-4ee7-90c5-e0ad1e040f86.jpg?format=avif&width=240"

    },
    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker",
        image:"https://f.nooncdn.com/p/v1650244424/N14729419A_1.jpg?format=avif&width=240"

    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie",
        image:"https://f.nooncdn.com/p/v1591611434/N16177087A_1.jpg?format=avif&width=240"

    },
    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm",
        image:"https://f.nooncdn.com/p/pzsku/ZD7348E45A86A7EC308F2Z/45/_/1713213553/5335c3a9-ac56-4808-89af-c6a896645d22.jpg?format=avif&width=240"

    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture",
        image:"https://f.nooncdn.com/p/pzsku/Z5866D0CAC2DCB139D95DZ/45/_/1713350149/cc4b422b-ceff-4d78-b559-756bfbe3ea9f.jpg?format=avif&width=240"

    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline",
        image:"https://f.nooncdn.com/p/pzsku/ZB77AF9F9D7E32BAD2587Z/45/_/1697024002/c99cdcde-93fc-47b3-8e4d-c43f7838f8f8.jpg?format=avif&width=240"

    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren",
        image:"https://f.nooncdn.com/p/pzsku/ZB3DA28D7D7F9130175E0Z/45/_/1704648689/16554191-e79b-4831-9e86-b00bd6dce169.jpg?format=avif&width=240"

    },

    // Furniture
    {
        name: "Desk Chair",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea",
        image:"https://f.nooncdn.com/p/pzsku/ZE1FAE3E19B5B99DDB74EZ/45/_/1693486272/19edff72-518c-49d8-a146-0540cfaa549e.jpg?format=avif&width=240"

    },
    
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder",
        image:"https://f.nooncdn.com/p/pzsku/Z257A7D1C0AD6577AB4B2Z/45/_/1695218208/221db63f-248d-412e-bd84-5e04e34bdc9a.jpg?format=avif&width=240"

    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn",
        image:"https://f.nooncdn.com/p/pzsku/Z50DC9284A7E9A1E00A35Z/45/_/1700120665/cc041b63-e1a6-4d48-97ab-3052a1c4af15.jpg?format=avif&width=240"

    },

    // Fitness
    {
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam",
        image:"https://f.nooncdn.com/p/pzsku/Z5ECCFC56EB49A5ACE6FCZ/45/_/1696595360/dcaa7c2e-587f-4028-b04e-fc523ced5c6f.jpg?format=avif&width=240"

    },
    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex",
        image:"https://f.nooncdn.com/p/v1597235707/N39638412A_1.jpg?format=avif&width=240"

    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack",
        image:"https://f.nooncdn.com/p/pzsku/Z4CC9E279E606A7B581CEZ/45/_/1714284258/725bce4e-3f41-4058-b992-c1bacccf21fe.jpg?format=avif&width=240"

    },
    
    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja",
        image:"https://f.nooncdn.com/p/pnsku/N53390403A/45/_/1714377628/afc4acd1-efdb-4e12-ad58-61a92209a03e.jpg?format=avif&width=240"

    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid",
        image:"https://f.nooncdn.com/p/pzsku/Z30D4AC3690C454B59F56Z/45/_/1674228055/5936e2af-b275-4210-b6c2-4175f9d06c5f.jpg?format=avif&width=240"

    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool",
        image:"https://f.nooncdn.com/p/v1640763282/N48565737A_2.jpg?format=avif&width=240"

    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch",
        image:"https://f.nooncdn.com/p/v1669819835/N48565736A_2.jpg?format=avif&width=240"

        // image:"https://f.nooncdn.com/p/pzsku/Z1A867D4781A6FEAA181BZ/45/_/1705321036/3c88dd97-b2ef-4a3e-8196-7bd4c629e3de.jpg?format=avif&width=240"

        
    }
];

let div = document.querySelector('#all-products')

function render(params) {

    div.innerHTML = ''
    products.map(element => {
       return div.innerHTML += `
       
       
       
<div class="card p-2 my-3 mx-1" style="width: 15rem;">
 <img src="${element.image}" class="card-img-top" alt="..."> 
<div class="card-body">
  <h5 class="card-title">${element.name}</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${element.brand}</li>
  <li class="list-group-item">${element.category}</li>
  <li class="list-group-item">${element.price}</li>
</ul>
<div class="card-body">
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>
       
       
       `
        
    });
    
}


render()




// for each 

products.forEach(function (items,index,) {

    console.log(items.name);
    // console.log(index);

    // console.log(arr);
})


console.log(products);





function renderitems(btn) {


            const all = products.filter( items =>{
                div.innerHTML =''
    
            return items.category === btn.innerHTML}).filter((items)=>{

                // allproducts.innerHTML =`change`
                return div.innerHTML += `
                
                   
<div class="card p-2 my-3 mx-1" style="width: 20rem;">
<img src="${items.image}" class="card-img-top" alt="..."> 

<!-- <img src="..." class="card-img-top" alt="..."> -->
<div class="card-body">
  <h5 class="card-title">Card title</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${items.brand}</li>
  <li class="list-group-item">${items.category}</li>
  <li class="list-group-item">${items.price}</li>
</ul>
<div class="card-body">
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>
       
                
                `
                
              
                
            })

            
            console.log(all);
        }  

        
    
    
// const electronics = products.filter(item => item.category === 'Electronics').filter(item => item.price > 100).filter(item => item.price < 200)

// console.log(electronics);


