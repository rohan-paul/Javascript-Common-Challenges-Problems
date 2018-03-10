function asyncMap(tasks, callback) {
  var resultsArray = [];
  var resultsCount = 0;

  for (var i = 0; i < tasks.length; i++) {
    (function(i) {
      tasks[i](function(val) {
        resultsArray[i] = val;
        resultsCount++;
        if (resultsCount === tasks.length) {
          callback(resultsArray);
        }
      });
    })(i);
  }
}

asyncMap([
  function(cb){
     setTimeout(function(){
       cb('one');
     }, 200);
   },
   function(cb){
     setTimeout(function(){
       cb('two');
     }, 100);
   }
  ],
   function(results){
     // the results array will equal ['one','two'] even though
     // the second function had a shorter timeout.
     console.log(results); // ['one', 'two']
  });