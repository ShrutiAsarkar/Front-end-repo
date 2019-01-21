import Dashboard from "empViews/Dashboard/Dashboard.jsx";
import Wallets from "empViews/Wallets/Wallets.jsx";

var dashRoutes = [
  {
    path: "/dashboard/:id?",
    name: "Dashboard",
    icon: "ic_dashboard",
    component: Dashboard,
    show:true,
  },
  // {
  //   path: "/payments",
  //   name: "Payments",
  //   icon: "ic_payments",
  //   component: Paystubs,
  //   show:true,
  // },

  {
    path:"/wallets",
    name:"Wallets",
    component:Wallets,
    icon: "ic_wallet",
    show:true

  },

  {redirect: true,path:"/",pathTo:"/dashboard",component:Dashboard}

  // {redirect: true,path:"/",pathTo:"/dashboard",component:Dashboard}

];
export default dashRoutes;
