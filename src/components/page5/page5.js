import classes from './App5.module.css';
import Chevron from '../images/Chevron Right 1.png';
import Home1 from '../images/Home1.png';
import Video from '../images/Video.png';
import ShieldDone from '../images/Shield Done.png';
import Camera from '../images/Camera.png';
import Buy from '../images/Buy.png';
import Calling from '../images/Calling.png';
import Setting1 from '../images/Setting1.png';
import Others from '../images/3 User.png';
import {Menu} from '../menu/menu';
import {Header} from '../header/header';
import {Footer} from '../footer/footer';
import {ElementUl} from './components/elementUl/elementUl';


function page5() {
    return (
        <div className={classes.app}>
            <Menu/>
            <div className={classes.content_main}>
                <Header/>
                <div className={classes.content}>
                    <div className={classes.main_text}>
                        <div className={classes.header_text}>
                            <img src={Chevron} className={classes.arrow_header} alt="logo"/>
                            <span className={classes.header_span_first}>PROJECTS \&nbsp;</span>
                            <div className={[classes.header_span_first, classes.bold].join(' ')}>NEW PROJECT</div>
                        </div>
                        <span className={classes.header_main}>Confirm the industry of your business</span>
                        <span className={classes.header_main_after}>The sector of your industry determines the products we can cusomize and imrove. Choose below the industry we will analyze.</span>
                    </div>
                    <div className={classes.content_ul}>
                        <ElementUl className={[classes.content_li, classes.active_content_li].join(' ')} src={Home1} text="Financial Institutions"/>
                        <ElementUl className={classes.content_li} src={Video} text="Telco"/>
                        <ElementUl className={classes.content_li} src={ShieldDone} text="Insurance"/>
                        <ElementUl className={classes.content_li} src={Camera} text="Tourism and Leisure"/>
                        <ElementUl className={classes.content_li} src={Buy} text="Retail"/>
                        <ElementUl className={classes.content_li} src={Calling} text="Call Centers"/>
                        <ElementUl className={classes.content_li} src={Setting1} text="Utilities"/>
                        <ElementUl className={classes.content_li} src={Others} text="Others"/>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default page5;