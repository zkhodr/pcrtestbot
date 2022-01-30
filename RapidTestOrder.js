const OrderState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    RESERVING:   Symbol("reserving")
});

class RapidTestOrder{
    constructor(sFrom){
        this.stateCur = OrderState.WELCOMING;
        this.isDone = false;
        this.sFrom = sFrom;
    }
    handleInput(sInput){
        let aReturn = [];
        switch(this.stateCur){
            case OrderState.WELCOMING:
                this.stateCur = OrderState.RESERVING;
                aReturn.push("Welcome to Rich's Rapid Test.");
                aReturn.push("Would you like to reserve a rapid test kit?");
                break;
            case OrderState.RESERVING:
                this.isDone = true;
                if(sInput.toLowerCase().startsWith('y')){
                  aReturn.push(`Your rapid test is reserved under the phone number ${this.sFrom}`);
                  let d = new Date();
                  d.setMinutes(d.getMinutes() + 120);
                  aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
                }else{
                  aReturn.push("Thanks for trying our reservation system");
                  aReturn.push("Maybe next time")
                }
                break;
        }
        return aReturn;
    }
    isDone(){
      return this.isDone;
    }
}

export {RapidTestOrder}