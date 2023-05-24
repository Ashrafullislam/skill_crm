import { createBrowserRouter } from "react-router-dom";
import Login from "../Componants/Pages/Register/Login";
import AllLeadsMain from "../Componants/Pages/All_Leads/AllLeadsMain";
import MyFollowUpAllLeads from "../Componants/Pages/All_Leads/MyFollowUp";
import MyFollowupPerformance from "../Componants/Pages/HomePageDashboard/MyFollowupPerformance";
import HomePageDashboard from "../Componants/Pages/HomePageDashboard/HomePageDashboard";
import Quarterly from "../Componants/Pages/HomePageDashboard/Quarterly";
import Monthly from "../Componants/Pages/HomePageDashboard/Monthly";
import Daily from "../Componants/Pages/HomePageDashboard/Daily";
import Imports from "../Componants/Pages/HomePageDashboard/Imports";
import AllLeads from "../Componants/Pages/All_Leads/AllLeads";
import Signup from "../Componants/Pages/Register/Signup";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Login> </Login>
    },
    {
        path:'/login',
        element: <Login> </Login>
    },
    {
        path: '/signup',
        element: <Signup> </Signup>
    },

    // Quarterly-KPI-Report Main Page 
    {
        path:  '/homepage-dashboard',
        element: <HomePageDashboard> </HomePageDashboard>, 
        children:[
            {
                path: '/homepage-dashboard/my-followup-performance',
                element:<MyFollowupPerformance> </MyFollowupPerformance>
            },
           
            {
                path: '/homepage-dashboard/kpi-quarterly',
                element: <Quarterly> </Quarterly>
            },
            {
                path: '/homepage-dashboard/kpi-monthly',
                element: <Monthly> </Monthly>
            },
            {
                path: '/homepage-dashboard/kpi-daily',
                element: <Daily> </Daily>
            },
            {
                path: '/homepage-dashboard/kpi-imports',
                element: <Imports >  </Imports>
            }
        ]
    },
    // All Leads Home and Total Leads Showing page 
    {
        path:  '/all-leads',
        element:  <AllLeadsMain> </AllLeadsMain>,
        children: [
            {
                path: '/all-leads/my-followup',
                element: <MyFollowUpAllLeads>  </MyFollowUpAllLeads>
            },
            {
                path: '/all-leads/all-leads-data',
                element: <AllLeads> </AllLeads>
            }
        ]

    },

    {
        path:'*',
        element: <div className="text-3xl text-center mt-4
         font-bold text-red-600"> This routes not found ! </div>
    }
])

export default router ;