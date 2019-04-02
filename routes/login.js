module.exports = {
    loginPage: (req, res) => {
       

          console.log("hello");
            res.render('login.ejs', {
                title:'login page',
                
            });
       
    },
    
    displayPlayerPage: (req,res)=>{
        
        
        console.log("this");
           let first_name = req.body.first_name;
        let last_name = req.params.last_name;
         console.log("right here " + first_name);
        let query = "SELECT * FROM players WHERE first_name = '" + first_name + "' ;";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('displayPlayer.ejs', {
               
                title: 'display  Player'
                ,player: result[0]
                ,message: ''
                
            });
        });
    
        
        
        
        
    }
    
    
};