const http = new Customhttp;

//GET MULTIPLE HTTP
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
  if(err){
    console.log(err);
  }else{
    document.querySelector('#getm').innerHTML = posts
  }
});

//GET SINGLE HTTP
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
  if(err){
    console.log(err);
  }else{
    document.querySelector('#gets').innerHTML = post
  }
});

//Creating post data
const data = {
  title: 'This is fun',
  body: 'Thanks to God for th strength and wisdom'
}

//POST HTTP
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
  if(err){
    console.log(err);
  }else{
    document.querySelector('#getp').innerHTML = post;
    
  }
});

//UPDATE HTTP
http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post){
  if(err){
    console.log(err);
  }else{
    document.querySelector('#upd').innerHTML = post;
    
  }
});

//DELETE HTTP
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
  if(err){
    console.log(err);
  }else{
    document.querySelector('#del').innerHTML = post
  }
});