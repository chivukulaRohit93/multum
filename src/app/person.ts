export class Person {
      id?:number;
      firstName!: string;
      middleName!:string;
      lastName!: string;
      emailId!: string;
      password!: string;
      confirmPassword!: string;
      phoneNumber!:string;
      dob!:String;
      acceptTerms!: boolean;
      recoveryEmailId!: string;
      isMerchant!: boolean;
      isConfirmed!: boolean;
      currency!: string;
      isActive!: boolean;
      userType!:string;
      homeAddress!: {
        zipCode:Number;
      }
      role!: {
        id:any;
      }
}

//     export class Role {​​​​​​​
//     id!: number;
//     name!: string;
//     displayName!: string;
//     description!: string;
// }​​​​​​​
 


// export class User {
//   id?: number;
//   firstName!: string;
//   lastName!: string;
//   middleName!: string;
//   dob: any;
//   emailId!: string;
//   phoneNumber!: string;
//   password!: string;
//   recoveryEmailId!: string;
//   isMerchant!: boolean;
//   isConfirmed!: boolean;
//   currency!: string;
//   isActive!: boolean;
//   role: any;
// }
