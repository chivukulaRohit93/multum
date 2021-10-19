export class Person4 {
    // static id(id: any) {
    //   throw new Error('Method not implemented.');
    // }
    id?:number;
    firstName!: string;
    middleName!: string;
    lastName!: string;
    emailId!:string;
    password!:string;
    confirmPassword!:string;
    phoneNumber!:string;
    dob!:string;
    homeAddress!: {
      zipCode:Number;
    }
    acceptTerms!:boolean;
    userType!:string;
    role!: {
      id:any;
    }
  }