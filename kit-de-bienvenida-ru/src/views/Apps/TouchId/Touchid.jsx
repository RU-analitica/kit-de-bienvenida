import { ImgViewer } from 'components/ImgViewer/ImgViewer';
import { Navbar } from 'shared/Navbar/Navbar';
import img1 from 'assets/images/touchid/touchid_page-0001.jpg';
import img2 from 'assets/images/touchid/touchid_page-0002.jpg';

function Touchid(){
    const imgs = [
        img1,
        img2
    ]
    return(
        <>
            <Navbar />
            <ImgViewer imgs={imgs} />
        </>
    )
}

export { Touchid };