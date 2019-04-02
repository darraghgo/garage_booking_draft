module.exports = {
    homePage: (req, res) => {
     

      
         
            res.render('home.ejs', {
                title:'home page',
              
            });
       
    },
    
        welcome: (req, res) => {
     

      
         
            res.render('welcome.ejs', {
                
                title:'welcome page',
              
            });
       
    },
    
            aboutPage: (req, res) => {
     

      
         
            res.render('about.ejs', {
                title:'All About Us',
              
            });
       
    },
    
};