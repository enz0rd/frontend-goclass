import { useEffect } from 'react';

const Map = ({ address, width = "100%", height } : { address: string, width?: string | number, height: number }) => {
    const addressEncoded = encodeURI(address);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://embedmaps.com/google-maps-authorization/script.js?id=ae001165f129b4121e9b8453684e768dc9dcb19d';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Remove o script quando o componente é desmontado
        };
    }, []);

    return (
        <div className="rounded-lg">
            <iframe
                width={width}
                height={height}
                id="gmap_canvas"
                src={`https://maps.google.com/maps?width=520&height=400&hl=en&q=${addressEncoded}&t=&z=17&ie=UTF8&iwloc=B&output=embed&scroll=no`}
            ></iframe>
        </div>
    );
};

export default Map;
