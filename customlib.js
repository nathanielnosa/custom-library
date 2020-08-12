// creating OOP custom library using Es5

function Customhttp(){
  this.http = new XMLHttpRequest();
}

// PROTOTYPES

// CREATING A GET HTTP post
  Customhttp.prototype.get = function(url, callback){
    //OPEN
    this.http.open('GET', url, true);

    //ONLOAD
      let self = this;
    this.http.onload = function(){
      if(self.http.status === 200){
        callback(null,self.http.responseText);
      }else{
        callback('ERROR :' + self.http.status);
      }
    }

    //SEND
    this.http.send();
  }

// CREATING A POST HTTP post
  Customhttp.prototype.post = function(url, data, callback){
    //OPEN
      this.http.open('POST', url, true);
  
    //ONLOAD
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function(){
      callback(null,self.http.responseText);
    }
    //SEND
    this.http.send(JSON.stringify(data));

  }

// CREATING A PUT HTTP post
Customhttp.prototype.put = function(url, data, callback){
  //OPEN
    this.http.open('PUT', url, true);

  //ONLOAD
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function(){
    callback(null,self.http.responseText);
  }
  //SEND
  this.http.send(JSON.stringify(data));

}
// CREATING A DELETE HTTP post
Customhttp.prototype.delete = function(url, callback){
  //OPEN
  this.http.open('DELETE', url, true);

  //ONLOAD
    let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null, 'This Post Is Deleted!');
    }else{
      callback('ERROR :' + self.http.status);
    }
  }

  //SEND
  this.http.send();
}