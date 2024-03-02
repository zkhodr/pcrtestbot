const OrderState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    ORDERING: Symbol("ordering"),
    SALMON_ORLEANS: Symbol("salmon orleans"),
    FIRE_GRILLED_SALMON: Symbol("fire grilled salmon"),
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
                aReturn.push("Welcome to Red Lobster.");
                aReturn.push("May I take your order?");
                
                break;

            case OrderState.ORDERING:
                this.main = String(sInput); 
                this.stateCur = OrderState.TOPPINGS;
                if(sInput.toLowerCase().includes('salmon') ||sInput.toLowerCase().includes('orleans') || sInput.toLowerCase().includes('grilled')){
                  aReturn.push("sounds delicious :) what size of the Salmon would you like to order?");
                  
                }
                break;
            case OrderState.TOPPINGS: 
                aReturn.push("What toppings would you like with that? choose from the following: shrimp tossed in a Cajun butter; Tiryaki Sauce");
                this.stateCur = OrderState.DRINKS;
                
   
                break;
            
            case OrderState.DRINKS:
                this.toppings = String(sInput); 
                aReturn.push("Would you like a drink with that?");
                aReturn.push("Choose from: Pepsi, Cola, Orange Juice, Apple Juice");
                this.stateCur = OrderState.DESSERTS;

                break;

            case OrderState.DESSERTS:
                this.drink = String(sInput);
                aReturn.push("Would you like a desserts with that?");
                aReturn.push("Choose from: Vanilla Bean Cheesecake, Chocolate Wave, Brownie Overboard, Warm Apple Crostade");
                this.stateCur = OrderState.PRICE;

                break;

            case OrderState.PRICE: 
                this.dessert = String(sInput);
                aReturn.push("Great Choice! Your total is: $28.78");
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