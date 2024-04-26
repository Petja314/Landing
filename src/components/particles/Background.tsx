import {useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {type Container, type ISourceOptions,} from "@tsparticles/engine";
import {loadSlim} from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

export const Background = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };




    const options: ISourceOptions = useMemo(
        () => ({
            key: "effectBubble",
            name: "Effect Bubble",
            particles: {
                number: {
                    value: 30,
                    density: {
                        enable: true,
                    },
                },
                color: {
                    value: "#4800ff", // Set a static color value
                },
                effect: {
                    type: "bubble",
                },
                shape: {
                    type: ["circle", "square"],
                },
                opacity: {
                    value: 0.2,
                },
                size: {
                    value: {
                        min: 5,
                        max: 50,
                    },
                },
                move: {
                    enable: true,
                    speed: 4,
                },
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: false,
                        mode: "repulse",
                    },
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                },
                modes: {
                    grab: {
                        distance: 400,
                        links: {
                            opacity: 1,
                        },
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 0.8,
                    },
                    repulse: {
                        distance: 200,
                    },
                    push: {
                        quantity: 4,
                    },
                    remove: {
                        quantity: 2,
                    },
                },
            },
            background: {
                color: "#0f0715",
            },
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }



    return <>

    </>;
};