import { ImgViewer } from 'components/ImgViewer/ImgViewer';
import { Navbar } from 'shared/Navbar/Navbar';

import img1 from 'assets/images/faq/faq_page-0001.jpg';
import img2 from 'assets/images/faq/faq_page-0002.jpg';
import img3 from 'assets/images/faq/faq_page-0003.jpg';
import img4 from 'assets/images/faq/faq_page-0004.jpg';

function Faq(){
    const imgs = [
        img1,
        img2,
        img3,
        img4
    ]
    return(
        <>
            <Navbar />
            <ImgViewer imgs={imgs} />
        </>
    )
}

export { Faq };