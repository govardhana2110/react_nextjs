const { default: baseService } = require("../commonService")


const MockDataService=()=>{
    return baseService({
      url:`reqres.in/api/users?page=2`,
      method:'GET',
      headers:{

      } 
    })
}
export default MockDataService;