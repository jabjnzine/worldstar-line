"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { Button } from "../ui/button";

export default function SplashScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState<any>({});
  const { push } = useRouter();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const liff = (await import("@line/liff")).default;
        await liff.ready;
        const userProfile = await liff.getProfile();
        setProfile(userProfile);
        setIsLoggedIn(true);
        push("/events");
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
    // const timeout = setTimeout(() => {
    //   setIsMounted(true);
    // }, 2000);
    // return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {}, [isLoggedIn]);
  return (
    <div className="w-full h-dvh bg-[#670001] flex flex-col items-center justify-center">
      <Image src="/logo.jpg" alt="logo" id="logo" width={200} height={200} />{" "}
      {/* {profile && profile.userId} */}
    </div>
  );
}
