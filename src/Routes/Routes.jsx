import { createBrowserRouter } from "react-router-dom";
import Login from "../Componants/Pages/Register/Login";
import Quarterly_Report from "../Componants/Pages/Quarterly-KPI-Report/QuarterlyReport";
import QuarterlyReport from "../Componants/Pages/Quarterly-KPI-Report/QuarterlyReport";

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
        path:  '/quarterly-report',
        element: <QuarterlyReport>  </QuarterlyReport>
    },
    {
        path:'*',
        element: <div className="text-3xl text-center mt-4
         font-bold text-red-600"> This routes not found ! </div>
    }
])

export default router ;