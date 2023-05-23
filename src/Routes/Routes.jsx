import { createBrowserRouter } from "react-router-dom";
import Login from "../Componants/Pages/Register/Login";
import QuarterlyReport from "../Componants/Pages/Quarterly-KPI-Report/QuarterlyReport";
import MyFollowup from "../Componants/Pages/Quarterly-KPI-Report/MyFollowup";
import AllLeads from "../Componants/Pages/Quarterly-KPI-Report/AllLeads";
import Quarterly from "../Componants/Pages/Quarterly-KPI-Report/Quarterly";
import Monthly from "../Componants/Pages/Quarterly-KPI-Report/Monthly";
import Daily from "../Componants/Pages/Quarterly-KPI-Report/Daily";
import Imports from "../Componants/Pages/Quarterly-KPI-Report/Imports";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Login> </Login>
    },
    {
        path:'/login',
        element: <Login> </Login>
    },

    // Quarterly-KPI-Report Main Page 
    {
        path:  '/quarterly-report',
        element: <QuarterlyReport>  </QuarterlyReport>,
        children:[
            {
                path: '/quarterly-report/my-followup',
                element:<MyFollowup> </MyFollowup>
            },
            {
                path: '/quarterly-report/all-leads',
                element:<AllLeads> </AllLeads>
            },
            {
                path: '/quarterly-report/kpi-quarterly',
                element:<Quarterly> </Quarterly>
            },
            {
                path: '/quarterly-report/kpi-monthly',
                element: <Monthly> </Monthly>
            },
            {
                path: '/quarterly-report/kpi-daily',
                element: <Daily> </Daily>
            },
            {
                path: '/quarterly-report/kpi-imports',
                element: <Imports> </Imports>
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