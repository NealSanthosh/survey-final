class Updater {
    constructor(){
      this.index = null;
      this.name = null;
      this.email = null;
      this.q1 = null;
      this.q2 = null;
 
    } 
    go(){
      var voterIndex = "Voters/voter" + this.index;
      database.ref(voterIndex).set({
        name:this.name,
        email:this.email,
        q1:this.q1,
        q2:this.q2
      });
    }

    getCount(){
      var voterCountRef = database.ref('voterCount');
      voterCountRef.on("value",(data)=>{
        voterCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        voterCount: count
      });
    }

  }
  