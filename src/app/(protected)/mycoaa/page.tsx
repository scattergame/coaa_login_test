"use client"
import { useSession } from '@clerk/clerk-react';
import { useState, useEffect } from 'react';
import { db } from '@/firebase';
import { collection, getDocs, query, where, DocumentData } from 'firebase/firestore';
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { UserButton } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from "next-themes";
import { DateInput } from "@nextui-org/date-input";
import { CalendarDate, parseDate } from "@internationalized/date";
import { Input } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";


export default function Mycoaa_Page() {

    const { isLoaded, session, isSignedIn } = useSession();
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [firestoreData, setFirestoreData] = useState<DocumentData[] | null>(null);
  
    const fetchDBbyEmail = async (email: string) => {
        try {
            const q = query(collection(db, "member"), where("Email", "==", email));
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(doc => doc.data());
            setFirestoreData(data);
        } catch (error) {
            console.error("Error fetching Firestore data: ", error);
        }
    }
    
    useEffect(() => {
        if (isLoaded && isSignedIn) {
            const email = session.user.emailAddresses[0]?.emailAddress;
            if (email) {
                fetchDBbyEmail(email);
            }
        }
    }, [isLoaded, isSignedIn, session]);
  
  if (!isLoaded) {
      return (
        <div className='flex min-h-96 items-center justify-center'></div>
    );
  }
  if(!isSignedIn) {
    return <div className='flex min-h-96 items-center justify-center'></div>;
  }

    return (
      <div className='flex flex-col min-h-96 items-center justify-center'>
          <Card className="w-full max-w-[400px] ">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
              {/* <Avatar isBordered radius="full" size="md" src={session.user.imageUrl} /> */}
                      {isSignedIn ? (
                        <UserButton
                            appearance={
                                currentTheme === "dark" ? { baseTheme: dark } : undefined
                                } />
                        ): (<></>)}
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">{ session.user.firstName } { session.user.lastName }</h4>
                            <h5 className="text-small tracking-tight text-default-400">{ session.user.emailAddresses[0]?.emailAddress}</h5>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-600">
                    <p>
                        <>COAA Web Placeholder TODO: Chapter Info</>
                    </p>
                    
                    <span>
                        Join us for better research, collaboration, and more..
                        <span aria-label="laugh" role="img">
                            😆
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
        <Divider className="my-4 w-full max-w-[400px] " />
        <Card className="w-full max-w-[400px] ">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              COAA Membership Information:
            </div>
          </CardHeader>
          <CardBody className="px-3 py-3 text-small text-default-600">
            {firestoreData && firestoreData.length > 0 && (
              <div>
                <Input
                  type="email"
                  label="Your email address in our database"
                  isReadOnly
                  defaultValue={firestoreData[0].Email}
                  className="max-w-xs mb-4" />
                <Divider className="mb-4"/>
                <Input
                  type="text"
                  label="Your address in our database"
                  isReadOnly
                  defaultValue={firestoreData[0].Address}
                  className="max-w-xs mb-4" />
                <Divider className="mb-4" />
                <Input
                  type="text"
                  label="Your phone number in our database"
                  isReadOnly
                  defaultValue={`${firestoreData[0].PhoneHome}, ${firestoreData[0].PhoneWork}`}
                  className="max-w-xs mb-4" />
                <Divider className="mb-4" />
                <DateInput
                  label={"Member Since"}
                  isReadOnly
                  placeholderValue={new CalendarDate(1995, 11, 6)}
                  defaultValue={parseDate(firestoreData[0].MemberStart.toDate().toISOString().split('T')[0])}
                  className="max-w-xs mb-4" />
                <Divider className="mb-4" />
                <DateInput
                  label={"Subscription Expires on:"}
                  isReadOnly
                  placeholderValue={new CalendarDate(1995, 11, 6)}
                  defaultValue={parseDate(firestoreData[0].SubscriptionUntil.toDate().toISOString().split('T')[0])}
                  className="max-w-xs" />
              </div>
            )}
          </CardBody>
        </Card>
    </div>
  )
}
