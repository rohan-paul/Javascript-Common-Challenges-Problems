/* Implement the function asyncMap:
 
  asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback. Each of the tasks takes a separate callback and invokes that callback when complete.
 
  The callback passed to asyncMap (as its second argument) is then performed on the results of the callbacks of the tasks.
 
  The order of these results should be the same as the order of the tasks.
  It is important to note that this is not the order in which the tasks return, but the order in which they are passed to asyncMap.
 
  ONLY Once all the callbacks of the tasks are returned, asyncMap should invoke the callback on the results array. 
  */
 
 function asyncMap(tasks, callback) {
 	var resultsArray = [];
 	var resultsCount = 0;

 	for (var i = 0; i < tasks.length; i++ ) {
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
  });asyncMap([
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
     console.log(results);
  });

  // the results array will equal ['one','two'] even though
  // the second function had a shorter timeout.