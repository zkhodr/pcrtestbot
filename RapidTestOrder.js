const OrderState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    ORDERING: Symbol("ordering"),
    PIZZA: Symbol("pizza"),
    PASTA: Symbol("pasta"),
    TOPPINGS: Symbol("toppings"),
    SIZE: Symbol("size"),
    DRINKS: Symbol("drinks"),
    PRICE: Symbol("price"),
    DESSERTS: Symbol("desserts")

});

class RapidTestOrder{
    constructor(sFrom){
        this.stateCur = OrderState.WELCOMING;
        this.isDone = false;
        this.sFrom = sFrom;
        this.main = ""; 
        this.toppings = "";
        this.drink = ""; 
        this.dessert = "";  
        
    }
    
    handleInput(sInput){
        let aReturn = [];

        
        
        switch(this.stateCur){
            case OrderState.WELCOMING:
                this.stateCur = OrderState.ORDERING;
                aReturn.push("Welcome to Dominos.");
                aReturn.push("May I take your order?");
                
                break;

            case OrderState.ORDERING:
                this.main = String(sInput); 
                this.stateCur = OrderState.TOPPINGS;
                if(sInput.toLowerCase().includes('pizza')){
                  aReturn.push("Great choice! What size Pizza would you like to order today?");
                if(sInput.toLowerCase().includes('pasta')){
                  aReturn.push("Great choice! What size Pasta would you like to order today?");
                  
                }
                break;
            case OrderState.TOPPINGS: 
                aReturn.push("What toppings would you like with that? Choose from the following options: Shrimp tossed in a Cajun butter, Tiryaki Sauce");
                this.stateCur = OrderState.DRINKS;
                
   
                break;
            
            case OrderState.DRINKS:
                this.toppings = String(sInput); 
                aReturn.push("Would you like a drink with that?");
                aReturn.push("Choose from: Coke, Coca-Cola Zero Sugar, Diet Coke, Sprite, Ginger Ale, Nestea, Water, Fanta, A&W Root Beer");
                this.stateCur = OrderState.DESSERTS;

                break;

            case OrderState.DESSERTS:
                this.drink = String(sInput);
                aReturn.push("Would you like a dessert with that?");
                aReturn.push("Choose from: Marbled Cookie Brownie, Choclate Lava Crunch Cake, Cinna Bites");
                this.stateCur = OrderState.PRICE;

                break;

            case OrderState.PRICE: 
                this.dessert = String(sInput);
                aReturn.push("Great Choices! Your total is: $32.48");
                aReturn.push("You order the following: "); 
                aReturn.push(this.main); 
                aReturn.push(this.toppings);
                aReturn.push(this.drink);  
                aReturn.push(this.dessert); 
                
                break;
                
            }
             

        return aReturn;
    }
    isDone(){
      return this.isDone;
    }
}

export{RapidTestOrder}