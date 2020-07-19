import { Observable } from "rxjs"

let a = new Observable((observer) => {
  console.log(1)
  observer.next(2)
})
a.subscribe((result) => console.log(result))
a.subscribe((result) => console.log(result))
