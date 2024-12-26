import headingPage from '../../components/global/headingPage';
import bg1 from '../../assets/images/blog/b-1.webp';

import Newsletter from '../../components/global/newsletter';
import HeadingPage from "../../components/global/headingPage";
import Posts from "../../components/blog/posts";

const breadCrumbs = [
    {label:'Home',route: '/'},
    {label:'Blogs',route: '/blog'},
]
const Page = () => {
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Blogs'} breadcrumbs={breadCrumbs}/>
            <Newsletter />
            <Posts/>

        </>
    );
}

export default Page;