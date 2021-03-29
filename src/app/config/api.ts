import { environment } from 'src/environments/environment';

export const baseURL = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000';

export const productsUrl = baseURL + '/users';