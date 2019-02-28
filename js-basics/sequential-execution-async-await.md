### A Particular use case of Sequential Execution with plain callback function and async-await -

#### Here the code below is the EDIT / PUT route function in my Express backend - From front-end client side I am getting req.body, wherer I am being sent a JSON data which along with other info has a 'date' field (see below). I had to format that 'date' from req.body (to "YYYY-MM-DD") with moment, before running findByIdAndUpdate(). Else mongoose was saving the date one day prior to what I was selecting in the DatePicker, and then subsequent API call for that date's data (after the EDIT) will NOT give me the correct edited data.

### NOTE - The code is working EVEN WITHOUT async-await. But including async-await seems to be better for safely achieving the result.

#### req.body is as below

```js
{
        "wharfage": 143,
        "berth_hire": 5,
        "other_services": 6,
        "port_dues": 20,
        "total": 26,
        "date": "2019-02-25"
}
```

### The actual route code in Express backend

```js
router.put("/:id", (req, res, next) => {
  let editedItem = req.body;

  // Have to do this extra date formatting step, to change the formatting of the 'date' field. Else mongoose was saving the date one day prior to what I was selecting in the DatePicker.
  // Wrapper function that will wrap the database call (the findByIdAndUpdate() query) within a callback function that gets executed after the database query has finished.
  const wrapperFunction = async (editItem, callback) => {
    editItem.date = await moment(editItem.date).format("YYYY-MM-DD");
    if (typeof callback === "function") {
      callback();
    }
  };

  wrapperFunction(editedItem, () => {
    Revenue.findByIdAndUpdate(req.params.id, editedItem, { new: true }).exec(
      (err, record) => {
        if (err) {
          console.log(err);
          return next(err);
        } else {
          res.status(200).json(record);
        }
      }
    );
  });
});
```

#### Alternative - 1 for the above EDIT (PUT) route function (with an extra database call ) - this code is also working

```js
router.put("/:id", (req, res, next) => {
  let editedItem = req.body;
  Revenue.findById(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      editedItem.date = moment(editedItem.date).format("YYYY-MM-DD");
    }
  }).then(() => {
    Revenue.findByIdAndUpdate(req.params.id, editedItem, { new: true }).exec(
      (err, record) => {
        if (err) {
          console.log(err);
          return next(err);
        } else {
          res.status(200).json(record);
        }
      }
    );
  });
});
```

#### Alternative-2 for the EDIT (PUT) route function above (also working) - Here, I am just plain formatting the date without resorting to any technique to make the next db-call function to wait. While its working the solution with async-await seems to be better for safely achieving the same.

```js
router.put("/:id", (req, res, next) => {
  let editedItem = req.body;
  editedItem.date = moment(editedItem.date).format("YYYY-MM-DD");

  Revenue.findByIdAndUpdate(req.params.id, editedItem, { new: true }).exec(
    (err, record) => {
      if (err) {
        console.log(err);
        return next(err);
      } else {
        res.status(200).json(record);
      }
    }
  );
});
```

#### Related Explanations why Alternative-2 works

##### JavaScript is single threaded, that means only one statement is executed at a time. As the JS engine processes our script line by line, it uses this single Call-Stack to keep track of codes that are supposed to run in their respective order.

Like what a stack does, a data structure which records lines of executable instructions and executes them in LIFO manner. So say if the engine steps into a function foo(){ it PUSH-es foo() into the stack and when the execution of foo()return; } is over foo() is POP-ped out of the call-stack.

<img src="./sequential-execution-1.png">
