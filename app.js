let name = document.querySelector('#name')
let mobile = document.querySelector('#mobile-number')
let email = document.querySelector('#email')
let postCode = document.querySelector('#post-code')


let postRegex = /^[0-9]{4}$/;
let nameRegex = /[a-z]/g;
let mobileRegex = /^(\+)?(88)?01[0-9]{9}$/;
let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


clickFunc(name)
clickFunc(mobile)
clickFunc(email)
clickFunc(postCode)


let value;


// *** Without switch statement (my favorite one)
// function clickFunc(button){
//   button.addEventListener('click', function(){

//     if(button === name){
//       value = prompt('What\'s your name?')
//       if(nameRegex.test(value) == true){
//         alert(`Well Done! Dear ${value}`)
//       } else{
//         alert('Wrong input dude')
//       }
//     } else if(button === mobile){
//       value = prompt('Enter your Bangladeshi mobile number')
//       if(mobileRegex.test(value) == true){
//         alert(`Well Done! Your number ${value} has been verified`)
//       } else{
//         alert('Wrong input dude')
//       }
//     } else if(button === email){
//       value = prompt('Enter your email address to validate')
//       if(emailRegex.test(value) == true){
//         alert(`Well Done! Dear ${value}`)
//       } else{
//         alert('Wrong input dude')
//       }
//     } else if(button === postCode){
//       value = prompt('Enter your postal code to validate')
//       if(postRegex.test(value) == true){
//         alert(`Well Done! You are verified, your postal code is ${value}`)
//       } else{
//         alert('Wrong input dude')
//       }
//     }
//   })
// }



// With switch statement (I don't like it much)
function clickFunc(button){
  button.addEventListener('click', function(){

    if(button === name){
      value = prompt('What\'s your name?')
      switchRegex(value)
    } else if(button === mobile){
      value = prompt('Enter your Bangladeshi mobile number')
      switchRegex(value)
    } else if(button === email){
      value = prompt('Enter your email address to validate')
      switchRegex(value)
    } else if(button === postCode){
      value = prompt('Enter your postal code to validate')
      switchRegex(value)
    }
  })
}

function switchRegex(value){
  switch (true) {
    case postRegex.test(value):
      alert(`Well Done! You are verified, your postal code is ${value}`)
      break;
    case nameRegex.test(value):
      alert(`Well Done! Dear ${value}`)
      break;
    case mobileRegex.test(value):
      alert(`Well Done! Your number ${value} has been verified`)
      break;
    case emailRegex.test(value):
      alert(`Well Done! Dear ${value}`)
      break;
    default:
      alert('Wrong Input Dude')
  }
}
