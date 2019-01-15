export interface UserInfo {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    Phone: any;
    website: string;
    company: Company;
  }
  export interface Address {
    street: string;
    suite : any;
    city: string;
    zipcode: any;
    geo: Geo;
  }
  export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  export interface Geo {
    lat: any;
    lng: any;
  }