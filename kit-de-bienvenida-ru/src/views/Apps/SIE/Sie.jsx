import { ImgViewer } from 'components/ImgViewer/ImgViewer';
import { Navbar } from 'shared/Navbar/Navbar';
import img1 from 'assets/images/sie/sie_page-0001.jpg';
import img2 from 'assets/images/sie/sie_page-0002.jpg';
import img3 from 'assets/images/sie/sie_page-0003.jpg';
import img4 from 'assets/images/sie/sie_page-0004.jpg';
import img5 from 'assets/images/sie/sie_page-0005.jpg';
import img6 from 'assets/images/sie/sie_page-0006.jpg';
import img7 from 'assets/images/sie/sie_page-0007.jpg';
import img8 from 'assets/images/sie/sie_page-0008.jpg';
import img9 from 'assets/images/sie/sie_page-0009.jpg';
import img10 from 'assets/images/sie/sie_page-0010.jpg';
import img11 from 'assets/images/sie/sie_page-0011.jpg';
import img12 from 'assets/images/sie/sie_page-0012.jpg';
import img13 from 'assets/images/sie/sie_page-0013.jpg';
import img14 from 'assets/images/sie/sie_page-0014.jpg';
import img15 from 'assets/images/sie/sie_page-0015.jpg';
import img16 from 'assets/images/sie/sie_page-0016.jpg';
import img17 from 'assets/images/sie/sie_page-0017.jpg';
import img18 from 'assets/images/sie/sie_page-0018.jpg';
import img19 from 'assets/images/sie/sie_page-0019.jpg';
import img20 from 'assets/images/sie/sie_page-0020.jpg';
import img21 from 'assets/images/sie/sie_page-0021.jpg';
import img22 from 'assets/images/sie/sie_page-0022.jpg';
import img23 from 'assets/images/sie/sie_page-0023.jpg';
import img24 from 'assets/images/sie/sie_page-0024.jpg';
import img25 from 'assets/images/sie/sie_page-0025.jpg';
import img26 from 'assets/images/sie/sie_page-0026.jpg';


function Sie(){
    const imgs = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
        img26
    ]
    return(
        <>
            <Navbar />
            <ImgViewer imgs={imgs} />
        </>
    )
}

export { Sie };