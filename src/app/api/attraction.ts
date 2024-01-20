// import { OkPacket, RowDataPacket } from 'mysql2';
// import { db } from '../../config/database';


// interface MyData extends RowDataPacket{
//     id: string,
//     name: string,
//     coverimage: string,
//     detail: string
// }

// export const getData = () => {
//     return new Promise<MyData[]>((resolve, reject) => {
//         db.query<MyData[]>('SELECT * FROM attractions', (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// };

import { getData } from '@/database/attractions';

export async function GET(req: Request, res: Response) {
    try {
        const products = await getData();
        console.log('products :', products);
        return Response.json({ message: 'success', data: products });
    } catch (error) {
        console.log('error', error);
        return Response.json({ message: 'error', data: error });
    }
}