import { ImgViewer } from 'components/ImgViewer/ImgViewer';
import { Navbar } from 'shared/Navbar/Navbar';
import img1 from 'assets/images/cultura/cultura_page-0001.jpg';
import img2 from 'assets/images/cultura/cultura_page-0002.jpg';
import img3 from 'assets/images/cultura/cultura_page-0003.jpg';
import img4 from 'assets/images/cultura/cultura_page-0004.jpg';
import img5 from 'assets/images/cultura/cultura_page-0005.jpg';
import img6 from 'assets/images/cultura/cultura_page-0006.jpg';
import img7 from 'assets/images/cultura/cultura_page-0007.jpg';
import img8 from 'assets/images/cultura/cultura_page-0008.jpg';
import img9 from 'assets/images/cultura/cultura_page-0009.jpg';

function Culture(){
    const imgs = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9
    ]
    return(
        <>
            <Navbar />
            <ImgViewer imgs={imgs}/>
        </>
    )
}

export { Culture };