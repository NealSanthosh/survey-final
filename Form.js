class Form {
    constructor(){
        this.title = createElement('h2');
        this.name = createInput("name");
        this.email = createInput("email");
        this.startButton = createButton('Start');
        this.greeting = createElement('h3');
        this.q1 = createElement('h3');
        this.q1ButtonYes = createButton('Yes');
        this.q1ButtonNo = createButton('No');
        this.q2 = createElement('h3');
        this.q2Answer = createInput("Your answer");
        this.finishButton = createButton('Finish');
        this.end = createElement('h3');

    }

    async start(){
        var voterCountRef = await database.ref('voterCount').once("value");
        if(voterCountRef.exists()){
            voterCount = voterCountRef.val();
          update.getCount();
        }
    }

    display(){
        this.title.html("Welcome To The Survey");
        this.title.position(window.innerWidth/2 - 20,0);
        
        this.name.position(window.innerWidth/2,120);
        
        this.email.position(window.innerWidth/2,170);
        
        this.startButton.position(window.innerWidth/2 + 60,220);

        this.startButton.mousePressed(()=>{

            this.name.hide();
            this.email.hide();
            this.startButton.hide();

            update.name = this.name.value();
            update.email = this.email.value();

            voterCount+=1;
            update.index = voterCount;
            update.updateCount(voterCount);
                        
            this.greeting.html("welcome " + name);
            this.greeting.position(window.innerWidth/2 + 60,160);

            this.q1.html("Do you think the lockdown should be extended after may 17?");
            this.q1.position(window.innerWidth/2 - 100,200);

            
            this.q1ButtonYes.position(window.innerWidth/2 + 100 - 30,260);

            this.q1ButtonNo.position(window.innerWidth/2 + 100 + 30,260);

            this.q1ButtonYes.mousePressed(()=>{

                this.q1.hide();
                this.q1ButtonYes.hide();
                this.q1ButtonNo.hide();
                
                update.q1 = "Yes";

                this.q2.html("Why do you think the lockdown should be extended after may 17?");
                this.q2.position(window.innerWidth/2 - 110,200);

                this.q2Answer.position(window.innerWidth/2,260);

                this.finishButton.position(window.innerWidth - 200,300);

                this.finishButton.mousePressed(()=>{

                    this.q2.hide();
                    this.q2Answer.hide();
                    this.title.hide();
                    this.greeting.hide();
                    this.finishButton.hide();
                    
                    update.q2 = this.q2Answer.value();

                    update.go();
    
                    this.end.html("Thank You for doing this Survay!!");
                    this.end.position(window.innerWidth/2 - 20,10);
    
                });
    
            });

            this.q1ButtonNo.mousePressed(()=>{

                this.q1.hide();
                this.q1ButtonYes.hide();
                this.q1ButtonNo.hide();
                
                update.q1 = "No";

                this.q2.html("Why do you think the lockdown should not extended after may 17?");
                this.q2.position(window.innerWidth/2 - 110,200);

                this.q2Answer.position(window.innerWidth/2,260);
                

                this.finishButton.position(window.innerWidth - 200,300);

                this.finishButton.mousePressed(()=>{

                    this.q2.hide();
                    this.q2Answer.hide();
                    this.title.hide();
                    this.greeting.hide();
                    this.finishButton.hide();
                    
                    update.q2 = this.q2Answer.value();

                    update.go();
    
                    this.end.html("Thank You for doing this Survay!!");
                    this.end.position(window.innerWidth/2 - 20,10);
    
                });

            });
        });
    }
}