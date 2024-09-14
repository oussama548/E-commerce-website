//0- Selecting the corresponding page to work with :
const home=document.getElementById('home');
const shop=document.getElementById('shop');
const menPro=document.getElementById('menPro');
const menShirt=document.getElementById('menShirt');
const menPants=document.getElementById('menPants');
const menShoe=document.getElementById('menShoe');
const menAccessories=document.getElementById('menAccessories');
const womenPro=document.getElementById('womenPro');
const womenDress=document.getElementById('womenDress');
const womenPants=document.getElementById('womenPants');
const womenShoe=document.getElementById('womenShoe');
const womenAccessories=document.getElementById('womenAccessories');
const signIn=document.getElementById('signin');
const signUp=document.getElementById('signup');
const contact=document.getElementById('contact');
const card=document.getElementById('card');
const details=document.getElementById('details');

//0- Functions to deal with data (store/retrieve)

//Global variables declaration

var UsersList=[]; // global array that'll hold the loaded data (users)
var currUser={}; //object representing the current user on the system
var clickObj={}; //object representing the clicked object

//we fetch the clicked obj
if(localStorage.click){
    clickObj=JSON.parse(localStorage.getItem('click'));
    console.log(clickObj);
}


//a- Storing data
let StoreData=()=>{
    //storing the array of users in string format (JSON)
    localStorage.setItem('user',JSON.stringify(UsersList));
}

//b-Retrieving data
let LoadData=()=>{
    UsersList=JSON.parse(localStorage.getItem('user'));
}
//c- now we need to load the users data during the execution of the program
if(localStorage.getItem('user')){
    LoadData();//--> now we have the users
}

//initialize the current user
for(let i=0;i<UsersList.length;i++){
    if(UsersList[i].isActive===true){
        currUser=UsersList[i];
    }
}
console.log(currUser);



//a- this code will be executed when the home page is loaded
if(home){

}



// b- this code is executed when we are on the home page
else if(shop){
    //1- when clicking on "Men" or "Women" -> the products page occurs
const women_btn=document.getElementsByClassName('woman-btn')[0];
const men_btn=document.getElementsByClassName('man-btn')[0];

//a- clicking on women:
women_btn.addEventListener('click',()=>{
    location.href="womenPro.html";
})
//b- clicking on men
men_btn.addEventListener('click',()=>{
    location.href='menPro.html';
})

//2- when clicking on the product card -> a page appears that conatin information about it


}


//this code is executed when the men page is loaded
else if(menPro){
    //2- when hovering over "category button"-> a list pops-up
    const ctgrBtn=document.querySelectorAll('.cat-btn')[0];
    ctgrBtn.addEventListener('click',()=>{
       const list=document.getElementById('List');//getting the list
       const btn=document.getElementsByClassName('cat-btn')[0]; //getting the category btn
       //a- make appear of the list
       list.classList.toggle('hide');
       //b- hide the button
       if(btn.classList.contains('hide')){
           btn.classList.remove('hide');
       }
       else{
           btn.classList.add('hide');
       }
    })
}

