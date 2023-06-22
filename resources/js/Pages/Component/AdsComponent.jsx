import React, { useEffect } from 'react';

const AdsComponent = ({ dataAdSlot }) => {

    if (process.env.NODE_ENV !== 'production') {
        return <></>
    }

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
        catch (e) {
        }
    }, []);

    return (
        <>
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-8694698492521431"
                data-ad-slot={dataAdSlot}
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        </>
    );
};

export default AdsComponent;