

//? type guard or type narrowing

//* in typeof

type Add = (num1:number | string, num2: number | string) => number | string;

const add:Add = (num1, num2) =>{
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }else{
        return num1.toString() + num2.toString();
    }
};

//* in guard

type NormalUser = {
    name: string;
};

type AdminUser = NormalUser & {
    role: "Admin" ;
}

const getUserInfo = (user: NormalUser | AdminUser) =>{
    if('role' in user){
     console.log(`This ${user.name} and his role is: ${user.role}`);
    }else{
        console.log(`This ${user.name} `);
    }
};

getUserInfo({name:'Normal', role:'Admin'
})