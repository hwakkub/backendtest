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