const initialState = {
  check_center_data: [], //信贷中心
  Loan_farm_data: [], //客户中心
  main_Routers_name: ["Index", "CheckCenter", "LoanFarm"], //用于同一识别两次返回键退出应用的路由页面
  dueDiligenceDetail: {status: 4},
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case "SETCHECKCENTERDATA":
      return {
        ...state,
        check_center_data: [...actions.val]
      };
      break;
    case "SETLOANFRAMDATA":
      return {
        ...state,
        Loan_farm_data: [...actions.val]
      };
      break;
    case "UPDATECHECKCENTERDATA":
      return {
        ...state,
        check_center_data: [...state.check_center_data, ...actions.val]
      };
      break;
    case 'UPDATEDUEDILIGENCEDETDETAIL': // 尽职调查详情
      return {
        ...state,
        dueDiligenceDetail: {
          ...state.dueDiligenceDetail,
          ...actions.val
        }
      }
    case 'UPDATEDUEDILIGENCEDETDATA': // 尽职调查详情
      return {
        ...state,
        dueDiligenceData: [...actions.val]
      }
    default:
      return state;
  }
};
