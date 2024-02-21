import { useState, useEffect } from 'react';

export function useOnlineStatus() {

	const checkOnlineStatus = async () => {
		console.log("checking OnlineStatus");
		try {
		  const online = await fetch("itbs.selfhost.co/index.html");
		  
		  return online.status >= 200 && online.status < 300; // either true or false
		} catch (err) {
		  return false; // definitely offline
		}
	};

  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
    	console.log("handleOnline",navigator.onLine);
    	if(checkOnlineStatus()){
    		console.log("no connection error to my app");
    	}
      setIsOnline(true);
    }
    function handleOffline() {
    	console.log("handleOffline",navigator.onLine);
    	if(checkOnlineStatus()){
    		console.log("no connection error to my app");
    	}
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return isOnline;
}

