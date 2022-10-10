import { ImgViewer } from 'components/ImgViewer/ImgViewer';
import { Navbar } from 'shared/Navbar/Navbar';
import img1 from 'assets/images/unitel/unitel_page-0001.jpg';

function Unitel(){
    const imgs = [
        img1
    ]
    return(
        <>
            <Navbar />
            <ImgViewer imgs={imgs} />
        </>
    )
}

export { Unitel };