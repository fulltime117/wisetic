import { styles } from '@material-ui/pickers/views/Calendar/Calendar';
import react from 'react';
import styleclass from './BlogPage.module.css'

const BlogBanner = () =>{
    return(
        <div className={styleclass.blog_banners}>
            <div className={styleclass.blog_banner_image}>
                <img src="./images/blogpage/blogbanner.jpg" alt="blogbanner" />
            </div>
        </div>
    )
}

export default BlogBanner;