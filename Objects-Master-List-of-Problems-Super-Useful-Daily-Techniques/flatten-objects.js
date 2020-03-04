/*

I wanted to flatten my deep object to one level depth.

My input:
*/

const input = {
  user: {
    key_value_map: {
      CreatedDate: "123424",
      Department: {
        Name: "XYZ",
      },
    },
  },
}

/* Expected output:

{
    "user.key_value_map.CreatedDate": "123424",
    "user.key_value_map.Department.Name": "XYZ"
}
My note - Mostly all solutions will involve some implementation of recursion here
 */
const flattenObject = obj => {
  let toReturn = {}
  for (let i in obj) {
    if (!obj.hasOwnProperty(i)) continue

    if (typeof obj[i] === "object" && obj[i] !== null) {
      var flatObject = flattenObject(obj[i])
      for (let j in flatObject) {
        if (!flatObject.hasOwnProperty(j)) continue
        toReturn[i + "." + j] = flatObject[j]
      }
    } else {
      toReturn[i] = obj[i]
    }
  }
  return toReturn
}

console.log(flattenObject(input))
