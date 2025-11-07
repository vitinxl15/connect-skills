import { AuthProvider, useAuth } from "@/contexts/authContext";
import { supabase } from "@/lib/supabase";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";





function MainLayout() {
  const router = useRouter();
  const {setAuth} = useAuth();


  useEffect(()=> {
    supabase.auth.getSession().then(( {data:{session}}) => {
      setAuth({user: session?.user ?? null, session: session ?? null});
      if(!session?.user) {
        router.replace("./(tabs)");
    }
    else {
      router.replace("./(auth)/index");
    }
    });
  

  const {data: sup } = supabase.auth.onAuthStateChange((_event,session)=> {
    setAuth({user: session?.user ?? null, session: session ?? null});
    if(!session?.user) {
      router.replace("./(tabs)");
    }
    else {
      router.replace("./(auth)/index");
    }
  });
  return () =>{
    sup.subscription.unsubscribe();

  };
}, []);

return (
  <Stack screenOptions={{headerShown: false}}>
    {/*SplashScreen */}
    <Stack.Screen name="(auth)" />
    <Stack.Screen name="(tabs)" />

  </Stack>
);

}




export default function Root() {
  return (
  <AuthProvider>
  <MainLayout />
  </AuthProvider>
  );
}
