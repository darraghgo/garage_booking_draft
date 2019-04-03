module.exports = {

    
    adminPage:(req,res)=>{
         let query = "SELECT * FROM `players` ORDER BY id ASC"; // query database to get all the players
        
        
        
         let playerId = req.params.id;
                db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('admin.ejs', {
                title:'Admin page',
                players: result
                
            });
        });
                   
      
    },
    
  
        assignPlayer: (req, res) => {
         console.log("assign");
           let employee = req.body.employee;
            let first_name = req.params.first_name;
           
        
         console.log(" here " + employee + first_name);
           // update players set employee = 'jimmy' where first_name = 'jl';
             
        let query = "Update players set employee ='"+ employee + "' where first_name = '"+first_name+"'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            
            
            res.redirect('/admin');
//            res.render('admin.ejs', {
//               
//                title: 'admin  '
//                ,players: result
//                ,message: ''
//                
//            });
        });
        
          },
    
        
    displayDate:(req,res)=>{
         let query = "SELECT date FROM `players` ORDER BY id ASC"; // query database to get all the players
        
        
        
         //let playerId = req.params.id;
                db.query(query, (err, dateResult) => {
            if (err) {
                res.redirect('/');
            }
            res.render('admin.ejs', {
                title:'Admin page',
                bookingDate: dateResult
                
            });
        });
                   
      
    },
    
    
            billPage: (req, res) => {
        let playerId = req.params.id;
        let query = "SELECT * FROM `players` WHERE id = '" + playerId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('bill.ejs', {
                title: 'Bill'
                ,player: result[0]
                ,message: ''
            });
        });
    },
    
};