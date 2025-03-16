"use client"
import { useEffect, useRef, useState } from 'react';

export default function LazyIframe({ src, preloadMargin='100px', ...rest }) {
    const iframeRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !loaded) {
                    const iframe = document.createElement('iframe');
                    Object.assign(iframe, {
                        ...rest,
                        src,
                        loading: 'lazy',
                    });

                    iframeRef.current.appendChild(iframe);
                    setLoaded(true);
                    observer.unobserve(entry.target);
                }
            });
        },{
          rootMargin: preloadMargin // load before entering viewport
        });

        if (iframeRef.current) {
            observer.observe(iframeRef.current);
        }

        return () => {
            if (iframeRef.current) {
                observer.unobserve(iframeRef.current);
            }
        };
    }, [src, rest, loaded, preloadMargin]);

    return <div ref={iframeRef}></div>;
}
