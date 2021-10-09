import React from 'react'
import useStyle from './style'
import about from '../../assets/images/about.png'
import { CardMedia, Grid, Typography } from '@material-ui/core'

function About() {
    const classes = useStyle()

    return (
        <main style={{padding:"15px"}} className={classes.aboutContainer}>
            <div className={classes.topDivContaienr}>
                <Grid container >

                    <Grid item lg={8} md={7} xs={12} className={classes.topAboutContainer} >
                        <Typography variant='h1'>
                            درباره ما
                        </Typography>
                        <Typography variant='h5' className={classes.title}>
                            تاریخچه : 
                        </Typography>
                        <Typography variant='body1' className={classes.descContainer} >
                            وب سایت تاپ لرن در پاییز 1396 پیاده سازی شده است . تاپ لرن یک پلتفرم کاملا متفاوت در زمینه یادگیری و آموزش بوده تا بتواند برای کسب و کار , توسعه و نگهداری نرم افزار , فن آوری های جدید و مهارت های خلاقانه ای که شما به دنبال ان هستید به صورت حرفه ای  آموزش ببینید.

                            در تاپ لرن همیشه به روز باشید:

                            اگر شما سعی دارید به صورت فردی برای بالا بردن مهارت های خود در جهت کسب و کار قصد دارید از آموزش آنلاین استفاده کنید : تاپ لرن کی از بهترین گزینه های شما خواهد بود . کافیست با مشاهده بیش از 10 ها ساعت ویدئویی که در سایت به صورت رایگان می باشد مهارت های خود را افزایش دهید . همچنین با هزینه هایی باور نکردنی که برای دوره های خاصی در سایت گذاشته شده است می توانید به صورت حرفه ای مهارت های خود را به سطح حرفه ای برسانید.

                            امروزه بسیاری از شرکت های بزرگ دنیا با توجه به نیاز های سازمانی  از افراد مورد اعتماد خود در سازمان برای رفع نیازهای خود استفاده می کنند .  با توجه به هزینه آموزش به صورت حضوری  و البته  چالش هایی نظیر مکان , زمان  و همچنین استاد مناسب رو به رو خواهند بود . شرکت ها ی خصوصی و دولتی می توانند با دسترسی به ویدئو های آموزشی تاپ لرن مهارت های کارمندان خود را افزایش دهند تا در واقع با بهره گیری و اپدیت نیرو های خود  شاهد عملکرد چشم گیری  انان در سازمان  باشند .
                        </Typography>
                    </Grid>
                    
                    <Grid item lg={4} md={5} xs={7} >
                        <CardMedia
                            component="img"
                            image={about}
                            alt="درباره ما "
                            className={classes.media}
                        />
                    </Grid>



                </Grid>

            </div>
            <Typography variant='h5' className={classes.title}>
                    چرا ما
             </Typography>
            <Typography variant='body1'  className={classes.descContainer} >
                    ما با برگزاری بیش از 100 ها کلاس حضوری و آموزش به هزاران دانشجو به صورت عمومی و برگزاری دوره های خصوصی با نهاد هایی نظیر : سایپا یدک , منطقه آزاد قشم , گروه پلیمر بوشهر , ایران خودرو ,   گسترش انفورماتیک ایرانیان ,   کشت و صنعت رژین تاک  تجربه فراوانی در حوزه آموزش داریم .

                <ul  className={classes.list}>
                    <li>
                    با گذراندن دوره های ویژه مدرک متعبر دریافت نمایید

                    </li>
                    <li>
                    رزومه تایید شده اساتید را مطالعه نمایید

                    </li>
                    <li>
                    از بیش از 100 ها ویدئو رایگان استفاده نمایید

                    </li>
                    <li>
                    پرداخت آسان در سایت

                    </li>
                    <li>
                    پشتیبانی از مشکلات فنی

                    </li>
                    <li>
                    پشتیبانی از مشکلات فنی

                    </li>
                    <li>
                    پشتیبانی علمی توسط اساتید

                    </li>
                    <li>
                    مشاهده سر فصل های آموزشی

                    </li>
                    <li>
                    کیفیت فوق العاده صدا و تصویر

                    </li>
                    <li>
                    مدرسین حرفه ای

                    </li>
                </ul>


            </Typography>
        </main>
    )
}

export default About
