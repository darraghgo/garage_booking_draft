module.exports = {
    bookingPage: (req, res) => {
       

         
            res.render('booking.ejs', {
                title:'booking page',
                
            });
       
    },
    
        newBooking: (req, res) => {
   
            console.log("newBooking test")
        let message = '';
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let booking = req.body.booking;
         let date = req.body.datepicker;
            console.log(date);
 

        let bookingQuery = "insert into players (first_name,last_name,booking,date) values ('"+ first_name +"','"+last_name +"','"+booking+"','"+date+"')";

        db.query(bookingQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
//            if (result.length > 0) {
//                message = 'Username already exists';
//                res.render('admin.ejs', {
//                    message,
//                    title: ' two  | Add a new player'
//                });
//            } 
        });
    },
    
        editBookingPage: (req, res) => {
        let playerId = req.params.id;
        let query = "SELECT * FROM `players` WHERE id = '" + playerId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-player.ejs', {
                title: 'five  Player'
                ,player: result[0]
                ,message: ''
            });
        });
    },
    editBooking: (req, res) => {
        let playerId = req.params.id;
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let booking = req.body.booking;
        let paintPrice = req.body.paintPrice;
        let wheelPrice = req.body.wheelPrice;
        
        console.log(paintPrice);
       

        let query = "UPDATE `players` SET `first_name` = '" + first_name + "', `last_name` = '" + last_name + "', `booking` = '" + booking + "',  `paintPrice` = '" + paintPrice + "' ,  `wheelPrice` = '" + wheelPrice + "',estimate = paintPrice + wheelPrice WHERE `players`.`id` = '" + playerId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/admin');
        });
    },
    //,'estimate'='paintPrice' + 'wheelPrice'//,'wheelPrice'="+wheelPrice+"
    
};