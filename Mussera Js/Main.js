window.addEventListener("DOMContentLoaded", function(){
    let content = document.querySelector(".Room_content")
    namesFind.forEach(function(Item){
        addcard(Item)
    })
    function addcard(Item){
        let card = document.createElement("div"),
        photo = document.createElement("img"),
        text1 = document.createElement("h2"),
        square = document.createElement("p"),
        freeplaces = document.createElement("p"),
        addplaces = document.createElement("p"),
        wifi = document.createElement("p"),
        beds = document.createElement("p"),
        view = document.createElement("p"),
        location = document.createElement("p"),
        priceAbout1 = document.createElement("p"),
        mainprice = document.createElement("p"), 
        priceAbout = document.createElement("p")

        card.classList.add("Product");

        photo.classList.add("Product_Images");
        photo.src = Item.image;

        text1.classList.add("Product_name__Titel")
        text1.textContent=Item.titel;

        square.classList.add("Product_information__square")
        square.textContent = Item.square;
        
        freeplaces.classList.add("Product_information__places")
        freeplaces.textContent = Item.places;

        addplaces.classList.add("Product_information__addplaces")
        addplaces.textContent = Item.addplaces;

        wifi.classList.add("Product_information__wifi")
        wifi.textContent = Item.wifi;

        beds.classList.add("Product_information__beds")
        beds.textContent = Item.beds;
        
        view.classList.add("Product_information__view")
        view.textContent = Item.view;

        location.classList.add("Product_information__location")
        location.textContent = Item.location;

        mainprice.classList.add("Product_price__mainprice")
        mainprice.textContent = Item.price;

        priceAbout.classList.add("Product_price__priceAbout")
        priceAbout.textContent = Item.priceAbout;
        

        
        select.onclick=()=>{
            putProduct(Item.id)
        }

        content.appendChild(card);
        card.appendChild(photo);
        card.appendChild(header);
        card.appendChild(text1);
        card.appendChild(mainprice);
        mainprice.appendChild(correctprice);
        mainprice.appendChild(oldprice);
        card.appendChild(select);

//         if(Item.isPopular === true){
//             content.appendChild(card)}
//          else{
//         catalog.appendChild(card);
// }
}
})
