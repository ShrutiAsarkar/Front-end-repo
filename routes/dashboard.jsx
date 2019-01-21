import Dashboard from "views/Dashboard/Dashboard.jsx";
import EmployeeDetails from "views/EmployeeDetails/EmployeeDetails.jsx";
import Account from "views/Account/Account.jsx";
import Payroll from "views/Payroll/Payroll.jsx";
import PaySchedule from "views/PaySchedule/PaySchedule.jsx";
import Taxinfo from "views/Taxinfo/Taxinfo.jsx";
import BankAccount from "views/BankAccount/BankAccount.jsx";
import Compensation from "views/Compensation/Compensation.jsx";
import SetupCompany from "views/SetupCompany/SetupCompany.jsx";
import ReviewPayroll from "views/ReviewPayroll/ReviewPayroll.jsx";
import Confirmation from "views/Confirmation/Confirmation.jsx";
import Employees from "views/Employees/Employees.jsx";
import Error from "views/Error/Error.jsx";
import WelcomeRoute from "welcomeRoute";
import CreatePayroll from "views/CreatePayroll/CreatePayroll.jsx"



var dashRoutes = [
  {
    path: "/dashboard/:id?",
    name: "Dashboard",
    icon: "ic_dashboard",
    component: Dashboard,
    show:true
  },
  {
    path: "/payroll",
    name: "Payroll",
    icon: "ic_payments",
    component: Payroll,
    show:true

  },
  {
    path: "/reviewPayroll",
    name: "ReviewPayroll",
    component: ReviewPayroll,
    show:false
  },
  {
      path:"/welcome",
      name:"WelcomeRoute",
      component: WelcomeRoute,
      show:false
  },
  {
    path:"/confirmation/:id",
    name:"Confirmation",
    component:Confirmation,
    show:false
  },
  {
    path: "/employees",
    name: "Employees",
    icon: "ic_clients",
    component: Employees,
    show:true

  },
  {
    path:"/addEmployee",
    name:"EmployeeDetails",
    component:EmployeeDetails,
    show:false
  },
  {
    path:"/addPayroll",
    name:"CreatePayroll",
    component:CreatePayroll,
    show:false
  },
  {
    path: "/account",
    name: "Account",
    icon: "ic_account",
    component: Account,
    show:true
  },
  {
    path:"/setupCompany",
    name:"SetupCompany",
    component:SetupCompany,
    show:false
  },
  {
    path:"/taxinfo",
    name:"Taxinfo",
    component:Taxinfo,
    show:false

  },
  {
    path:"/paySchedule",
    name:"PaySchedule",
    component:PaySchedule,
    show:false

  },
  {
    path:"/bankAccount",
    name:"BankAccount",
    component:BankAccount,
    show:false

  },
  {
    path:"/compensation",
    name:"Compensation",
    component:Compensation,
    show:false
  },
  {
    path:"/error",
    name:"Error",
    component:Error,
    show:false

  },
  {
    redirect: true,
    path:"/",
    pathTo:"/dashboard",
    component:Dashboard
  }


];
export default dashRoutes;
