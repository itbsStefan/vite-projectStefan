import { useOnlineStatus } from '../hooks/useOnlineStatus.js';

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h4>{isOnline ? '✅ Online.' : '❌ Disconnected'}</h4>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
  	let s = isOnline ? '✅ Online' : '❌ Disconnected';
    console.log(s + ' Progress handleSaveClick isOnline:',isOnline);
    if( checkOnlineStatusApp()){
    	console.log("check true")
    }else{
    console.log("check false")
    }
  }
  
  	const checkOnlineStatusApp = async () => {
		console.log("prüfe Verbindung");
		try {
		  const online = await fetch("itbs.selfhost.co/index.html");
		  
		  return online.status >= 200 && online.status < 300; // either true or false
		} catch (err) {
		  return false; // definitely offline
		}
	};

  return (
    <button className={isOnline ? "Online" : "Disconnected"} onClick={handleSaveClick}>
      {isOnline ? 'online Speichern' : 'offline Mod'}
    </button>
  );
}

export default function OnlineStatusHookApp() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}

