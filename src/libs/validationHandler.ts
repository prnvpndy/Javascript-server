export default (config) => (req, res, next) =>{
      console.log("config",config);
      console.log(req.query);
      //console.log(req.body);
      
      next();
}

const error = [
      {              
            key: "skip",      
            location: "query",      
            errorMessage: "Skip is invalid"      
      },      
      {      
            key: "limit",      
            location: "query",
            errorMessage: "Limit is invalid"
      }       
]