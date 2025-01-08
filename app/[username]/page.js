import PaymentPage from '@/components/PaymentPage';
import React from 'react';
import { notFound } from 'next/navigation';
import connectDB from '@/db/connectDb';
import User from '@/models/user';


const Username= async ({params }) =>{
  //if username is not present in the db, show a 404 page
  const checkUser=async () =>{
    await connectDB()
    let u= await User.findOne({ username:params.username})
    if(!u){
      return notFound()
    }
  }
  await checkUser()
  return (
    <>
      <PaymentPage username={params.username} />
    </>
  
  );
}

  

export default Username

//dynamic metadata
export async function generateMetadata({parmas}){
  return {
    title: `Support {params.username}-Get Me A Chai`,
  }
}