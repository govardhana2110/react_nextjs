const { default: baseService } = require("../commonService")


const MockDataService=(data)=>{
    return baseService({
      url:`reqres.in/api/users?page=2`,
      method:'GET',
      headers:{

      } ,
      data:{...data}
    })
}
export default MockDataService;