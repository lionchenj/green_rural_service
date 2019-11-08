import { actionType } from "common/actionType";
const getUserInfo = val => ({
  type: actionType.GETUSERINFO,
  val
});
const setCheckCenterData = val => ({
  type: actionType.SETCHECKCENTERDATA,
  val
});
const updateCheckCenterData = val => ({
  type: actionType.UPDATECHECKCENTERDATA,
  val
});
const setLoanFarmData = val => ({
  type: actionType.SETLOANFRAMDATA,
  val
});
const updateDueDiligenceDetail = val => ({ // 修改尽职详情
  type: actionType.UPDATEDUEDILIGENCEDETDETAIL,
  val
});
const updateDueDiligenceData = val => ({ // 修改尽职详情 整理数据
  type: actionType.UPDATEDUEDILIGENCEDETDATA,
  val
});

export { getUserInfo, setCheckCenterData, setLoanFarmData, updateCheckCenterData, updateDueDiligenceDetail,updateDueDiligenceData };