else if(menShirt){
    //2- when hovering over "category button"-> a list pops-up
    const ctgrBtn=document.getElementById('shirt');
    ctgrBtn.addEventListener('click',()=>{
       const list=document.getElementById('List');//getting the list
       const btn=document.getElementsByClassName('cat-btn')[0]; //getting the category btn
       //a- make appear of the list
       list.classList.toggle('hide');
       //b- hide the button
       if(btn.classList.contains('hide')){
           btn.classList.remove('hide');
       }
       else{
           btn.classList.add('hide');
       }
    })

}
else if(menPants){
    //2- when hovering over "category button"-> a list pops-up
    const ctgrBtn=document.getElementById('pant');
    ctgrBtn.addEventListener('click',()=>{
       const list=document.getElementById('List');//getting the list
       const btn=document.getElementsByClassName('cat-btn')[0]; //getting the category btn
       //a- make appear of the list
       list.classList.toggle('hide');
       //b- hide the button
       if(btn.classList.contains('hide')){
           btn.classList.remove('hide');
       }
       else{
           btn.classList.add('hide');
       }
    })

}
else if(menShoe){
    //2- when hovering over "category button"-> a list pops-up
    const ctgrBtn=document.getElementById('shoe');
    ctgrBtn.addEventListener('click',()=>{
       const list=document.getElementById('List');//getting the list
       const btn=document.getElementsByClassName('cat-btn')[0]; //getting the category btn
       //a- make appear of the list
       list.classList.toggle('hide');
       //b- hide the button
       if(btn.classList.contains('hide')){
           btn.classList.remove('hide');
       }
       else{
           btn.classList.add('hide');
       }
    })

}
else if(menAccessories){
    //2- when hovering over "category button"-> a list pops-up
    const ctgrBtn=document.getElementById('access');
    console.log(ctgrBtn);
    ctgrBtn.addEventListener('click',()=>{
       const list=document.getElementById('List');//getting the list
       const btn=document.getElementsByClassName('cat-btn')[0]; //getting the category btn
       //a- make appear of the list
       list.classList.toggle('hide');
       //b- hide the button
       if(btn.classList.contains('hide')){
           btn.classList.remove('hide');
       }
       else{
           btn.classList.add('hide');
       }
    })

}
else if(womenPro){
    // when clicking on "category button"-> a list pops-up
    const ctgrBtn=document.querySelectorAll('.cat-btn')[0];
    ctgrBtn.addEventListener('click',()=>{
       const list=document.getElementById('List');//getting the list
       const btn=document.getElementsByClassName('cat-btn')[0]; //getting the category btn
       //a- make appear of the list
       list.classList.toggle('hide');
       //b- hide the button
       if(btn.classList.contains('hide')){
           btn.classList.remove('hide');
       }
       else{
           btn.classList.add('hide');
       }
    })
}
else if(womenDress){
    // when clicking on "category button"-> a list pops-up
    const ctgrBtn=document.querySelectorAll('.cat-btn')[0];
    ctgrBtn.addEventListener('click',()=>{
       const list=document.getElementById('List');//getting the list
       const btn=document.getElementsByClassName('cat-btn')[0]; //getting the category btn
       //a- make appear of the list
       list.classList.toggle('hide');
       //b- hide the button
       if(btn.classList.contains('hide')){
           btn.classList.remove('hide');
       }
       else{
           btn.classList.add('hide');
       }
    })

}
else if(womenPants){
    // when clicking on "category button"-> a list pops-up
    const ctgrBtn=document.querySelectorAll('.cat-btn')[0];
    ctgrBtn.addEventListener('click',()=>{
       const list=document.getElementById('List');//getting the list
       const btn=document.getElementsByClassName('cat-btn')[0]; //getting the category btn
       //a- make appear of the list
       list.classList.toggle('hide');
       //b- hide the button
       if(btn.classList.contains('hide')){
           btn.classList.remove('hide');
       }
       else{
           btn.classList.add('hide');
       }
    })

}
else if(womenShoe){
    // when clicking on "category button"-> a list pops-up
    const ctgrBtn=document.querySelectorAll('.cat-btn')[0];
    ctgrBtn.addEventListener('click',()=>{
       const list=document.getElementById('List');//getting the list
       const btn=document.getElementsByClassName('cat-btn')[0]; //getting the category btn
       //a- make appear of the list
       list.classList.toggle('hide');
       //b- hide the button
       if(btn.classList.contains('hide')){
           btn.classList.remove('hide');
       }
       else{
           btn.classList.add('hide');
       }
    })

}
else if(womenAccessories){
    // when clicking on "category button"-> a list pops-up
    const ctgrBtn=document.querySelectorAll('.cat-btn')[0];
    ctgrBtn.addEventListener('click',()=>{
       const list=document.getElementById('List');//getting the list
       const btn=document.getElementsByClassName('cat-btn')[0]; //getting the category btn
       //a- make appear of the list
       list.classList.toggle('hide');
       //b- hide the button
       if(btn.classList.contains('hide')){
           btn.classList.remove('hide');
       }
       else{
           btn.classList.add('hide');
       }
    })

}
else if(details){
    let container=document.getElementsByClassName('details')[0];
    container.innerHTML=`
       <div class="detImg">
          <img src="${clickObj.image}" />
      </div>
      <div class="article">
        <h3>${clickObj.name}</h3>
        <h1>$ ${clickObj.price}</h1>
        <h2>Product details:</h2>
        <p>
          details : Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque voluptas repellat magnam asperiores veritatis mollitia,
          vitae eaque, quae quo itaque doloribus accusamus aut? Id esse
          consectetur provident, ipsam natus numquam? Accusantium alias quia
          sint at maxime sunt necessitatibus, cumque quibusdam!
        </p>
       </div>
    `
}
else if(signIn){

/*
add html page for disconnection
the page contains navbar & footer and a thanks message
*/



    //1- the user want to sign-in:
    const signin=document.getElementsByClassName('inBtn')[0];
   signin.addEventListener('click',()=>{
    const mail=document.getElementById('inmail').value;
    const passwd=document.getElementById('inpasswd').value;
    //checking wether the user exists
    let found=false;
    for(let i=0;i<UsersList.length;i++){
        if(UsersList[i].email==mail && UsersList[i].password==passwd){//user is found
            //0- activate the user
            UsersList[i].isActive=true;
            //1- disable the previous user from the list
            for(let i=0;i<UsersList.length;i++){
                if(UsersList[i].email==currUser.email && UsersList[i].password==currUser.password){
                    UsersList[i].isActive=false;
                }
            }

            //2- initialize the current user
            currUser=UsersList[i];
            //3- store the updated data
            StoreData();
            //4-we forward it to home page
            location.href="home.html";
            found=true;
            break; 
        }
        
    }
    if(found===false){//user not found
        window.alert("User not found , Please ensure correct Data");
    }
    })


    //2- the user want to sign-up--> forward it to signUp.html
    const signup=document.getElementsByClassName('upBtn')[0];
    signup.addEventListener('click',()=>{ 
        console.log("done");
        location.href="signup.html";
    })

}
else if(signUp){
    //0- functions to check wether the email and passwd are valid
    let validMail=(email)=>{
        // Regular expression for validating an email address
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,7}$/;
  
        // Test the email against the regex
        return emailRegex.test(email);
    }

    let validPasswd=(psswd)=>{
        return (psswd.length>=10);
    }


    //click on sign-in --> redirected to the sign-in page
    const signin=document.getElementById('btnin');
    signin.addEventListener('click',()=>{
        location.href="signin.html";
    })

    //click on sign-up 
    const signup=document.getElementById('btnup');
    signup.addEventListener('click',()=>{
        //1- initializing user object to hold the data
        let user={};
        //2- collecting the user data in an object
        let mail=document.getElementById('upmail');
        let fname=document.getElementById('upname');
        let passwd=document.getElementById('uppasswd');
        // the signed-up user must be unique
        let repeated=false;
        if(UsersList){
            for(let i=0;i<UsersList.length;i++){
                if(UsersList[i].email===mail.value){
                    repeated=true;
                    break;
                }
            }
        }
        
        //if the entered data is valid
        if(validMail(mail.value) && validPasswd(passwd.value)  && repeated===false){
            user.email=mail.value;
            user.name=fname.value;
            user.password=passwd.value;
            user.products=[];
            user.opinion='';
            user.isActive=true;
            //search for the current user in the list and disable it : 
            for(let i=0;i<UsersList.length;i++){
                if(UsersList[i].email==currUser.email && UsersList[i].password==currUser.password){
                    UsersList[i].isActive=false;
                }
            }
            
            //3- push the new user on the array of users
            UsersList.push(user);
            //4- Store it on the Local storage
            StoreData();
            //5- initialize the current user (global obj) with that user
            currUser=user;
            //6- reload the data (update the array)
            LoadData();
            //6.5- some delay (realistic)
            setTimeout(()=>{
                //7- redirect the user to the home page
                location.href="home.html";
            },1000);
            
        }
        else if(repeated===true){
            console.log('repeat');
            window.alert('The user with this email has already signed');
        }
        else{
            window.alert('Please ensure valid input');
        }
        setTimeout(()=>{
            mail.value='';
            passwd.value='';
         fname.value='';
        },700);
        
        
    })
}
else if(contact){
    //the user me sign-in before writing the message
    if(currUser){
        const message=document.getElementsByTagName('textarea')[0].value;
        currUser.opinion=message;
        //we update the current user on the array
        for(let i=0;i<UsersList.length;i++){
            if(currUser.email===UsersList[i].email && currUser.password===UsersList[i].password){
                UsersList[i].opinion=message;
                break;
            }
        }
        //store the data
        StoreData();
        //reload again
        LoadData();
    }
}
else if(card){
    let table=document.getElementsByTagName('table')[0];
    //2- display it on the table
    table.innerHTML=`
        <tr>
          <td>REMOVE</td>
          <td>IMAGE</td>
          <td>PRODUCT</td>
          <td>PRICE</td>
          <td>QUANTITY</td>
          <td>TOTAL</td>
        </tr>
    `
    //hiding the text
    let empty=document.getElementsByClassName('void')[0];
    if(currUser.products.length==0){
        empty.classList.add('hide');
    }
    console.log(currUser.products.length);
    //3-display the products
    for(let i=0;i<currUser.products.length;i++){
        table.innerHTML+=`
        <tr>
          <td><img class="remove" src="icons/bouton-supprimer.png" /></td>
          <td>
            <img
              class="smallpro"
              src="${currUser.products[i].image}"
            />
          </td>
          <td>${currUser.products[i].name}</td>
          <td>${currUser.products[i].price}</td>
          <td><input type="number" /></td>
          <td>${currUser.products[i].price}$</td>
        </tr>
        `
    }
}

