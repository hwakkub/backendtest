import * as dotenv from 'dotenv';
dotenv.config({ path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : `.env` });

export default function Home() {
  return (
    <div>Hello</div>
  );
}
