import { useEffect } from 'react';
import useParkingStore from '../store/parkingStore';

function useGeolocation() {
const { setUserLocation } = useParkingStore();

useEffect(() => {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        pos => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => setUserLocation({ lat: 37.591, lng: 127.036 })
    );
    }
}, [setUserLocation]);
}

export default useGeolocation;
