class traineeController {
      static instance: traineeController

      static getInstance(){
            if(traineeController.instance) {
                  return traineeController.instance
            }
            
            traineeController.instance = new traineeController();
            return traineeController.instance;
      }
       
      get (req, res, next){
            try{
                  console.log('Inside get method of trainee controller');

                  res.send({
                        message: 'Trainee fetched successfully',
                        data:[
                              {
                                    name:'Trainee1',
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
                  console.log('Inside post method of trainee controller');

                  res.send({
                        message: 'Trainee created successfully',
                        data:[
                              {
                                    name:'Trainee1',
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
                  console.log('Inside update method of trainee controller');

                  res.send({
                        message: 'Trainee updated successfully',
                        data:[
                              {
                                    name:'Trainee1',
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
                  console.log('Inside delete method of trainee controller');

                  res.send({
                        message: 'Trainee deleted successfully',
                        data:[
                              {
                                    name:'Trainee1',
                                    address: 'Delhi, IN'
                              }
                        ]
                  });
            }catch(err){
                  console.log("Inside err", err);
            } 
      }
}

export default traineeController.getInstance()