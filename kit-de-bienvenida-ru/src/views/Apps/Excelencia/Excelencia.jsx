import { ImgViewer } from 'components/ImgViewer/ImgViewer';
import { Navbar } from 'shared/Navbar/Navbar';
import img1 from 'assets/images/excelencia/excelencia_page-0001.jpg';
import img2 from 'assets/images/excelencia/excelencia_page-0002.jpg';
import img3 from 'assets/images/excelencia/excelencia_page-0003.jpg';
import img4 from 'assets/images/excelencia/excelencia_page-0004.jpg';
import img5 from 'assets/images/excelencia/excelencia_page-0005.jpg';

function Excelencia(){
    const imgs = [
        img1,
        img2,
        img3,
        img4,
        img5
    ]
    return(
        <>
            <Navbar />
            <ImgViewer imgs={imgs}/>
        </>
    )
}

export { Excelencia };