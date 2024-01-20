import { OkPacket, RowDataPacket } from 'mysql2';
import { db } from '../../../config/database';


interface MyData extends RowDataPacket{
    id: string,
    name: string,
    coverimage: string,
    detail: string
}

export const getData = () => {
    return new Promise<MyData[]>((resolve, reject) => {
        db.query<MyData[]>('SELECT * FROM attractions', (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
                
            }
        });
    });
};