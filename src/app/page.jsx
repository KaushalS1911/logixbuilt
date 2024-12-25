import Herosection from "../components/home/herosection";
import Services from "../components/home/services";
import Testimonial from "../components/global/testimonial";
import Herosection2 from "../components/home/herosection2";
import Ourmission from "../components/home/ourmission";

import Industries from "../components/home/industries";
import ValuePropositions from "../components/home/value-propositions";

export default function Home() {
    return (
        <>
            {/*<Herosection />*/}
            {/*<Services />*/}
            {/*<Testimonial />*/}
            <Herosection2/>
            <ValuePropositions />
            <Ourmission  />
            {/*<Industries />*/}
            {/*<Herosection />*/}
            {/*<Services />*/}
            {/*<Testimonial />*/}
        </>
    );
}
