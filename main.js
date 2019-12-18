const assert = require('assert')

let userData;
const btnText = "See more info"
const btnAlternateText = "See less info"
// let first5Posts;
// let arrayOfComments;
// let arrayOfUsers;

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getPosts()
}
// const createPost = () => {
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
//   .then(response => response.json())
//   .then(json => console.log(json))
// }

// const editPost = () => {
//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//       id: 1,
//       title: 'foo',
//       body: 'bar',
//       userId: 1
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
//   .then(response => response.json())
//   .then(json => console.log(json))
// }

const checkFetch = (response) => {
  if (!response.ok) {
    throw Error(`${response.statusText} - ${response.url}`);
  }
  return response;
}
// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('https://randomuser.me/api)
    .then(checkFetch)
    .then(res => {
      return res.json()
    })

    // .then(posts => console.log(posts))
    .then(posts => {
      userData = posts
    })
    .catch(error => console.log(error))
}
const consolePosts = () => {
  console.log(userData)
}

// const get5Posts = () => {
//     fetch('http://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then((fivePosts) => {
//       //in order to only get 5, use slice
//       first5Posts = fivePosts.slice(0, 5)
//     })
// }
// const getComments = () => {
//   fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res => res.json())
//     .then(comments => arrayOfComments = comments)
// }
// const getUsers = () => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(users => arrayOfUsers = users)
// }

// data = data.filter(entry => entry.created > someValue) // Created after X
//                    .slice(0, 1000);                            // Limit to 1000

const createUserLiElement = (post, allPosts) => {
  
  const li = document.createElement('li')
    
  // creates the image element
  const pic = document.createElement('img')
  pic.src = src = `${post.picture.thumbnail}`
  li.appendChild(pic)

  //creates the text node
  const text = document.createTextNode(`${post.name.title} ${post.name.first} ${post.name.last}`)
  li.appendChild(text)

  //creates see more info button
  const btn = document.createElement("button");
  btn.innerHTML = btnText
  li.appendChild(btn)
  btn.onclick = function() {
    
    if (btn.innerHTML === btnText) {
      const newText = document.createTextNode(`${post.email} ${post.location.city}`);
      spaceHolder.appendChild(newText);
      btn.innerHTML = btnAlternateText
    } else {
      spaceHolder.innerHTML = ''
      btn.innerHTML = btnText
    }
  }

  //creates the space holder div
  const spaceHolder = document.createElement('div')
  li.appendChild(spaceHolder)

  allPosts.append(li)
}



// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  const allUsers = userData.results
  allUsers.forEach((post) => {
    createUserLiElement(post, allPosts)
  })
}

// Your job now is to follow the functions above and use them as templates to build the functionality the buttons in the index.html file already have laid out in it. This way you can learn how to build fetch requests and work with other apis and become a real developer!!
// const display5Post = () => {
//   const fivePosts = document.getElementById('five-posts')
//   first5Posts.map((post, index) => {
//     const li = document.createElement('li')
//     const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
//     li.appendChild(text)
//     fivePosts.append(li)
//   })
// }

// const displayComments = () => {
//   const allComments = document.getElementById('all-comments')
//   arrayOfComments.map((post, index) => {
//     const li = document.createElement('li')
//     const text = document.createTextNode(`#${index}, Name: ${post.name}:  ${post.body},  by user: ${post.email}`)
//     li.appendChild(text)
//     allComments.append(li)
//   })
// }

// const displayUsers = () => {
//   const userPosts = document.getElementById('user-posts')
//   arrayOfUsers.map((post, index) => {
//     const li = document.createElement('li')
//     const text = document.createTextNode(`#${index}, Name: ${post.name}  Username:  ${post.username}  Email: ${post.email}  City:${post.address.city}`)
//     li.appendChild(text)
//     userPosts.append(li)
//   })
// }



// function sockMerchant(n, ar) {
//   const colors = {};
//   let matches = 0;
//   for (let i = 0; i < n; i++) {
//       if (colors[ar[i]]) {
//           matches++;
//           colors[ar[i]] = 0;
//       } else {
//           colors[ar[i]] = 1;
//       }
//   }
//   return matches;
// }

