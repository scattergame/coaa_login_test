"use client"
import { useAuth, useSession } from '@clerk/clerk-react';
import Image from 'next/image'
import { useState } from 'react';
import { db } from '@/firebase';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

export default function Mycoaa_Page() {

    const { isLoaded, session, isSignedIn } = useSession();
    const [firestoreData, setFirestoreData] = useState<DocumentData[] | null>(null);

    const fetchFirestoreData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "test"));
      const data = querySnapshot.docs.map(doc => doc.data());
      setFirestoreData(data);
    } catch (error) {
      console.error("Error fetching Firestore data: ", error);
    }
  };

  if (!isLoaded) {
      return (
        <div className='flex min-h-96 items-center justify-center'></div>
    );
  }
  if(!isSignedIn) {
    return <div className='flex min-h-96 items-center justify-center'></div>;
  }

    return (
      <div className='flex min-h-96 items-center justify-center'>
        <Card className="max-w-[450px]">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md" src={session.user.imageUrl} />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">{ session.user.firstName } { session.user.lastName }</h4>
                            <h5 className="text-small tracking-tight text-default-400">{ session.user.emailAddresses[0]?.emailAddress}</h5>
                        </div>
                    </div>
              
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-600">
                    <p>
                        <>COAA Web Developer @ {session.user.publicMetadata.category} Chapter</>
                    </p>
                    <span>
                        Join us for better user interfaces, faster development, and more.
                        <span aria-label="computer" role="img">
                            💻
                        </span>
                    </span>
                </CardBody>
                <CardFooter className="gap-3">
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">4</p>
                        <p className=" text-default-400 text-small">Articles</p>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">10</p>
                        <p className="text-default-400 text-small">News Letters</p>
                    </div>
                </CardFooter>
        </Card>
    </div>
  )
}
