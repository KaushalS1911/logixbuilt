import Herosection from "../components/home/herosection";
import Services from "../components/home/services";
import Testimonial from "../components/global/testimonial";
import Herosection2 from "../components/home/herosection2";


import Industries from "../components/home/industries";
import Capabilities from "../components/home/capabilities";
import ValuePropositions from "../components/home/value-propositions";

export default function Home() {
    return (
        <>
            {/*<Herosection />*/}
            {/*<Services />*/}
            {/*<Testimonial />*/}
            <Herosection2/>
            <Industries />
            <Capabilities/>
            <ValuePropositions />
            {/*<Industries />*/}
            {/*<Herosection />*/}
            {/*<Services />*/}
            {/*<Testimonial />*/}
        </>
    );
}
