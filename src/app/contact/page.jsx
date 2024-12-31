import HeadingPage from "../../components/global/headingPage";
import bg1 from "../../assets/images/contact/ct1.webp";
import Collaborate from "../../components/contact-us/collaborate";
import Offices from "../../components/contact-us/offices";
import {Box} from "@mui/material";
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
            <Box sx={{width: '100%'}}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.146115285308!2d77.29273277616414!3d28.625382584404043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4ad89928efb%3A0xaa9e724684e318a6!2sJBS%20Technology%20Private%20Limited!5e0!3m2!1sen!2sin!4v1735635561991!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            </Box>

        </>
    );
}

export default Page;