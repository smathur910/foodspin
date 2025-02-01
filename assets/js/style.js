$(document).ready(function(){
    let foodImages = ["food2.png", "food3.png", "food4.png", "food5.png", "food6.png", "food7.png", "food8.png","food1.png"];
    let foodImagesBg = ["#FFEEDE", "#EAFFE2", "#FFEEDE", "#EAFFE2", "#FFEEDE", "#EAFFE2", "#FFEEDE", "#EAFFE2"];
    let index = 0;
    let rotation = 0;
    
    setInterval(function(){
        rotation += 45;
        $(".food-spinner img").css("transform", `rotate(${rotation}deg)`);
        
        setTimeout(() => {
            $(".food-dish-img img").attr("src", `./assets/img/${foodImages[index]}`);
            $(".spinner-background-overlay").css("background-color", foodImagesBg[index]);
        index = (index + 1) % foodImages.length;
       }, 1500); 
    }, 4000);
    
});