if(!shop && !signIn && !signUp && !contact){

//First we handle when we click on the add button


    if(Object.keys(currUser).length!=0){
        //1- getting all the add buttons
            let addOption=document.getElementsByClassName('add');
            let prices=document.getElementsByClassName('price');
            let images=document.getElementsByClassName('pro-img');
            let names=document.getElementsByClassName('pro-name');
            for(let i=0;i<addOption.length;i++){
                 addOption[i].addEventListener('click',()=>{
                 //a-creating product object and initialize it with its values
                 proObj={};
                 proObj.name=names[i].textContent;
                 proObj.price=prices[i].textContent;
                 proObj.image=images[i].src;
                 console.log('object created');
                 //b-store the object inside the current user
                 currUser.products.push(proObj);
                 //store the updated user on the array
                 for(let i=0;i<UsersList.length;i++){
                    if(UsersList[i].email===currUser.email){
                        UsersList[i]=currUser;
                    }
                 }
                 //c- store the updated array
                 StoreData();

                 //d- load the data again
                 LoadData();
                 window.alert('You added a product to your card');
                 console.log('done');
                 console.log(currUser.products[0]);
                })
            } 

    }



//Now, we handle clicking the card's image: 

let cardImg=document.getElementsByClassName('pro-img');//the image
let cardPrice=document.getElementsByClassName('price');//the price
let cardMark=document.getElementsByClassName('mark');// the brand
let cardName=document.getElementsByClassName('pro-name');//the name
for(let i=0;i<cardImg.length;i++){
    cardImg[i].addEventListener('click',()=>{
        //we fill the global object->clicked product
        let click={
            image:cardImg[i].src,
            price:cardPrice[i].textContent,
            brand:cardMark[i].textContent,
            name:cardName[i].textContent
        }
        

        //we store the clicked obj
        localStorage.setItem('click',JSON.stringify(click));//stored in the local storage

        //now we forward the user to the details page
        location.href="proDetails.html";
    })
}
    
}