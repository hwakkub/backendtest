// import type { NextApiRequest,NextApiResponse } from "next";

// const mysql = require('mysql2')

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_DATABASE
// });


export async function GET() {
    return Response.json({message : "Hello world"})
}



// import { getProductList } from '@/database/product';

// export async function GET(req: Request, res: Response) {
//     try {
//         const products = await getProductList();
//         console.log('products :', products);
//         return Response.json({ message: 'success', data: products });
//     } catch (error) {
//         console.log('error', error);
//         return Response.json({ message: 'error', data: error });
//     }
// }