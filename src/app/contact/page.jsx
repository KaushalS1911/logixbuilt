import HeadingPage from "../../components/global/headingPage";
import bg1 from "../../assets/images/contact/ct1.webp";
import Collaborate from "../../components/contact-us/collaborate";
import Offices from "../../components/contact-us/offices";
const breadCrumbs = [
    {label:'Home',route: '/'},
    {label:'Contact',route: '/contact'},
]
function Page() {
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Contact Us'} breadcrumbs={breadCrumbs}/>
            <Collaborate/>
            <Offices/>
        </>
    );
}

export default Page;