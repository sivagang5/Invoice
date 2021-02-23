class Customer {
    cid: number
    name: string
    discount: number

    constructor(cid:number, name:string, discount:number){
        this.cid=cid
        this.name=name
        this.discount=discount
    }

    getID():void {
        console.log(this.cid)
    }
    getName():void {
        console.log(this.name)
    }
    getDiscount():void {
        console.log(this.discount)
    }
    setDiscount(discount: number):void {
        this.discount=discount
    }
    toString():void {
        var ID2 = this.cid.toString()
        console.log(this.name+'('+ID2+')')
    }
}

class Invoice extends Customer{
    invid: number
    amount: number

    constructor(cid:number, name:string, discount:number, invid:number, amount:number) {
        super(cid, name, discount)
        this.invid=invid
        this.amount=amount
    }

    getID():void {
        console.log(this.invid)
    }
    getCID():void {
        super.getID()
    }
    getAmount():void {
        console.log(this.amount)
    }
    setAmount(amount: number):void {
        this.amount=amount
    }
    setName(name2: string):void {
        this.name=name2
    }

}

class Account1 extends Invoice{
    aid: number
    balance: number

    constructor(cid:number, name:string, discount:number, invid:number, amount:number, aid:number, balance:number) {
        super(cid, name, discount, invid, amount)
        this.aid=aid
        this.balance=balance
    }

    getID():void {
        console.log(this.aid)
    }
    custID():void {
        super.getCID()
    }
    getcust():void {
        this.getName()
    }
    getInvID():void {
        super.getID()
    }
    getBalance():void {
        console.log('Balance : '+this.balance)
    }
    setBalance(balance: number):void {
        this.balance=balance
    }
    deposit(amt1: number){
        this.balance=this.balance+amt1
        console.log('Amout Deposited : '+amt1)
    }
    withdraw(amt2: number){
        if (amt2<=this.balance) {
            this.balance=this.balance-amt2
            console.log('Amout Withdrawn : '+amt2)
        } else {
            console.log('Insufficient Balance')
        }
      
    }
}

var acc1=new Account1(1,'Tom', 10, 11, 1000.00,21, 5000.00)

acc1.custID()
acc1.getcust()
acc1.getDiscount()
acc1.setDiscount(20)
acc1.getDiscount()
acc1.toString()
acc1.setName('Harry')
acc1.getcust()
acc1.getInvID()
acc1.getAmount()
acc1.setAmount(1200.00)
acc1.getAmount()
acc1.getID()
acc1.getBalance()
acc1.setBalance(6000.00)
acc1.getBalance()
acc1.deposit(500)
acc1.getBalance()
acc1.withdraw(700)
acc1.getBalance()
