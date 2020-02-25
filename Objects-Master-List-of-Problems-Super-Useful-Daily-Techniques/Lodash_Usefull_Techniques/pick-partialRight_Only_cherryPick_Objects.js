const omit = require("lodash.omit")
const pick = require("lodash.pick")
const map = require("lodash.map")
const partialRight = require("lodash.partialright")

const data = [
  {
    login: "vopani",
    id: 8954217,
    node_id: "MDQ6VXNlcjg5NTQyMTc=",
    avatar_url: "https://avatars1.githubusercontent.com/u/8954217?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/vopani",
    html_url: "https://github.com/vopani",
    followers_url: "https://api.github.com/users/vopani/followers",
    following_url: "https://api.github.com/users/vopani/following{/other_user}",
    gists_url: "https://api.github.com/users/vopani/gists{/gist_id}",
    starred_url: "https://api.github.com/users/vopani/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/vopani/subscriptions",
    organizations_url: "https://api.github.com/users/vopani/orgs",
    repos_url: "https://api.github.com/users/vopani/repos",
    events_url: "https://api.github.com/users/vopani/events{/privacy}",
    received_events_url: "https://api.github.com/users/vopani/received_events",
    type: "User",
    site_admin: false,
    score: 1,
  },
  {
    login: "NirantK",
    id: 3250749,
    node_id: "MDQ6VXNlcjMyNTA3NDk=",
    avatar_url: "https://avatars1.githubusercontent.com/u/3250749?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/NirantK",
    html_url: "https://github.com/NirantK",
    followers_url: "https://api.github.com/users/NirantK/followers",
    following_url:
      "https://api.github.com/users/NirantK/following{/other_user}",
    gists_url: "https://api.github.com/users/NirantK/gists{/gist_id}",
    starred_url: "https://api.github.com/users/NirantK/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/NirantK/subscriptions",
    organizations_url: "https://api.github.com/users/NirantK/orgs",
    repos_url: "https://api.github.com/users/NirantK/repos",
    events_url: "https://api.github.com/users/NirantK/events{/privacy}",
    received_events_url: "https://api.github.com/users/NirantK/received_events",
    type: "User",
    site_admin: false,
    score: 1,
  },
]

const allIndividual = [
  {
    login: "vopani",
    bio: "https://en.wikipedia.org/wiki/Rohan_Rao",
    email: null,
    name: "Rohan Rao",
  },
  {
    login: "NirantK",
    bio: "@bitspilanicode alum. Ex @soroco",
    email: null,
    name: "Nirant",
  },
]

var mapped = map(data, partialRight(pick, ["login", "id", "avatar_url"]))

console.log(mapped)

/* Expected Output -

[ { login: 'vopani',
    id: 8954217,
    avatar_url: 'https://avatars1.githubusercontent.com/u/8954217?v=4' },
  { login: 'NirantK',
    id: 3250749,
    avatar_url: 'https://avatars1.githubusercontent.com/u/3250749?v=4' } ]
 */

/* Explanations of partialRight -

From Official Dox - https://lodash.com/docs/4.17.15#partialRight

_.partialRight(func, [partials])

Arguments
func (Function): The function to partially apply arguments to.
[partials] (...*): The arguments to be partially applied.
Returns
(Function): Returns the new partially applied function.

This method is like _.partial except that partially applied arguments are appended to the arguments it receives. So it appends them (the partially applied arguments) to the end of any arguments passed.

This method is like _.partial except that partially applied arguments are appended to the arguments it receives.

My Notes - So partialRight() is a curry function, meaning it returns a function. And that returned function works as the callback to the lodash's map() function.


Agin from official doc of _partial() - https://lodash.com/docs/4.17.15#partial

_.partial(func, [partials])

Creates a function that invokes func with partials prepended to the arguments it receives. This method is like _.bind except it does not alter the this binding.

And finally from Lodash map functions official dox - https://lodash.com/docs/4.17.15#map

_.map(collection, [iteratee=_.identity])

Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
(value, index|key, collection).

Arguments

collection (Array|Object): The collection to iterate over.
[iteratee=_.identity] (Function): The function invoked per iteration.
Returns

(Array): Returns the new mapped array.
 */
