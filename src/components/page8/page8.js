/* eslint-disable jsx-a11y/anchor-is-valid */
import classes from './App8.module.css';
import Chevron from '../images/Chevron Right 1.png';
import Folder from '../images/Folder.png';
import Paper from '../images/Paper.png';
import {Menu} from '../menu/menu';
import {Header} from '../header/header';
import {Footer} from '../footer/footer';
import {Country} from './components/country/country';


function page8() {
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
                        <span className={classes.header_main}>Upload file</span>
                        <span className={classes.header_main_after}>First select the country of origin of your database and then click to find the fire or drag it to this page.</span>
                    </div>
                    <div className={classes.content_ul_upload}>
                        <Country/>
                        <div className={[classes.content_li_upload, classes.drag].join(' ')}>
                            <img src={Folder} className={classes.li_picture_upload} alt="logo"/>
                            <div className={classes.li_text_upload}>
                                Drag & Drop your fires here.
                            </div>
                        </div>
                    </div>
                    <div className={classes.download_info}>
                        <div className={classes.download_info_header}>
                            Are you need our .CSV template?
                        </div>
                        <div className={classes.download_info_header_after}>
                            <span>Download</span>&nbsp;
                            <a className={classes.download_info_a}>here</a>&nbsp;
                            <span>our .csv template to speed up the process.</span>
                        </div>
                    </div>
                    <div className={classes.upload_div}>
                        <div className={[classes.li_text_upload, classes.header_upload].join(' ')}>
                            Uploaded files
                        </div>
                        <div className={classes.upload_progress_file}>
                            <img src={Paper} className={classes.li_picture_upload} alt="logo"/>
                            <div className={classes.upload_progress}>
                                <div className={[classes.li_text_upload, classes.upload_file].join(' ')}>
                                    <div className={classes.upload_file}>Project_v01</div>
                                    <div>100%</div>
                                </div>
                                <div className={classes.upload_line}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default page8;