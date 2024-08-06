


//home
exports.homepage=async(req,res)=>{
    const locals={
        title:"Nodejs Notes"
    }
       // rendering home page to the route
    res.render('index',{locals,
        layout:'C:\\Users\\Rohith\\Notes\\views\\layouts\\front-page.ejs'}
    );
}

exports.page404=async(req,res)=>{
    const locals={
        title:"404 Page"
    }
    res.render('404',locals)
}

//about
exports.aboutpage=async(req,res)=>{
    const locals={
        title:"About- Notes"
    }
     // rendering about page to the route
    res.render('about',{locals,
        layout:'C:\\Users\\Rohith\\Notes\\views\\layouts\\front-page.ejs'}
    );
}
