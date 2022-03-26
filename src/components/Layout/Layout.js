import React,{useState,useEffect} from 'react';
import Sidebar from './Sidebar' 
import Header from './Header'

const Layout = ({ children }) =>{
    const [open, setsOpen] = useState(false)
    const [mobile, setMobile] = useState(false)
    const [mobilesideactive,setSideOpen] = useState(false)

    const Reduce = (tex) => {  
        if(tex){
            setsOpen(!open);
        }      
    }

    useEffect(() => {  
        var win_width = window.innerWidth;
        if(win_width<768){
             setMobile(true);
        } 
    },[]); 

    const MobileSideOpen = (txt) => { // the callback. Use a mobile side open
        console.log(txt);
        setSideOpen(!mobilesideactive)
    };

    const MobileSideClose = (close) => {
        console.log(close);
        setSideOpen(false);
    }

    return(
        <>
            <div className={mobile ? "ismobile main-layout" : "main-layout"} >
                <div className={mobilesideactive?"mobilesideopen aside":"aside"}>
                    <Sidebar  Reduse={Reduce} mobilesideclose={MobileSideClose}/>
                </div>
                <div className={open ? "reduce page-content" : "page-content"}>
                    <header className="page-header">
                        <Header mobilesideopen={MobileSideOpen}/>
                    </header>
                    <main className="page-main">                        
                        {children}
                    </main>
                </div>
            </div>    
        </>
    ) 
}

export default Layout;