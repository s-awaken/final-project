const IS_MANAGER = "IS_MANAGER";
const EMPLOYEE = "EMPLOYEE";



const manager = ()=>{

  return {
    type:IS_MANAGER
  }
};
const employee = ()=>{
  return{
    type:EMPLOYEE
  }
};

export default{
  manager,
  employee
}