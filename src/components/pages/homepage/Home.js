import React from 'react';
import Hero from '../../Hero';
import { homeObjOne, homeObjThree,
    homeObjTwo, homeObjFour} from './Data';
function Home() {
    return (
        <>
            <Hero {...homeObjOne} />
            <Hero {...homeObjThree} />
        <Hero {...homeObjTwo}/>
        {/* <Pricing /> */}
        <Hero {...homeObjFour} />
        </>
    )
}

export default Home