// var ones = {}, pairs = 0;
// for (var i = 0; i < n; i++) {
//     if (ones.hasOwnProperty(ar[i])) {
//         pairs++;
//         delete ones[ar[i]];
//     } else {
//         ones[ar[i]] = 0;
//     }
// }
// return pairs

let userData;
// const btnText = "See more info"
// const btnAlternateText = "See less info"
// // let first5Posts;
// // let arrayOfComments;
// // let arrayOfUsers;

// // this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
// window.onload = function() {
// getPosts()
// }
// // const createPost = () => {
// fetch('https://jsonplaceholder.typicode.com/posts', {
// method: 'POST',
// body: JSON.stringify({
// title: 'foo',
// body: 'bar',
// userId: 1
// }),
// headers: {
// "Content-type": "application/json; charset=UTF-8"
// }
// })
// .then(response => response.json())
// .then(json => console.log(json))
// }

// const editPost = () => {
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
// method: 'PUT',
// body: JSON.stringify({
// id: 1,
// title: 'foo',
// body: 'bar',
// userId: 1
// }),
// headers: {
// "Content-type": "application/json; charset=UTF-8"
// }
// })
// .then(response => response.json())
// .then(json => console.log(json))
// }

const checkFetch = (response) => {
if (!response.ok) {
throw Error(${response.statusText} - ${response.url});
}
return response;
}
// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts

const assert = require('assert')

const getPosts = (fetch, id) => {
return fetch('https://randomuser.me/api/')
// .then(checkFetch)
.then(res => {
return res.json()
})

// .then(posts => console.log(posts))
.then(posts => {
return posts
})

// .catch(error => console.log(error))
}
console.log(getPosts);

const getPostsAPI = (fetch, api) => {
return fetch('https://randomuser.me/api/' + api)
// .then(checkFetch)
.then(res => {
return res.json()
})

// .then(posts => console.log(posts))
.then(posts => {
return posts
})

// .catch(error => console.log(error))
}

const getPostsFemale = (fetch) => {
return fetch('https://randomuser.me/api/?gender=female')
// .then(checkFetch)
.then(res => {
return res.json()
})

// .then(posts => console.log(posts))
.then(posts => {
return posts
})

// .catch(error => console.log(error))
}
const getUsers = (fetch, id) => {
return fetch('https://randomuser.me/api/?results=' + id)
// .then(checkFetch)
.then(res => {
return res.json()
})

// .then(posts => console.log(posts))
.then(posts => {
return posts
})

// .catch(error => console.log(error))
}




describe('getPosts', () => {
it('calls fetch with the correct url', () => {
const fakeFetch = url => {
assert(
url ===
'https://randomuser.me/api/'
)
return new Promise(function(resolve) {

})
}
getPosts(fakeFetch)
})

it('uses the correct API Key', () => {
const fakeFetch = url => {
assert(
url ===
'https://randomuser.me/api/12345'
)
return new Promise(function(resolve) {

})
}
getPostsAPI(fakeFetch, 12345)
})
it('verifies you have requested a number of users', () => {
const fakeFetch = url => {
assert(
url ===
'https://randomuser.me/api/?results=100'
)
return new Promise(function(resolve) {

})
}
getUsers(fakeFetch, 100)
})
it('Confirms you are requesting female users', () => {
const fakeFetch = url => {
assert(
url ===
'https://randomuser.me/api/?gender=female'
)
return new Promise(function(resolve) {

})
}
getPostsFemale(fakeFetch)
})

it('parses the response of fetch correctly', (done) => {
const fakeFetch = () => {
return Promise.resolve({
json: () => Promise.resolve({
results: [
{ name: 'Mary' }
]
})
})
}
getPosts(fakeFetch, 12345)
.then(data=> {
assert(data.results[0].name == 'Mary')
done()
}) .catch(done)
})
})