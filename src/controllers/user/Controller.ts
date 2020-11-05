class userController {
    static instance: userController

    static getInstance(){
          if(userController.instance) {
                return userController.instance
          }
          
          userController.instance = new userController();
          return userController.instance;
    }
     
    get (req, res, next){
          try{
                console.log('Inside get method of user controller');

                res.send({
                      message: 'User fetched successfully',
                      data:[
                            {
                                  name:'User1',
                                  address: 'Delhi, IN'
                            }
                      ]
                });
          }catch(err){
                console.log("Inside err", err);
          }
    } 

    
    create (req, res, next){
          try{
                console.log('Inside post method of user controller');

                res.send({
                      message: 'User created successfully',
                      data:[
                            {
                                  name:'User',
                                  address: 'Delhi, IN'
                            }
                      ]
                });
          }catch(err){
                console.log("Inside err", err);
          }
    }

    update (req, res, next){
          try{
                console.log('Inside update method of user controller');

                res.send({
                      message: 'User updated successfully',
                      data:[
                            {
                                  name:'User1',
                                  address: 'Delhi, IN'
                            }
                      ]
                });
          }catch(err){
                console.log("Inside err", err);
          }
    }
    delete (req, res, next){
          try{
                console.log('Inside delete method of User controller');

                res.send({
                      message: 'User deleted successfully',
                      data:[
                            {
                                  name:'User1',
                                  address: 'Delhi, IN'
                            }
                      ]
                });
          }catch(err){
                console.log("Inside err", err);
          } 
    }
}

export default userController.getInstance()