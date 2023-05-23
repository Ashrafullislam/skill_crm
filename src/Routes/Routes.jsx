import { createBrowserRouter } from "react-router-dom";
import Login from "../Componants/Pages/Register/Login";
import QuarterlyReport from "../Componants/Pages/Quarterly-KPI-Report/QuarterlyReport";
import MyFollowup from "../Componants/Pages/Quarterly-KPI-Report/MyFollowup";
import AllLeads from "../Componants/Pages/Quarterly-KPI-Report/AllLeads";
import KpiQuarterly from "../Componants/Pages/Quarterly-KPI-Report/KpiQuarterly";
import KpiMonthly from "../Componants/Pages/Quarterly-KPI-Report/KpiMonthly";
import KpiDaily from "../Componants/Pages/Quarterly-KPI-Report/KpiDaily";
import KpiImports from "../Componants/Pages/Quarterly-KPI-Report/KpiImports";

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
                element:<KpiQuarterly> </KpiQuarterly>
            },
            {
                path: '/quarterly-report/kpi-monthly',
                element: <KpiMonthly> </KpiMonthly>
            },
            {
                path: '/quarterly-report/kpi-daily',
                element: <KpiDaily> </KpiDaily>
            },
            {
                path: '/quarterly-report/kpi-imports',
                element: <KpiImports> </KpiImports>
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